import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import pl from "@fullcalendar/core/locales/pl";
import { DateModal } from "./Modals/DateModal";
import { EditDateModal } from "./Modals/EditEventModal";
import { CalendarContainer, EventContentContainer } from "./Calendar.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectInstructorEvents } from "../../../redux/events/selectors";
import {
  createNewEvent,
  fetchInstructorEvents,
  updateEventInfo,
} from "../../../redux/events/operations";
import { selectInstructor } from "../../../redux/instructors/selectors";

export const Calendar = () => {
  const dispatch = useDispatch();
  const instructorEvents = useSelector(selectInstructorEvents);
  const instructorId = useSelector(selectInstructor)?._id;
  const [showDateModal, setShowDateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    if (instructorId) {
      dispatch(fetchInstructorEvents(instructorId));
    }
  }, [dispatch, instructorId]);

  if (!instructorEvents) {
    return <p>Loading events...</p>;
  }

  const formattedEvents =
    instructorEvents?.events?.map((event) => ({
      ...event,
      id: event._id,
    })) || [];

  const openDateModal = (info) => {
    setCurrentEvent({
      start: info.startStr,
      allDay: info.allDay,
      end: info.endStr,
    });
    setShowDateModal(true);
  };

  const handleEventClick = (info) => {
    setCurrentEvent(info.event);
    setShowEditModal(true);
  };

  const closeDateModal = () => {
    setShowDateModal(false);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const updateEvent = (updatedEvent) => {
    setCurrentEvent(updatedEvent);
  };

  const handleSave = async (preparedData) => {
    try {
      await dispatch(createNewEvent(preparedData));
      await dispatch(fetchInstructorEvents(instructorId));
      closeDateModal();
    } catch (error) {
      console.error("Failed to save the event:", error);
    }
  };

  const handleEventDrop = async (info) => {
    const eventId = info.event.id;
    const updatedEventData = {
      start: info.event.startStr,
      end: info.event.endStr,
    };
    try {
      await dispatch(updateEventInfo({ eventId, data: updatedEventData }));
      await dispatch(fetchInstructorEvents(instructorId));
    } catch (error) {
      console.error("Failed to update the event:", error);
    }
  };

  return (
    <>
      <CalendarContainer>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev, today",
            center: "title",
            right: "next",
          }}
          initialView="timeGridWeek"
          locales={[pl]}
          locale="pl"
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          select={openDateModal}
          events={formattedEvents}
          eventContent={eventContent}
          eventDrop={handleEventDrop}
          eventClick={handleEventClick}
        />
        {showDateModal && (
          <DateModal
            handleClose={closeDateModal}
            event={currentEvent}
            updateEvent={updateEvent}
            handleSave={handleSave}
          />
        )}
        {showEditModal && (
          <EditDateModal
            handleClose={closeEditModal}
            event={currentEvent}
            updateEvent={updateEvent}
            handleSave={handleSave}
          />
        )}
      </CalendarContainer>
    </>
  );
};

const eventContent = ({ event }) => {
  const { start, end, extendedProps } = event;
  const formattedStart = format(new Date(start), "HH:mm");
  const formattedEnd = format(new Date(end), "HH:mm");
  const classLevel = extendedProps.classLevel || "No class level";

  return (
    <EventContentContainer>
      <p>
        {formattedStart} - {formattedEnd}
      </p>
      <p>{classLevel}</p>
    </EventContentContainer>
  );
};

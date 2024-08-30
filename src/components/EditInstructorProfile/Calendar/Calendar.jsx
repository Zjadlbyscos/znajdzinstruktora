import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import pl from "@fullcalendar/core/locales/pl";
import { DateModal } from "./Modals/DateModal";
import { CalendarContainer } from "./Calendar.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectInstructorEvents } from "../../../redux/events/selectors";
import {
  createNewEvent,
  fetchInstructorEvents,
} from "../../../redux/events/operations";
import { selectInstructor } from "../../../redux/instructors/selectors";

export const Calendar = () => {
  const dispatch = useDispatch();
  const instructorEvents = useSelector(selectInstructorEvents);
  const instructorId = useSelector(selectInstructor)._id;
  console.log(instructorEvents, "instructorEvents");
  const [showDateModal, setShowDateModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    dispatch(fetchInstructorEvents(instructorId));
  }, [dispatch, instructorId]);

  const openDateModal = (info) => {
    setCurrentEvent({
      start: info.startStr,
      allDay: info.allDay,
      end: info.endStr,
    });
    setShowDateModal(true);
  };

  const closeDateModal = () => {
    setShowDateModal(false);
  };

  const updateEvent = (updatedEvent) => {
    setCurrentEvent(updatedEvent);
  };

  const handleSave = async () => {
    try {
      await dispatch(createNewEvent(currentEvent));
      await dispatch(fetchInstructorEvents(instructorId));
      closeDateModal();
    } catch (error) {
      console.error("Failed to save the event:", error);
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
          events={instructorEvents}
          eventContent={eventContent}
        />
        {showDateModal && (
          <DateModal
            handleClose={closeDateModal}
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
  const formattedStart = format(new Date(start), "h:mm");
  const formattedEnd = format(new Date(end), "h:mm");
  console.log(extendedProps, "extendedProps");
  return (
    <div>
      <p>
        {formattedStart} - {formattedEnd}
      </p>
      <p>{extendedProps.classLevel}</p>
      <p>{extendedProps.duration}</p>
    </div>
  );
};

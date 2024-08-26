import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import pl from "@fullcalendar/core/locales/pl";
import { DateModal } from "./Modals/DateModal";
import { CalendarContainer } from "./Calendar.styled";

export const Calendar = () => {
  const [showDateModal, setShowDateModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [events, setEvents] = useState([]);

  const openDateModal = (info) => {
    setCurrentEvent({
      title: "",
      start: info.dateStr,
      allDay: info.allDay,
      id: new Date().getTime(),
      time: "",
      additionalInfo: "",
    });
    setShowDateModal(true);
  };

  const closeDateModal = () => {
    setShowDateModal(false);
  };

  const updateEvent = (updatedEvent) => {
    setCurrentEvent(updatedEvent);
  };

  const handleSave = () => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.filter((e) => e.id !== currentEvent.id);
      return [...updatedEvents, currentEvent];
    });
    closeDateModal();
  };

  return (
    <>
      <CalendarContainer>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          locales={[pl]}
          locale="pl"
          nowIndicator={true}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          dateClick={openDateModal}
          events={events}
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

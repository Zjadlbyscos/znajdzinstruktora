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
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  const openDateModal = (info) => {
    setNewEvent({
      ...newEvent,
      start: info.dateStr,
      allDay: info.allDay,
      id: new Date().getTime(),
    });
    setShowDateModal(true);
  };

  const closeDateModal = () => {
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
    setShowDateModal(false);
  };

  return (
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
      />
      {showDateModal && <DateModal handleClose={closeDateModal} />}
    </CalendarContainer>
  );
};

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import pl from "@fullcalendar/core/locales/pl";

export const calendarConfig = () => {
  return {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
      left: "prev, today",
      center: "title",
      right: "next",
    },
    initialView: window.innerWidth < 768 ? "timeGridDay" : "timeGridWeek",
    locales: [pl],
    locale: "pl",
    height: "auto",
    editable: true,
    droppable: true,
    selectable: true,
    selectMirror: true,
  };
};

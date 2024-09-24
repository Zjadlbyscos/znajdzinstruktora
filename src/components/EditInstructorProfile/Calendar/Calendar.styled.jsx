import styled from "styled-components";

export const CalendarContainer = styled.div`
  position: relative;
  margin-top: 50px;
  & .fc-timegrid-slot,
  .fc-daygrid-day-events,
  .fc-timegrid-axis-cushion {
    background-color: var(--background-2);
  }
  & .fc-event {
    background-color: var(--primary-color);
  }
  & .fc-button {
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`;

export const EventContentContainer = styled.div`
  text-align: center;
`;

import styled from "styled-components";

export const UpcomingEventsWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const EventList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-top: 30px;
`;

export const Event = styled.li`
  position: relative;
  cursor: pointer;

  img {
    display: block;
    max-width: 100%;
    height: 270px;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const EventDescription = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;

  p {
    padding: 10px;
    margin: 0;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

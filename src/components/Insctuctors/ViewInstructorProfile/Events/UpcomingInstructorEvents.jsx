import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInstructorUpcomingEvents } from "../../../../redux/events/operations";
import {
  Event,
  EventDescription,
  EventList,
  PaginationContainer,
  UpcomingEventsWrapper,
} from "./UpcomingInstructorEvents.styled";
import NoImageSmall from "../../../../images/NoImageSmall.png";
import { selectUpcomingInstructorEvents } from "../../../../redux/events/selectors";
import { usePagination } from "../../../../hooks/usePagination";
import { useParams } from "react-router-dom";

export const UpcomingInstructorEvents = () => {
  const { limit } = usePagination();
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loadedEvents, setLoadedEvents] = useState([]);
  const eventsData = useSelector(selectUpcomingInstructorEvents);
  const { id } = useParams();

  const dispatch = useDispatch();

  const formattedDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleString();
  };

  useEffect(() => {
    dispatch(getInstructorUpcomingEvents({ id, page, limit }));
  }, [dispatch, id, limit, page]);

  useEffect(() => {
    if (eventsData) {
      setLoadedEvents((prevEvents) => [...prevEvents, ...eventsData]);
      setTotalPages(eventsData.totalPages);
    }
  }, [eventsData]);

  return (
    <div>
      <UpcomingEventsWrapper>
        <h2>Najbliższe zajęcia</h2>
        <EventList>
          {eventsData.map((event, index) => {
            const imgSrc = event.facility.image || NoImageSmall;
            return (
              <Event key={index}>
                <img src={imgSrc} alt="facility" />
                <EventDescription>
                  <p>{formattedDate(event.date)}</p>
                  <p>{event.description}</p>
                  <p>{event.discipline}</p>
                  <p>{event.classLevel}</p>
                </EventDescription>
              </Event>
            );
          })}
        </EventList>
      </UpcomingEventsWrapper>

      <PaginationContainer>
        <button onClick={() => setPage(page - 1)}>Pokaż wcześniejsze</button>
        <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
          Załaduj więcej
        </button>
      </PaginationContainer>
    </div>
  );
};

import { useRef, useState } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import {
  deleteEvent,
  fetchInstructorEvents,
  updateEventInfo,
} from "../../../../redux/events/operations";
import { DateModal } from "./DateModal";
import { EditEventContainer } from "./EditEventModal.styled";

export const EditDateModal = ({ handleClose, event }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const { extendedProps } = event;
  const instructorId = extendedProps.instructorId;
  const [showEditModal, setShowEditModal] = useState(false);

  useOutsideClick(modalRef, handleClose, true);

  const handleDelete = async () => {
    const eventId = extendedProps._id;
    try {
      await dispatch(deleteEvent(eventId));
      await dispatch(fetchInstructorEvents(instructorId));
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const handleEditEvent = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    handleClose();
  };

  const handleSaveEdit = async (updatedData) => {
    const eventId = extendedProps._id;
    try {
      await dispatch(updateEventInfo({ eventId, data: updatedData }));
      await dispatch(fetchInstructorEvents(instructorId));
      closeEditModal();
    } catch (error) {
      console.error("Failed to update the event:", error);
    }
  };

  return (
    <EditEventContainer ref={modalRef}>
      <div>
        <button onClick={handleClose}>X</button>
        <p>{extendedProps.classLevel}</p>
        <p>{extendedProps.address}</p>
        <p>{extendedProps.description}</p>
        <button onClick={handleEditEvent}>Edytuj zajęcia</button>
        <button onClick={handleDelete}>Usuń zajęcia</button>
      </div>

      {showEditModal && (
        <DateModal
          handleClose={closeEditModal}
          event={event}
          handleSave={handleSaveEdit}
        />
      )}
    </EditEventContainer>
  );
};

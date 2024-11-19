import { useEffect, useState } from "react";
import {
  BioContainer,
  Contact,
  ContactContainer,
  ContactHeader,
  ImageContainer,
  InstructorProfileWrapper,
  Profile,
  SocialsContainer,
} from "./ViewInstructorProfile.styled";
import { useDispatch, useSelector } from "react-redux";
import { getInstructorById } from "../../../redux/instructors/operations";
import { useParams } from "react-router-dom";
import { selectInstructor } from "../../../redux/instructors/selectors";
import { EnvelopeSVG, PhoneSVG } from "../../RenderSvg/RenderSvg";
import { SocialMedia } from "./Socials/Socials";
import { UpcomingInstructorEvents } from "./Events/UpcomingInstructorEvents";
import NoImageSmall from "../../../images/NoImageSmall.png";
import { RateModal } from "./Rate/Modals/RateModal";
import { InstructorRating } from "./Rate/InstructorRating";

export const ViewInstructorProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const instructor = useSelector(selectInstructor);
  const [showRateModal, setShowRateModal] = useState(false);

  useEffect(() => {
    dispatch(getInstructorById(id));
  }, [dispatch, id]);

  const imgSrc = instructor.image || NoImageSmall;

  const openRateModal = () => {
    setShowRateModal(true);
  };

  const closeRateModal = () => {
    setShowRateModal(false);
  };

  return (
    <>
      <InstructorProfileWrapper>
        <Profile>
          <ImageContainer>
            <h2>{instructor.fullName}</h2>
            <img src={imgSrc} alt="instructor" />
          </ImageContainer>
          <BioContainer>
            <button onClick={openRateModal}>Oceń mnie!</button>
            <p>{instructor.bio}</p>
          </BioContainer>
          <ContactHeader>Kontakt</ContactHeader>
          <ContactContainer>
            <Contact>
              <a href={`tel:${instructor.phoneNumber}`}>
                <PhoneSVG />
                {instructor.phoneNumber}
              </a>
              <a href={`mailto:${instructor.email}`}>
                <EnvelopeSVG />
                {instructor.email}
              </a>
            </Contact>
            <SocialsContainer>
              <SocialMedia instructor={instructor} />
            </SocialsContainer>
          </ContactContainer>
        </Profile>
      </InstructorProfileWrapper>
      <UpcomingInstructorEvents instructor={instructor} />
      {showRateModal && (
        <RateModal handleClose={closeRateModal} instructor={instructor} />
      )}
      <InstructorRating />
    </>
  );
};

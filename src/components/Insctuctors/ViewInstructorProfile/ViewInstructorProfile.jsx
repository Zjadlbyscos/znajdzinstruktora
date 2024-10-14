import { useEffect } from "react";
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

export const ViewInstructorProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const instructor = useSelector(selectInstructor);

  useEffect(() => {
    dispatch(getInstructorById(id));
  }, [dispatch, id]);

  return (
    <>
      <InstructorProfileWrapper>
        <Profile>
          <ImageContainer>
            <img src={instructor.image} alt="instructor" />
            <h2>{instructor.fullName}</h2>
          </ImageContainer>
          <BioContainer>
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
    </>
  );
};

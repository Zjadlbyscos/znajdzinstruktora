import styled from "styled-components";

export const InstructorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-top: 20px;
  img {
    border-radius: 15%;
  }
`;

export const Profile = styled.div`
  text-align: center;
  width: 75%;
  background-color: var(--background-2);
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
`;

export const BioContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 18px;
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    display: flex;
    align-items: center;
  }
  svg {
    width: 23px;
    height: 23px;
    margin-right: 10px;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.3s;
    }
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const ContactHeader = styled.h3`
  text-align: left;
  margin-left: 18px;
`;

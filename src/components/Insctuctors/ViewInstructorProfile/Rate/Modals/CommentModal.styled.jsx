import styled from "styled-components";

export const CommentModalWrapper = styled.div`
  position: absolute;
  max-width: 75%;
  z-index: 1;
  background-color: var(--background-2);
  top: 90%;
  left: 15%;
  border-radius: 15px;
  border: 1px solid black;
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
  opacity: 0;
  transform: translateY(50px);

  &.visible {
    opacity: 1;
    transform: translateY(-50px);
  }

  &.hidden {
    opacity: 0;
    transform: translateY(50px);
  }

  button {
    float: right;
    margin: 5px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;
`;

export const Comment = styled.p`
  padding: 20px;
`;

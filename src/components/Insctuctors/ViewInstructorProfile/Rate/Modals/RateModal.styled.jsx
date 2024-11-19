import styled from "styled-components";

export const RateModalContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 65%;
  border-radius: 25px;
  z-index: 1;
  background-color: var(--background-2);
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const RateModalForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const CommentInput = styled.input`
  display: block;
  clear: both;
  width: 350px;
  height: 100px;
  margin-bottom: 10px;
  padding: 15px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const InstructorName = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 25px;

  p {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

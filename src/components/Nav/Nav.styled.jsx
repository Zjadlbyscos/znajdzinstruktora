import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: 20px; /* Adjust as needed */
`;
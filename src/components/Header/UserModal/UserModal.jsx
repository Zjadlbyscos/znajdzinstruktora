import React from "react";
import { UserMenu } from "../UserMenu/UserMenu";
import { ProfieleModalContainer } from "./UserModal.styled";

export const UserModal = ({ closeModal }) => {
  const handleClick = () => {
    closeModal();
  };

  return (
    <ProfieleModalContainer onClick={handleClick}>
      <UserMenu />
    </ProfieleModalContainer>
  );
};
import { useNavigate, useParams } from "react-router-dom";
import { ActivateContainer } from "./Activate.styled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { activateAccount } from "../../../redux/auth/operations";

export const Activate = () => {
  const navigate = useNavigate();
  const verificationToken = useParams();
  const dispatch = useDispatch();
  console.log(verificationToken);

  useEffect(() => {
    dispatch(activateAccount(verificationToken));
  }, [dispatch, verificationToken]);

  const handleClick = () => {
    navigate("/zaloguj");
  };
  return (
    <ActivateContainer>
      <p>Twoje konto zostało aktywowane! Teraz możesz się zalogować</p>
      <button onClick={handleClick}>Zaloguj</button>
    </ActivateContainer>
  );
};

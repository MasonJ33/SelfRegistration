import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StartScreen = ({ tutorial, setProgress }) => {
  const progressClick = () => {
    localStorage.setItem('pawsTutorialProgress', 16);
    setProgress(localStorage.getItem("pawsTutorialProgress"));
  }

  return (
    <Window>
      <StyledButton onClick={() => progressClick()}>Begin Tutorial</StyledButton>
    </Window>
  )
}

const StyledButton = styled(Button)`
  width: 20%;
  background-color: #005028;
  margin-right: 12px;
  color: white;
  &:hover {
    background-color: #32C448;
  }
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  min-width: 1600px;
  background-color: #D5D5D5;
  overflow: auto;
  border-style: solid;
  border-width: 5px;
  border-color: #005028;
  border-radius: 5px 5px 0 0;
  overflow-y: auto;
`;
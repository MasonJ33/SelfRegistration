import React from "react";
import styled from "@emotion/styled";

export const PawsSearch = () => {
  return (
    <Container>
      <Searchmsg>Search</Searchmsg>
      <input />
      <StyledButton>Go</StyledButton>
    </Container>
  )
};

const Searchmsg = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: strech;
  gap: 3px;
  height: 50%;
`;
import React, { useState } from "react";
import styled from "@emotion/styled";
import { MockWindow } from "./mockWindow";
import { MockPawsWindow } from "./mockPawsWindow";

export const SelfRegistration = () => {
  const [paws, setPaws] = useState(false);

  return (
    <Page>
      <Container>
        Test
      </Container>
      {paws ? (
        <MockPawsWindow />
      ) : (
        <MockWindow setPaws={setPaws}/>
      )}
    </Page>
  )
}

const Container = styled.div`
  color: white;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px 20px 50px;
  height: 100vh;
  background-color: #176122;
  overflow: auto;
`;
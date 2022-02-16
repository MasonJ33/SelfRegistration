import React from "react";
import styled from "@emotion/styled";

export const AboutPage = () => {
  return (
    <Page>
      <h1>About Page</h1>
    </Page>
)
}

const Page = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
background-color: white;
`;
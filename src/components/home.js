import styled from "@emotion/styled";
import React from "react";

export const Home = () => {
    return (
        <Page>
          <h1>Home Page</h1>
        </Page>
    )
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #176122;
`;
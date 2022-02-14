import styled from "@emotion/styled";

import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <Page>
      <Window>
        <Container>
          <Head>
            Welcome to Georgia College's Self-Registration tutorial website!
          </Head>
          <Body>
            <br />
            This website is designed to help you learn and eventually complete the self-registration process!
            Above in the navbar you will see different tabs that will help with this learning process.
            We reccomend you start with the videos, which will help you learn the layouts and different links needed to follow
            to start the self-registration process!
            <br />
            <br />
            Below are some links to the actual PAWS and Unify websites in case you have completed everything here and wish to try
            logging in on the actual sites.
          </Body>
          <Message>
            <StyledButton onClick={() => window.open('https://unify.gcsu.edu/')}>Click Here</StyledButton>
            to go to Unify.
            <br />
            <br />
            <StyledButton onClick={() => window.open('https://gcsu.gabest.usg.edu/ssomanager/c/SSB')}>Click Here</StyledButton>
            to go to PAWS.
            <br />
            <br />
            <StyledButton onClick={() => window.open('https://gcsu.view.usg.edu/')}>Click Here</StyledButton>
            to go to D2L.
          </Message>
        </Container>

      </Window>

    </Page>
  )
}

const Page = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #176122;
`;

const Container = styled.div`
  margin-top: 100px;
  color: #176122;
  text-align: left;
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1600px;
  min-height: 700px;
  background-color: white;
  border-color: #001580;
  border-radius: 25px;
  border-style: solid;
  border-width: thick;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 30px 30px 30px 30px;
  overflow-y: auto;
`;

const Head = styled.h1`
  
`
const Message = styled.h1`
  align-items: left;
`


const Body = styled.body`
  padding: 3px 3px 30px 30px;
  display: flex;
  align-items: left;
  font-size: 20px;
  max-width: 1100px;
`
const StyledButton = styled(Button)`
  background-color: #176122;
  margin-right: 12px;
  color: white;
  &:hover {
    background-color: #32C448;
  }
`;
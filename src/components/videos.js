import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { VideoCard } from "./videoCard";

export const Videos = () => {
    const videos = ['Video1', 'Video2', 'Video3'];
    let navigate = useNavigate();

    return (
        <Page>
          <PageTitle>Tutorial Videos</PageTitle>
          <Window>
          <Grid container spacing={1}>
            {videos.map((video) => (
              <Grid key={video} item xs={4}>
                <VideoCard title={video}/>
              </Grid>
            ))}
          </Grid>
          <Container>
              <Message>
                Ready for the Walkthrough Self Registration Demos?
                <br />
                <StyledButton onClick={() => navigate('/selfRegistration')}>Click Here</StyledButton>
                to go to SelfRegistration Demos.
                <br />
                This is to see where the scroll shows
              </Message>
          </Container>
          </Window>
        </Page>
    )
}

const StyledButton = styled(Button)`
  background-color: #176122;
  margin-right: 12px;
  color: white;
  &:hover {
    background-color: #32C448;
  }
`;

const Message = styled.h1`
  
`

const Container = styled.div`
  margin-top: 100px;
  color: #176122;
  text-align: center;
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: white;
  color: #176122;
  font-size: 20px;
  font-weight: 600;
  padding: 4px 16px;
  margin-bottom: 10px;
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1600px;
  height: 700px;
  background-color: white;
  border-color: #001580;
  border-radius: 25px;
  border-style: solid;
  border-width: thick;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 30px 30px 30px 30px;
  overflow-y: auto;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #176122;
`;
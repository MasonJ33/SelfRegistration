import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { VideoCard } from "./videoCard";
import VideoOne from "../assests/videos/vid1.mov";
import VideoTwo from "../assests/videos/vid2.mov";

export const Videos = () => {
    const videos = [
      {
        name: 'Add Courses via College Scheduler',
        src: VideoOne
      },
      {
        name: 'Find Registration/Select Term',
        src: VideoTwo
      },
      {
        name: 'Video3',
        src: " "
      }];
    let navigate = useNavigate();

    return (
        <Page>
          <PageTitle>Tutorial Videos</PageTitle>
          <Window>
          <Grid container spacing={1}>
            {videos.map((video) => (
              <VidGrid key={video.name} item xs={4}>
                <VideoCard title={video.name} video={video.src}/>
              </VidGrid>
            ))}
          </Grid>
          <Container>
              <Message>
                Ready for the Walkthrough Self Registration Demos?
                <br />
                <StyledButton onClick={() => navigate('/tutorials')}>Click Here</StyledButton>
                to go to SelfRegistration Demos.
              </Message>
          </Container>
          </Window>
        </Page>
    )
}

const VidGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  background-color: #005028;
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
  color: #005028;
  text-align: center;
`;

const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: white;
  color: #005028;
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
  border-radius: 25px;
  padding: 30px 30px 30px 30px;
  overflow-y: auto;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: white;
`;
import React, { useState } from "react";
import styled from "@emotion/styled";
import CancelIcon from '@mui/icons-material/Cancel';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { IconButton, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const VideoCard = ({ title, video }) => {
  const [watched, setWatched] = useState(false);

  return (
    <VideoContainer>
      <Card>
        <HeaderContainer>
          {title}
        </HeaderContainer>
        <VideoWindow>
          <IconButton onClick={() => setWatched(!watched)}>
            {/*TODO: add actual video/thumbnail here*/}
            <PlayCircleIcon />
          </IconButton>
        </VideoWindow>
      </Card>
      {watched ? (
        <AccordionFooter watch>
          <Typography>
          Completion Status:
          <CheckCircleIcon color='success' />
          </Typography>
        </AccordionFooter>
      ) : (
        <AccordionFooter >
          <Typography>
          Completion Status:
          <CancelIcon color='warning' />
          </Typography>
        </AccordionFooter>
      )}
    </VideoContainer>
  )
}

const VideoContainer = styled.div`
  width: 325px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  background-color: white;
  border-radius: 15px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 15px 15px 0 0;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  color: white;
  background-color: #176122;
  padding-left: 8px;
  margin: 0;
`;
const VideoWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin: 0;
`;

const AccordionFooter = styled.div`
  height: 50px;
  width: 100%;
  border-top: ${props => props.watch ? "5px solid #176122" : "5px solid red"};
  border-radius: 0 0 25px 25px;
  padding-left: 8px;
`;
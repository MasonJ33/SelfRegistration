import React, { useState } from "react";
import styled from "@emotion/styled";
import CancelIcon from '@mui/icons-material/Cancel';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
          >
            Completion Status:
            <CheckCircleIcon color='success' />
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>{/*TODO add transcripts here*/}
          </AccordionDetails>
        </AccordionFooter>
      ) : (
        <AccordionFooter >
          <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
          >
            Completion Status:
            <CancelIcon color='warning' />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>A quick brown fox jumped over the zay dog. abc efg hig hijkl mnopqr stu vw xyz</Typography>{/*TODO add transcripts here*/}
          </AccordionDetails>
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
  background-color: #001580;
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

const AccordionFooter = styled(Accordion)`
  width: 100%;
  border-top: ${props => props.watch ? "5px solid #176122" : "5px solid red"};
  .&&{
    border-radius: 0 0 25px 25px;
  }
  padding-left: 8px;
`;
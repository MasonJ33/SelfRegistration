import React from "react";
import styled from "@emotion/styled";
import { LinearProgress, Typography, Tooltip, IconButton } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

export const ProgressBar = ({ tutorial, setHint, progress }) => {
  const navigate = useNavigate();

  const getPercentage = () => {
    return (progress + "%");
  }

  return (
    <Bar>
      <BarSection>
        <Typography>Progress: </Typography>
        {getPercentage()}
      </BarSection >
      <ProgressContainer>
        <StyledLinearProgress variant="determinate" color="inherit" value={parseInt(progress)} />
      </ProgressContainer>
      <Tooltips>
        <Tooltip 
          onMouseEnter={() => setHint(true)}  
          onMouseLeave={() => setHint(false)}
          title="Hint: Click on the Paws image square located near the middle of the screen. The image contains a blue and green bobcat and the word paws."
        >
          <HelpOutlineIcon />
        </Tooltip>
        <Tooltip title="Return to Home Page">
          <IconButton color="inherit" onClick={() => navigate('/home')}>
            <HomeIcon color="inherit"/>
          </IconButton>
        </Tooltip>
      </Tooltips>
    </Bar>
  )
}

const Tooltips = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLinearProgress = styled(LinearProgress)`
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background-color: #B0B0B0;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  min-width: 1600px;
  background-color: #005028;
  color: white;
  border-radius: 0 0 5px 15px;
  border: 5px solid #005028;
`;

const BarSection = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
`;
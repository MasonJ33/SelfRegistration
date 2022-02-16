import { Button, Card, CardContent, CardHeader, CardMedia, CircularProgress, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export const TutorialCard = ({ tutorial, progress, setProgress }) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  const reset = () => {
    localStorage.setItem("pawsTutorialProgress", 0);
    setProgress(localStorage.getItem("pawsTutorialProgress"));
  }

  return (
    <StyledCard>
      <CardHeader
        title={tutorial.name}
      />
      {loaded ? null : (
        <CircularProgress color="inherit" />
      )}
      <CardMedia
        component="img"
        height="194"
        image={tutorial.media}
        alt={tutorial.alt}
        onLoad={() => setLoaded(true)}
      />
      <StyledCardContent>
        <Typography variant="body2">
          {tutorial.description}
        </Typography>
      </StyledCardContent>
      <FooterCardContent>
        Progress:
        <CardGadgets>
          {tutorial.name === "Paws Tutorial" ? (
            <StyledLinearProgress variant="determinate" color="success" value={parseInt(progress)} />
          ) : (
            <StyledLinearProgress variant="determinate" color="success" value={0} />
          )}
          {progress >= 100 ? (
            <StyledButton reset="true" onClick={() => reset()}>
              Reset
            </StyledButton>
          ) : (
            <StyledButton disabled={tutorial.disabled} onClick={() => navigate("./1")}>
              {progress > 0 && progress < 100 ?
                ("Resume") :
                ("Start")}
            </StyledButton>
          )}
      </CardGadgets>
    </FooterCardContent>
    </StyledCard >
  )
}

const FooterCardContent = styled(CardContent)`
  background-color: white;
  color: #005028;
  font-weight: 500
`;

const StyledCardContent = styled(CardContent)`
  border-top: 5px solid #005028;
  background-color: white;
  color: #005028;
`;

const CardGadgets = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 20%;
  background-color: ${props => props.reset ? "#005028" : "white"};
  margin-right: 12px;
  color: ${props => props.reset ? "white" : "#005028"};
  border: ${props => props.reset ? "": "2px solid #005028;"};
  &:hover {
    background-color: ${props => props.reset ? "#32C448" : "#DFDFDF"};
  }
`;

const StyledLinearProgress = styled(LinearProgress)`
  height: 7px;
  width: 70%;
  border-radius: 5px;
  color: white;
  background-color: #B0B0B0;
`;

const StyledCard = styled(Card)`
  min-height: 400px;
  max-height: 400px;
  min-width: 345px;
  background-color: #005028;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 20px;
  `;
import React, { useState } from "react";
import styled from "@emotion/styled";
import { TutorialCard } from "./tutorialCard";
import { Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import { tutorials } from "./tutorials";

export const SelfRegistration = () => {
  const [progress, setProgress] = useState(localStorage.getItem('pawsTutorialProgress'));

  const resetProgress = () => {
    localStorage.setItem('pawsTutorialProgress', 0);
    setProgress(localStorage.getItem('pawsTutorialProgress'));
  }

  return (
    <Page>
      <Breadcrumbs>
        <Crumb color="text.primary">Tutorials</Crumb>
      </Breadcrumbs>
      <Grid container spacing={1.5}>
        {/* {tutorials.map((tutorial) => (
          <TutGrid key={tutorial.name} item xs={4}>
            <TutorialCard key={tutorial.name} tutorial={tutorial} progress={progress}/>
          </TutGrid>
        ))} */}
        <TutGrid key={tutorials[0].name} item xs={4}>
          <TutorialCard key={tutorials[0].name} tutorial={tutorials[0]} progress={progress} setProgress={setProgress}/>
        </TutGrid>
        <TutGrid key={tutorials[1].name} item xs={4}>
          <TutorialCard key={tutorials[1].name} tutorial={tutorials[1]} progress={0}/>
        </TutGrid>
        <TutGrid key={tutorials[2].name} item xs={4}>
          <TutorialCard key={tutorials[2].name} tutorial={tutorials[2]} progress={0}/>
        </TutGrid>
        <TutGrid key={tutorials[3].name} item xs={4}>
          <TutorialCard key={tutorials[3].name} tutorial={tutorials[3]} progress={0}/>
        </TutGrid>
      </Grid>
      <Reset>
        <StyledButton onClick={() => resetProgress()}>
          Reset All Progress
        </StyledButton>
      </Reset>
    </Page>
  )
}

const Reset = styled.div`
  display: flex;
  align-self: center;
  margin-top: 50px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #005028;
  margin-right: 12px;
  color: white;
  &:hover {
    background-color: #32C448;
  }
`;

const Crumb = styled(Typography)`
  font-size: 14px;
  font-weight: 620;
  color: white;
  background-color: #005028;
  border-radius: 15px;
  padding: 5px 12px 5px 12px;
`;

const TutGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 50px 20px 50px;
  height: 100vh;
  background-color: white;
  overflow: auto;
`;
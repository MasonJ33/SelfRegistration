import React, { useState } from "react";
import { MockWindow } from "./mockWindow";
import { MockPawsWindow } from "./mockPawsWindow";
import styled from "@emotion/styled";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { StartScreen } from "./startScreen";
import { ProgressBar } from "./progressBar";

export const PawsTutorial = ({ tutorial }) => {
  const [hint, setHint] = useState(undefined);
  const [progress, setProgress] = useState(localStorage.getItem('pawsTutorialProgress'));

  const renderTutorialPage = () => {
    const val = parseInt(progress);
    switch (true) {
      case (val > 50): return <MockPawsWindow tutorial={tutorial}/>
      case (val === 50): return <MockWindow setProgress={setProgress} tutorial={tutorial} hint={hint}/>
      default: return <StartScreen setProgress={setProgress} tutorial={tutorial}/>
    }
  }

  return (
    <Page>
      <Breadcrumbs>
        <StyledLink underline="hover" href="/tutorials">
          Tutorials
        </StyledLink>
        <Crumb color="text.primary">Paws Tutorial</Crumb>
      </Breadcrumbs>
      <TutorialWindow>
        {renderTutorialPage()}
        <ProgressBar tutorial={tutorial} setHint={setHint} progress={progress}/>
      </TutorialWindow>
    </Page>
  )
}

const TutorialWindow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0 0 15px 15px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 620;
  color: white;
  background-color: #005028;
  border-radius: 15px;
  padding: 5px 12px 5px 12px;
`;

const Crumb = styled(Typography)`
  font-size: 14px;
  font-weight: 620;
  color: white;
  background-color: #005028;
  border-radius: 15px;
  padding: 5px 12px 5px 12px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  padding: 20px 50px 20px 50px;
  height: 100vh;
  background-color: white;
  overflow: auto;
`;

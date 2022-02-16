import React from "react";
import styled from "@emotion/styled";
import pawsLogo from "../assests/paws-logo.png";
import pawsSideBar from "../assests/paws-side-bar.PNG";
import unifyLogin from "../assests/unify-login.PNG";
import unifyBody from "../assests/unify-body.PNG";
import { Button, Grid } from "@mui/material";
import { UnifyOptions } from "./unifyOptions";

export const MockWindow = ({ tutorial, hint, setProgress }) => {
  return (
    <Window>
      <NavBar>
        <Header key="header">
          <img src={pawsLogo} alt="Logo" height={80} width={180} />
          <Slogan>
            <SiteName>
              Unify
            </SiteName>
            bring it all together
          </Slogan>
        </Header>
        <Navs key="navs">
          <Tab key="startHere">Start Here</Tab>
          <Tab key="abtUnify">About Unify</Tab>
          <Tab key="passwordguide">Unify Password Guide</Tab>
          <Tab key="campus">Campus Resources</Tab>
          <Tab key="info">Student Information</Tab>
          <Tab key="gc">Gc Signiture Forms</Tab>
          <Tab key="myPassword">MyPassword</Tab>
          <Tab key="alerts">Unify-Alert</Tab>
        </Navs>
      </NavBar>
      <Page>
        <Grid container spacing={0.5}>
          <Grid item xs={2.5}>
            <img src={unifyLogin} alt="side" height={400} />
          </Grid>
          <Grid item xs={7}>
            <MiddleContainer>
              <UnifyOptions tutorial={tutorial} hint={hint} setProgress={setProgress}/>
              <img src={unifyBody} alt="body" height={600} width={550} />
            </MiddleContainer>
          </Grid>
          <Grid item xs={2.5}>
            <img src={pawsSideBar} alt="side" height={500} width={200} />
          </Grid>
        </Grid>
      </Page>
    </Window>
  )
}

const SiteName = styled.div`
  font-style: normal;
  font-family: Georgia,"Times New Roman",Times,serif;
  font-size: 24px;
`;


const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tab = styled(Button)`
  min-width: 110px;
  border-radius: 10px 10px 0px 0px;
  background-color: #B3C2D1;
  color: black;
  font-size: 10px;
  line-height 1.5:
  font-family: Georgia,"Times New Roman",Times,serif;
  &:hover {
    background-color: white;
  }
`;

const Navs = styled.ul`
  display: flex;
  gap: 6px;
  margin-left: 0;
  margin-bottom: 0;
`;

const Window = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  min-width: 1600px;
  background-color: white;
  overflow: auto;
  border-style: solid;
  border-width: 5px;
  border-color: #005028;
  border-radius: 5px 5px 0 0;
  overflow-y: auto;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-right: 250px;
  padding-left: 170px;
  height: 200px;
  background-color: #003366;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Slogan = styled.div`
  font-style: italic;
  color: white;
  padding-top: 20px;
  margin: 0 0 30px 15px;  
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  padding-top: 10px;
  padding-right: 250px;
  padding-left: 200px;
`;
import React, { useState } from "react";
import styled from "@emotion/styled";
import pawsLogo from "../assests/paws-logo.png";
import { Alert, Button, Snackbar } from "@mui/material";
import { PawsSearch } from "./mockPawsSearch";
import pawsMainMenu from "../assests/paws/paws-main-menu.PNG";

export const MockPawsWindow = ({ tutorial }) => {
  const [open, setOpen] = useState(true);
  const vertical = 'bottom';
  const horizontal= 'center';

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <Window>
      <Header>
        <img src={pawsLogo} alt="Logo" height={90} width={260}/>
      </Header>
      <Nav>
        <Navs>
          <Tab key="personalInfo">Personal Information</Tab>
          <Tab key="mainMenu">Main Menu</Tab>
          <Tab key="studentAcc">Student Account</Tab>
          <Tab key="menuNew">Menu for New and Returning Students</Tab>
          <Tab key="studentServices">Student Services</Tab>
          <Tab key="financialAid">Financial Aid</Tab>
        </Navs>
      </Nav>
      <SearchContainer>
        <PawsSearch />
      </SearchContainer>
      <Page>
        <img src={pawsMainMenu} alt="main menu" height={300} width={1400} />
      </Page>
      <Snackbar open={open} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          Success, you've completed this tutorial, return to Self Registration page by click the Tutorials pill in the top left of the page.
        </Alert>
      </Snackbar>
    </Window>
  );
};

const SearchContainer = styled.div`
  height: 7%;
  width: 100%;
  padding-top: 6px;
  background-color: #C7C397;
`;

const Tab = styled(Button)`
  border-radius: 10px 10px 0px 0px;
  background-color: #9D9754;
  color: #001580;
  font-size: 8px;
  line-height 1.5:
  font-family: Georgia,"Times New Roman",Times,serif;
  &:hover {
    color: white;
    background-color: #001580;
  }
`;

const Navs = styled.ul`
  display: flex;
  gap: 6px;
  width: 50%;
  margin-left: 0;
  margin-bottom: 0;
`;

const Nav = styled.div`
  display: flex;
  align-items: flex-end;
  height: 7%;
  width: 100%;
  background-color: #C7C397;
  border-bottom: 6px solid #001580;
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

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 12px;
  padding-left: 40px;
  height: 120px;
  width: 100%;
  background-color: #001580;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  padding-top: 10px;
  padidng-left: 0;
`;
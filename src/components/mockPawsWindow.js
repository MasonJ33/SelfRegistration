import React from "react";
import styled from "@emotion/styled";
import pawsLogo from "../assests/paws-logo.png";
import { Button } from "@mui/material";
import { PawsSearch } from "./mockPawsSearch";
import pawsMainMenu from "../assests/paws/paws-main-menu.PNG";

export const MockPawsWindow = () => {
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
  height: 85%;
  min-width: 800px;
  background-color: white;
  overflow: auto;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 12px;
  padding-left: 40px;
  height: 18%;
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
import React, { useState } from "react";
import styled from "@emotion/styled";
import pawsLogo from "../assests/paws-logo.png";
import { Button, Link, Stack } from "@mui/material";
import { PawsSearch } from "./mockPawsSearch";
import pawsMainMenu from "../assests/paws/paws-main-menu.PNG";

export const MockPawsWindow = ({ tutorial, setProgress }) => {
  const [showLinks, setLinks] = useState('home');

  const progressClick = () => {
    localStorage.setItem('pawsTutorialProgress', 48);
    setProgress(localStorage.getItem('pawsTutorialProgress'));
  }

  const RenderLinks = () => {
    switch (true) {
      case showLinks === 'studentServices': return (
        <Page>
          <StudentTitle>Student Service</StudentTitle>
          <LinksStack spacing={0.5}>
            <StyledLink key="admissions" underline="none" href="#" >Admissions</StyledLink>
            <StyledLink key="registration" underline="none" href="#" onClick={() => setLinks('registration')}>Registration</StyledLink>
            <StyledLink key="studentRecords" underline="none" href="#">Student Records</StyledLink>
            <StyledLink key="gradeDistribution" underline="none" href="#">Grade Distribution</StyledLink>
            <StyledLink key="studentInformation" underline="none" href="#">View Student Information</StyledLink>
            <StyledLink key="onlineWithdraw" underline="none" href="#">Online Withdraw Form</StyledLink>
          </LinksStack>
          <Border></Border>
          <Footer>
            <p>RELEASE: 8.9.1</p>
            <p>© 2022 Ellucian Company L.P. and its affiliates.</p>
          </Footer>
        </Page>
      )
      case showLinks === 'registration': return (
        <Page>
          <StudentTitle>Registration</StudentTitle>
          <LinksStack spacing={0.5}>
            <StyledLink key="selectTerm" underline="none" href="#" >Select Term</StyledLink>
            <StyledLink key="registerPaws" underline="none" href="#">Register Using Paws</StyledLink>
            <StyledLink key="registerCollegeScheduler" underline="none" href="#" onClick={() => progressClick()}>Register Using College Scheduler</StyledLink>
            <StyledLink key="courseMaterials" underline="none" href="#">View Course Materials / Textbooks</StyledLink>
            <StyledLink key="printableSchedule" underline="none" href="#">GCSU Printable Schedule</StyledLink>
            <StyledLink key="feeAssessment" underline="none" href="#">Registration Fee Assessment</StyledLink>
            <StyledLink key="termBalance" underline="none" href="#" >GCSU Term Balance</StyledLink>
            <StyledLink key="registrationStatus" underline="none" href="#">Registration Status</StyledLink>
            <StyledLink key="weekGlance" underline="none" href="#" >Week at a Glance</StyledLink>
            <StyledLink key="detailSchedule" underline="none" href="#" >Student Detail Schedule</StyledLink>          
          </LinksStack>
          <Border></Border>
          <Footer>
            <p>RELEASE: 8.9.1</p>
            <p>© 2022 Ellucian Company L.P. and its affiliates.</p>
          </Footer>
        </Page>
      )
      default: return (
        <Page>
          <img src={pawsMainMenu} alt="main menu" height={300} width={1400} />
        </Page>
      )
    }
  }

  return (
    <Window>
      <Header>
        <img src={pawsLogo} alt="Logo" height={90} width={260} />
      </Header>
      <Nav>
        <Navs>
          <Tab key="personalInfo">Personal Information</Tab>
          <Tab key="mainMenu">Main Menu</Tab>
          <Tab key="studentAcc">Student Account</Tab>
          <Tab key="menuNew">Menu for New and Returning Students</Tab>
          <Tab key="studentServices" onClick={() => setLinks('studentServices')}>Student Services</Tab>
          <Tab key="financialAid">Financial Aid</Tab>
        </Navs>
      </Nav>
      <SearchContainer>
        <PawsSearch />
      </SearchContainer>
      <RenderLinks />
    </Window >
  );
};

const StyledLink = styled(Link)`
  color: #003366;
  font-family: Arial,Verdana, helvetica, sans-serif;
  font-weight: normal;
  font-size: 85%;
  font-style: normal;
  text-align: left;
`;

const Footer = styled.div`
  color: black;
  font-weight: 550;
`;

const Border = styled.div`
  width: 100%;
  height: 3px;
  background-color: #001580;
`;

const LinksStack = styled(Stack)`
  padding-left: 20px;
`;

const StudentTitle = styled.h4`
  color: #003366;
  font-family: Georgia, Arial, Helvetica, Sans-Serif;
  font-weight: normal;
  font-style: normal;
`;

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
  flex-direction: column;
  justify-content: flex-start;
  height: 70%;
  padding-top: 10px;
  padding-left: 10px;
  color: #001580;
`;
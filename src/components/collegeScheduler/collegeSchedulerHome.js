import styled from "@emotion/styled";
import { Divider, Button, List, ListItem, ListSubheader, Radio, Typography, Checkbox } from "@mui/material";
import pawsLogo from "../../assests/collegeScheduler/gcsuLogo.png";
import CheckIcon from '@mui/icons-material/Check';
import { Nav } from "./colledgeSchedulerNav";
import { useState } from "react";

export const Home = ({ tutorial, setProgress }) => {

  const [listType, setListType] = useState(0);

  const progressClick = () => {
    localStorage.setItem('pawsTutorialProgress', 100);
    setProgress(localStorage.getItem('pawsTutorialProgress'));
  }

  return (
    <Window>
      <Nav />
      <Page>
        <div>
          <img src={pawsLogo} alt="GCSU" height={100} width={300} />
        </div>
        {listType === 0 ? (
          <>
            <StyledTypography>Select Term</StyledTypography>
            <List>
              <ListSubheader>Term</ListSubheader>
              <Divider />
              <ListItem>
                <Radio />
                Summer 2022
              </ListItem>
              <Divider />
              <ListItem>
                <Radio />
                Fall 2022
              </ListItem>
            </List>
            <StyledButton onClick={() => setListType(1)}><CheckIcon />Save and Continue</StyledButton>
          </>
        ) : (listType === 1 ? (
          <>
            <StyledTypography>Select Course Status</StyledTypography>
            <List>
              <ListSubheader>Course Status</ListSubheader>
              <Divider />
              <ListItem>
                <Radio />
                Open Classes Only
              </ListItem>
              <Divider />
              <ListItem>
                <Radio />
                Open &#38; Full w/Waitlist Open
              </ListItem>
              <Divider />
              <ListItem>
                <Radio />
                Open &#38; Full
              </ListItem>
            </List>
            <StyledButton onClick={() => setListType(2)}><CheckIcon />Save and Continue</StyledButton>
          </>
        ) : (listType === 2 ? (
          <>
            <StyledTypography>Select Campus</StyledTypography>
            <List>
              <ListItem>
                <Checkbox />
                Select All Campuses
              </ListItem>
              <Divider />
              <ListItem>
                <Checkbox />
                Main Campus
              </ListItem>
              <Divider />
              <ListItem>
                <Checkbox />
                Unreported Facility
              </ListItem>
            </List>
            <StyledButton onClick={() => setListType(3)}><CheckIcon />Save and Continue</StyledButton>
          </>
        ) : (
          <>
            <StyledTypography>Select Instruction Mode</StyledTypography>
            <List>
              <ListItem>
                <Checkbox />
                Select All Instruction Modes
              </ListItem>
              <Divider />
              <ListItem>
                <Checkbox />
                Entirely at a Distance
              </ListItem>
              <Divider />
              <ListItem>
                <Checkbox />
                Fully at a Distance
              </ListItem>
            </List>
            <StyledButton onClick={() => progressClick()}><CheckIcon />Save and Continue</StyledButton>
          </>
        )
        ))}
      </Page>
    </Window>
  )
}

const StyledButton = styled(Button)`
  background-color: #004C98;
  color: white;
`;

const StyledTypography = styled(Typography)`
  font-family: Roboto,sans-serif;
  font-weight: 300;
  font-size: 30px;
  margin-top: 15px;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 10px;
  padding-left: 10px;
  color: black;
  Background-color: #FFFFFF;
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
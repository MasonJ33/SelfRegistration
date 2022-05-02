import styled from "@emotion/styled";
import { Nav } from "./colledgeSchedulerNav";
import pawsLogo from "../../assests/collegeScheduler/gcsuLogo.png"
import { Grid } from "@mui/material";

export const Picker = () => {
  return (
    <Window>
      <Nav />
      <Page>
        <div>
          <img src={pawsLogo} alt="GCSU" height={100} width={300} />
        </div>
        <OptionsContainer>
          <Grid container spacing={2.0}>
            <BoldGrid item xs={4}>
              Course Status
            </BoldGrid>
            <Grid item xs={4}>
              Open &#38; Full
            </Grid>
            <Grid item xs={4}>
              <ChangeButton>Change</ChangeButton>
            </Grid>
            <BoldGrid item xs={4}>
              Campuses
            </BoldGrid>
            <Grid item xs={4}>
              All Campuses Selected
            </Grid>
            <Grid item xs={4}>
              <ChangeButton>Change</ChangeButton>
            </Grid>
            <BoldGrid item xs={4}>
              Term
            </BoldGrid>
            <Grid item xs={4}>
              Summer 2022
            </Grid>
            <Grid item xs={4}>
              <ChangeButton>Change</ChangeButton>
            </Grid>
          </Grid>
          <Grid container spacing={2.0}>
            <BoldGrid item xs={4}>
              Parts of Term
            </BoldGrid>
            <Grid item xs={4}>
              All Parts of Term Selected
            </Grid>
            <Grid item xs={4}>
              <ChangeButton>Change</ChangeButton>
            </Grid>
            <BoldGrid item xs={4}>
              Instruction Modes
            </BoldGrid>
            <Grid item xs={4}>
              All Instruction Modes Selected
            </Grid>
            <Grid item xs={4}>
              <ChangeButton>Change</ChangeButton>
            </Grid>
          </Grid>
        </OptionsContainer>
        <div>
          <Grid container spacing={2.0}>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}>
              
            </Grid>
          </Grid>
        </div>
      </Page>
    </Window>
  );
}

const BoldGrid = styled(Grid)`
  font-weight: 500;
  font-size: 14px;
`;

const ChangeButton = styled.button`
  background-color: white;
  color: black;
  border-radius: 4px;
  border: 
  font-size: 12px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  &:hover {
    background-color: #DFDFDF;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  width: 50%;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid black;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 10px;
  padding-left: 10px;
  color: black;
  background-color: #FFFFFF;
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
import React, { useState } from "react";
import { Grid, Snackbar, Alert } from "@mui/material";
import alumniResources from "../assests/unifyButtons/alumni-resources.PNG";
import cisco from "../assests/unifyButtons/cisco.PNG";
import gaView from "../assests/unifyButtons/ga-view.PNG";
import initalStudent from "../assests/unifyButtons/initial-student-access.PNG";
import microsoft from "../assests/unifyButtons/microsoftEmail.PNG";
import oneusg from "../assests/unifyButtons/oneusg-connect.PNG";
import paws from "../assests/unifyButtons/paws.PNG";
import serveTicket from "../assests/unifyButtons/serve-ticket.PNG";
import studentAccout from "../assests/unifyButtons/student-account-suite.PNG";
import thunder from "../assests/unifyButtons/thunder-cloud.PNG";
import styled from "@emotion/styled";

export const UnifyOptions = ({ setProgress, hint }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const progressClick = () => {
    localStorage.setItem('pawsTutorialProgress', 32);
    setProgress(localStorage.getItem('pawsTutorialProgress'));
  }

  const vertical = 'bottom';
  const horizontal = 'center';

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={microsoft} alt="Microsoft Email" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={studentAccout} alt="Student Account Suite" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={gaView} alt="Ga View" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={() => progressClick()}>
          {hint ? (
            <StyledImg src={paws} alt="Paws" height={70} width={120} />
          ) : (
            <img src={paws} alt="Paws" height={70} width={120} />
          )}
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={thunder} alt="Thunder Cloud" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={alumniResources} alt="Alumni Resources" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={initalStudent} alt="Inital Student Access" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={serveTicket} alt="Submit Serve Ticket" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={oneusg} alt="OneUSG Connect" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={cisco} alt="Cisco Webex" height={70} width={120} />
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
        <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
          Ooops! Please click the Paws image square.
        </Alert>
      </Snackbar>
    </div>
  )
}

const StyledImg = styled.img`
  border: 3px solid #26bf47;
  box-shadow: 0 0 10px #26bf47;
  border-radius: 5px;
`;
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material";
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

export const UnifyOptions = ({ setPaws }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={microsoft} alt="Microsoft Email" height={70} width={120}/>
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={studentAccout} alt="Student Account Suite" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={handleClickOpen}>
          <img src={gaView} alt="Ga View" height={70} width={120} />
        </Grid>
        <Grid item xs={2.4} onClick={() => setPaws(true)}>
          <img src={paws} alt="Paws" height={70} width={120} />
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
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Oops! 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please select the paws image sqaure located
            below the student information tab.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
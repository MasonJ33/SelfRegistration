import { AppBar, Button, Box } from "@mui/material"
import ScheduleIcon from '@mui/icons-material/Schedule';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventNoteIcon from '@mui/icons-material/EventNote';
import styled from "@emotion/styled";

export const Nav = () => {

  return (
    <StyledAppBar position="static">
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <StyledButton>
            <ScheduleIcon />
            Build Schedule
          </StyledButton>
          <StyledButton>
            <ShoppingCartIcon />
            Shopping Cart (0)
          </StyledButton>
          <StyledButton>
            <EventNoteIcon />
            Current Schedule (0)
          </StyledButton>
      </Box>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(AppBar)`
  height: 50px;
  background-color: #004C98;
  color: white;
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  font-weight: 600;
  color: white;
`;
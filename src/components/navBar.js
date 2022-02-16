import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import logo from '../assests/paws-logo.png';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  {label: "Home", value: "home"},
  {label: "Tutorials", value: "tutorials"},
  {label: "Videos", value: "videos"},
  {label: "About", value:"about"}
];

export const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    let navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
      if (page) {
        navigate(`./${page}`)
      }
        setAnchorElNav(null);
    };

    return (
        <StyledAppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={logo} alt="Logo" height={60} width={190}/>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                           <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.value} onClick={() => handleCloseNavMenu(page.value)}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={logo} alt="Logo" height={60} width={190}/>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <StyledButton
                                key={page.value}
                                onClick={() => navigate(`./${page.value}`)}
                                sx={{ my: 2, color: 'white', display: 'block', padding: '0.5em' }}
                            >
                                {page.label}
                            </StyledButton>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar>
    );
};

const StyledAppBar = styled(AppBar)`
  background-color: #005028;
  color: white;
  display: flex;
`;

const StyledButton = styled(Button)`
  font-weight: 600;
  color: white;
`;
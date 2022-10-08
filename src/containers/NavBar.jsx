import React from "react";
import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Link,
    Box,
    Button,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

import mainLogo from "assets/logo.png";

const pages = [
    { name: "Types", path: "/types-list" },
    { name: "Favoris", path: "/favorites" },
    { name: "Contact", path: "/contact" }
];

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* logo visible on larger screens */}
                    <Link
                        href=""
                        sx={{
                            display: { xs: "none", md: "flex" },
                            mr: 1,
                            height: "30px"
                        }}
                    >
                        <img src={mainLogo} alt="Logo Pokédex" />
                    </Link>

                    {/* Hamburger menu */}
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" }
                        }}
                    >
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
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    component={RouterLink}
                                    to={page.path}
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Logo visible on smaller screens */}
                    <Link
                        href=""
                        sx={{
                            display: { xs: "flex", md: "none" },
                            mr: 1,
                            height: "30px",
                            margin: "auto"
                        }}
                    >
                        <img src={mainLogo} alt="Logo Pokédex" />
                    </Link>

                    {/* Links */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" }
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                component={RouterLink}
                                to={page.path}
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

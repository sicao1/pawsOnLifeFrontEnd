// ALL DA ROUTES
import * as React from "react";
import { useState, useEffect } from "react"; /* need to use useEffect or git rid of */
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
// https://mui.com/material-ui/api/link/
import Typography from "@mui/material/Typography";

// ================ //
// ARRAYS OF PAGES WE WANT TO USE
// ================ //
const pages = [
    {
        title: "Home",
        destination: "/",
    },
    // {
    //     title: "Maps & Trails",
    //     destination: "/trails",
    // },
    {
        title: "About",
        destination: "/about",
    },
    {
        title: "Log In",
        destination: "/login",
    },
    {
        title: "Registration",
        destination: "/register",
    }
];

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
`

// https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
// passing down ColorTheme (Dark Mode) as a prop
const Nav = ({loggedIn}) => {
    // TODO: Destructure out regular props and style props from args for possible different handling

    /* declare state for open/close Nav menu */
    const [anchorElemNav, setAnchorElemNav] = useState(null);
    // const { isLoggedIn } = props;
    /* functions to handle state for open/close the two menus*/
    const handleOpenMenuNav = (event) => {
        setAnchorElemNav(event.currentTarget);
    };
    const handleCloseMenuNav = () => {
        setAnchorElemNav(null);
    };
    const setPages = React.useCallback(() => {
            if (loggedIn) {
                console.log("Nav should show logged in sections - logged in is", loggedIn)
                pages[2] = {
                        title: "Account",
                        destination: "/profile",
                    };
                pages[3] = {
                        title: "Log Out",
                        destination: "/logout",
                    };
            } else {
                console.log("Nav should show logged out sections - logged in is", loggedIn)
            }
    },[ loggedIn])
    useEffect(() => {
        setPages();
    },
    [loggedIn, setPages]
    )
    setPages();
    return (
       <FlexContainer>
            <AppBar position="sticky" sx={{ borderRadius: 5 }}>
                <Toolbar  >
                    {/* in MUI, sx props are inline styles. "m" is margin */}
                    {/* https://mui.com/system/getting-started/the-sx-prop/ */}
                    {/* everything in Box container will display unless mobile, then hamburger menu */}
                    <Box sx={{ flexGrow: 1, display: { s: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="site navigation"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenMenuNav}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElemNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElemNav)}
                            onClose={handleCloseMenuNav}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseMenuNav}>
                                    <Link variant="h5" noWrap component="a" to={page.destination} href={page.destination}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <Link
                        variant="h5"
                        noWrap
                        component="a"
                        to="/"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: "flex" },
                            fontWeight: 700,
                            textDecoration: "none",
                        }}
                    >
                        PAWS ON LIFE
                    </Link> */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
                        {pages.map((page) => (
                            <Link noWrap component="a" to={page.destination} href={page.destination}
                                key={page.title}
                                onClick={handleCloseMenuNav}
                                underline="hover"
                                sx={{ my: 2, color: "white", padding: 1 }}
                            >
                                {page.title}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </FlexContainer>
    );
};

export default Nav;
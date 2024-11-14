import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const pages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Service", link: "/service" },
  { id: 4, name: "Contact", link: "/contact" },
  // { id: 5, name: "login", link: "/login" },
];

const ColorButton = styled(Button)(() => ({
  backgroundColor: "White",
  border: "none",
  "&:hover": {
    backgroundColor: "#FF7E78",
    color: "white",
  },
}));
function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        color: "white",
        // backgroundColor: "transparent",
        background: "linear-gradient(to right,#FA2947 0%,#ED6C71 51%,#FA2947 100%)",
        boxShadow: "none",
      }}>
      <Box>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              E-COM
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", color: "white" },
                }}>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center"}}>
                      <Link
                        to={page.link}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}>
                        {page.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link to={"/"}><AdbIcon sx={{ display: { xs: "flex", md: "none", color:"#fff" }, mr: 1 }} /></Link>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              {/* E-COM */}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Typography
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    marginLeft: "40px",
                    fontWeight: "600",
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                  component={Link}
                  to={page.link}>
                  {page.name}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                columnGap: 2,
              }}>
              <Link to={"/cart"}>
                <ColorButton
                  variant="contained"
                  className="btn2"
                  sx={{
                    backgroundColor: "white",
                    color: "red",
                    textDecoration: "none",
                    marginRight:"20px"
                  }}>
                  Cart
                </ColorButton>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                columnGap: 2,
              }}>
              <Link to={"/login"}>
                <ColorButton
                  variant="contained"
                  className="btn2"
                  sx={{
                    backgroundColor: "white",
                    color: "red",
                    textDecoration: "none",
                  }}>
                  Login
                </ColorButton>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}
export default Header;

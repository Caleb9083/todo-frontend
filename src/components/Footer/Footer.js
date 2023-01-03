import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import FactCheckIcon from "@mui/icons-material/FactCheck";

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Caleb
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const footerInfo = {
    title: "ToDo",
    description:
      "Onestop task management app to manage your day to day activities",
  };

  return (
    <Box
      component="footer"
      sx={{ color: "#fff", backgroundColor: "#1769aa", py: 6 }}
    >
      <Container maxWidth="lg">
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: "1rem",
          }}
        >
          <FactCheckIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {footerInfo.title}
          </Typography>
        </Container>
        <Typography
          variant="subtitle1"
          align="center"
          color="inherit"
          component="p"
          sx={{ mb: "0.5rem" }}
        >
          {footerInfo.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            mb: "1rem",
          }}
        >
          <Link sx={{ color: "#fff" }} href="/">
            Home
          </Link>{" "}
          {" | "}
          <Link sx={{ color: "#fff" }} href="/features">
            Features
          </Link>{" "}
          {" | "}
          <Link sx={{ color: "#fff" }} href="/about">
            About
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: " 1rem",
            mb: "1rem",
          }}
        >
          <Link href="#" sx={{ color: "#fff" }}>
            <LinkedInIcon />
          </Link>
          <Link href="#" sx={{ color: "#fff" }}>
            <GitHubIcon />
          </Link>
          <Link href="#" sx={{ color: "#fff" }}>
            <FacebookIcon />
          </Link>
          <Link href="#" sx={{ color: "#fff" }}>
            <TwitterIcon />
          </Link>
        </Box>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;

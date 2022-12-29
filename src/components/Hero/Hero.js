import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Hero = () => {
  const heroInfo = {
    title: "Manage your tasks easily with ToDo",
    image: "",
    imageText: "",
    description:
      "As the name said ToDo,we will give you the easiest way to manage your day to day activities",
    linkText: "",
  };

  return (
    <div className="Hero">
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "#f8fafa",
          color: "#333",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${heroInfo.image})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={heroInfo.image}
            alt={heroInfo.imageText}
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {heroInfo.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {heroInfo.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {heroInfo.linkText}
              </Link>
              <Box>
                <Button variant="contained">Get Started</Button>
                <Button variant="text">
                  Learn more{" "}
                  <ArrowRightAltIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />{" "}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Hero;

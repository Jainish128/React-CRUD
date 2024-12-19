import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
// import img from '../../public/assets/Banner Img.svg';

const Banner = () => {
  const outlinedText = (text = "", mr = false) => (
    <span
      style={{
        border: "1px solid var(--text-color-main)",
        borderRadius: "10px",
        color: "var(--text-color-main)",
        fontWeight: "bold",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginLeft: "4px",
        marginRight: mr ? "4px" : "0",
      }}
    >
      {text}
    </span>
  );

  const mainColoredText = (text = "") => (
    <span style={{ color: "var(--text-color-main)" }}>{text}</span>
  );

  return (
    <>
      <Grid container sx={{ py: 10 }}>
        <Grid item xs={12} md={7}>
          <Typography variant="h4"> Hello, It's Me </Typography>
          <Typography
            className="myName"
            sx={{ fontSize: "4rem", fontWeight: "bold" }}
          >
            Jainish Patel
          </Typography>
          <Typography variant="h4" display="flex">
            And I'm a &nbsp;
            <Typography variant="h4" color="var(--text-color-main)">
              Frontend Developer
            </Typography>
          </Typography>
          <Typography pt={5}>
            My Passion is to build {outlinedText("Beautiful")},
            {outlinedText("Responsive")}, {outlinedText("Dynamic", true)}
            and {outlinedText("User-Friendly")} websites which are well
            optimized and have a good performance. Creating websites and web
            applications is not just a job for me, it's a
            {mainColoredText(" part of my life")}. I am always looking for
            {mainColoredText(" new opportunities to learn and grow")}. I love to
            see the code I Wrote come to life and do everything for you that it
            was created to do. That's all about me. If you want to know more
            about me, please feel free to
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "var(--text-color-main)",
                borderColor: "var(--text-color-main)",
                // borderRadius: "25px",
                ml: 0.5,
                // transform: 'scale(0.9)'
              }}
            >
              Contact Me
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;

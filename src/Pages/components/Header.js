import { Button, FormControl, FormControlLabel, Grid, IconButton, Switch, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = (props) => {
  const { currentPage, setCurrentPage } = props;

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  console.log('theme : ', theme);

  return (
    <Grid container px={15} py={3} className="container">
      <Grid item md={6}>
        {/* <Typography variant="h4" color="success.light"> */}
        <Typography variant="h4" className="mainColor">
          Jainish Patel
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        sx={{ display: "flex", columnGap: 4, justifyContent: "flex-end" }}
      >
        <Button color="inherit" onClick={() => setCurrentPage(1)}>
          <Typography variant="h6" color={currentPage === 1 ? 'primary.light' : 'primary'}> Home </Typography>
        </Button>
        <Button color="inherit" onClick={() => setCurrentPage(2)}>
          <Typography variant="h6" color={currentPage === 2 ? 'primary.light' : 'primary'}> Skills </Typography>
        </Button>
        <Button color="inherit" onClick={() => setCurrentPage(3)}>
          <Typography variant="h6" color={currentPage === 3 ? 'primary.light' : 'primary'}> Projects </Typography>
        </Button>
        <Button color="inherit" onClick={() => setCurrentPage(4)}>
          <Typography variant="h6" color={currentPage === 4 ? 'primary.light' : 'primary'}> About </Typography>
        </Button>
        <Button color="inherit" onClick={() => setCurrentPage(5)}>
          <Typography variant="h6" color={currentPage === 5 ? 'primary.light' : 'primary'}> Contact </Typography>
        </Button>
        {/* <FormControl>
          <FormControlLabel control={<Switch onClick={toggleTheme} />} label="Theme" labelPlacement="end" />
        </FormControl> */}
        <IconButton onClick={toggleTheme} color="inherit">
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;

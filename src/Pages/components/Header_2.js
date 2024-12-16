import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header_2 = (props) => {
  const { currentPage, setCurrentPage } = props;

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  console.log("theme : ", theme);

  return (
    <Grid
      container
      sx={{
        py: 2,
        px: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="container"
    >
      <Typography variant="h4" className="mainColor">
        Jainish Patel
      </Typography>
      <IconButton onClick={toggleTheme} color="primary">
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Grid>
  );
};

export default Header_2;

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
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Header = (props) => {
  const {
    currentPage,
    setCurrentPage,
    isDrawerOpen,
    handleToggleDrawer,
    handleToggleSmDrawer,
    matchDownSM,
  } = props;

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Grid container py={2} className="header">
      <Grid item xs={matchDownSM ? 2 : 1} pl={1}>
        {!matchDownSM ? (
          <IconButton onClick={handleToggleDrawer}>
            <MenuOpenRoundedIcon
              fontSize="large"
              sx={{
                color: "var(--text-color)",
                transform: !isDrawerOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
              }}
            />
          </IconButton>
        ) : (
          <IconButton onClick={handleToggleSmDrawer}>
            <MenuRoundedIcon
              sx={{
                color: "var(--text-color)",
                transition: "all 0.3s ease",
              }}
            />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={matchDownSM ? 8 : 10} sx={{ display: "flex", alignItems: "center", pl: 3 }}>
        <Typography variant={matchDownSM ? 'h5' : 'h4'} className="mainColor">
          Jainish Patel
        </Typography>
      </Grid>
      <Grid item xs={matchDownSM ? 2 : 1} sx={{ display: "flex", justifyContent: "start" }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;

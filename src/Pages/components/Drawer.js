import React, { useEffect, useState } from "react";
import { Box, ListItemButton, Typography } from "@mui/material";

// Icons as per pages
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import { useTheme } from "../../ThemeContext";

const Drawer = (props) => {
  const { currentPage, setCurrentPage, isDrawerOpen, pages, setPages } = props;

  const { theme } = useTheme();
  const borderColor = theme === 'light' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <Box
      sx={{
        height: "100vh",
        borderRight: `1px solid ${borderColor}`,
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          borderBottom: `1px solid ${borderColor}`,
          height: "84px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            border: `1px solid ${theme === 'light' ? 'white' : 'black'}`,
            borderRadius: "50%",
            px: 1,
            py: 0.25,
          }}
        >
          JP
        </Typography>
      </Box>
      {/* Drawer Content */}
      <Box p={2}>
        {pages?.map((page, index) => {
          return (
            <ListItemButton
              onClick={() => setCurrentPage(index + 1)}
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: page?.isCurrentPage && "rgba(0, 80, 179, 0.2)",
                borderRadius: "5px",
                mb: 1,
                "&:hover": { bgcolor: "rgba(0, 80, 179, 0.2)" },
              }}
            >
              {page?.icon}
              {isDrawerOpen && (
                <Typography pl={3} fontSize="large">
                  {page?.pageName}
                </Typography>
              )}
            </ListItemButton>
          );
        })}
      </Box>
    </Box>
  );
};

export default Drawer;

import React from "react";
import { Box, ListItemButton, Typography } from "@mui/material";

const Drawer = (props) => {
  const { currentPage, setCurrentPage, isDrawerOpen, pages } = props;

  return (
    <Box
      sx={{
        height: "100vh",
        borderRight: "1px solid var(--border-color)",
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          height: "84px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="header"
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            border: "1px solid var(--text-color)",
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

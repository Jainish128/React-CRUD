import React from "react";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const DrawerForSM = (props) => {
  const { open, handleToggleSmDrawer, pages, setCurrentPage } = props;
  const handlePageChange = (index) => {
    setCurrentPage(index + 1);
    handleToggleSmDrawer();
  }
  return (
    <Drawer
      open={open}
      anchor="top"
      onClose={handleToggleSmDrawer}
      sx={{ "& .MuiDrawer-paper": { minHeight: 300 } }}
    >
      <List>
        {pages?.map((page, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handlePageChange(index)}>
                <ListItemText
                  primary={page?.pageName}
                  sx={{ textAlign: "center", color: page?.isCurrentPage ? '#1890ff' : '#1f1f1f' }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton onClick={handleToggleSmDrawer}>
          <CloseRoundedIcon color="error" />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default DrawerForSM;

import { Box } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return <Box sx={{ px: 10, py: 5 }}>{children}</Box>;
};

export default Layout;

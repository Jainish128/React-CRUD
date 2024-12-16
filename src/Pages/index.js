import React, { useEffect, useState } from "react";
import { Alert, AlertTitle, Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import ContactUs from "./ContactUs";
import Header from "./components/Header";
import Header_2 from "./components/Header_2";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const displayPage = (currentPage) => {
    switch (currentPage) {
      case 1:
        return <Banner />;
      case 2:
        return <Skills />;
      case 3:
        return <Projects />;
      case 4:
        return <About />;
      case 5:
        return <ContactUs />;
      default:
        return "No Page Available.";
    }
  };

  const currPage = displayPage(currentPage);
  console.log('currentPage -> ', currentPage);

  return (
    <>
    <Box>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* <Header_2 currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      {currPage}
    </Box>
    </>
  );
};

export default HomePage;

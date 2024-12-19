import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import ContactUs from "./ContactUs";
import Header from "./components/Header";
import Header_2 from "./components/Header_2";
import Drawer from "./components/Drawer";
import DrawerForSM from "./components/DrawerForSM";

// Icons as per pages
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import Layout from "./Layout";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isSmDrawerOpen, setIsSmDrawerOpen] = useState(false);

  const [pages, setPages] = useState([
    {
      pageNo: 1,
      pageName: "Banner",
      icon: <PermIdentityOutlinedIcon />,
      isCurrentPage: true,
    },
    {
      pageNo: 2,
      pageName: "Skills",
      icon: <CodeRoundedIcon />,
      isCurrentPage: false,
    },
    {
      pageNo: 3,
      pageName: "Projects",
      icon: <AccountTreeRoundedIcon />,
      isCurrentPage: false,
    },
    {
      pageNo: 4,
      pageName: "About",
      icon: <InfoRoundedIcon />,
      isCurrentPage: false,
    },
    {
      pageNo: 5,
      pageName: "Contact",
      icon: <ContactMailRoundedIcon />,
      isCurrentPage: false,
    },
  ]);

  const matchDownSM = useMediaQuery("(max-width:768px");

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleToggleSmDrawer = () => {
    setIsSmDrawerOpen(!isSmDrawerOpen);
  };

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

  useEffect(() => {
    setPages(
      pages?.filter((page) => {
        if (page?.pageNo === currentPage) {
          page.isCurrentPage = true;
        } else {
          page.isCurrentPage = false;
        }
        return page;
      })
    );
  }, [currentPage]);

  const currPage = displayPage(currentPage);

  return (
    <>
      <Box sx={{ display: !matchDownSM ? "flex" : "block" }}>
        {/* <Box sx={{ width: isDrawerOpen ? "15%" : "5%", transition: 'all 0.3s ease' }}> */}
        {matchDownSM ? (
          <DrawerForSM
            open={isSmDrawerOpen}
            handleToggleSmDrawer={handleToggleSmDrawer}
            pages={pages}
            setPages={setPages}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <Box
            sx={{
              width: isDrawerOpen ? 300 : "90px",
              transition: "all 0.3s ease",
            }}
          >
            <Drawer
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isDrawerOpen={isDrawerOpen}
              pages={pages}
              setPages={setPages}
            />
          </Box>
        )}
        {/* <Box sx={{ width: isDrawerOpen ? "240px" : "90px", transition: 'all 0.3s ease' }}>
           <Drawer currentPage={currentPage} setCurrentPage={setCurrentPage} isDrawerOpen={isDrawerOpen} />
        </Box> */}
        {/* <Box sx={{ width: isDrawerOpen ? "85%" : "95%", transition: 'all 0.3s ease' }}> */}
        <Box sx={{ width: "100%", transition: "all 0.3s ease" }}>
          <Header
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isDrawerOpen={isDrawerOpen}
            handleToggleDrawer={handleToggleDrawer}
            handleToggleSmDrawer={handleToggleSmDrawer}
            matchDownSM={matchDownSM}
          />
          {/* <Header_2 currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
          {/* <Box py={3} px={5}>
            {currPage}
          </Box> */}
          <Layout>
            {currPage}
          </Layout>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;

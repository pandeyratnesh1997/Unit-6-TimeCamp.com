import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Style/Sidebar.module.css";
import { FiClock, FiUsers, FiTarget } from "react-icons/fi";
import {
  AiOutlineDashboard,
  AiOutlineCheckSquare,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import {
  FaChartPie,
  FaSearchPlus,
  FaRegPlusSquare,
  FaDollarSign,
  FaListUl,
  FaRegMoneyBillAlt,
  FaTableTennis,
} from "react-icons/fa";
import { GrPersonalComputer, GrCursor, GrPieChart } from "react-icons/gr";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsTags, BsBarChartLine, BsCalendar2Check } from "react-icons/bs";
import { BiCategory, BiCalendar, BiRocket } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: secIsOpen,
    onOpen: secOnOpen,
    onClose: secOnClose,
  } = useDisclosure();

  const handleButton = () => {
    setOpen(!open);
  };

  return (
    <Box
      {...(open ? { w: "100%" } : { w: "40%" })}
      height="100vh"
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      transition={".1s"}
      zIndex="1500"
      padding={0}
    >
      <Button
        zIndex="1500"
        borderRadius={"50%"}
        fontSize="14px"
        className={styles.sidebar_btn}
        bg="white"
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        onClick={handleButton}
      >
        {open ? <AiOutlineLeft /> : <AiOutlineRight />}
      </Button>
      <Flex flexDirection="column">
        <Box className={styles.common_div}>
          {open ? (
            <Image
              src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorLogo.svg"
              w="130px"
            />
          ) : (
            <Image
              src="https://cdn-m.timecamp.com/img/greenbranding/press/timecamp-pr-materials/svg/colorIcon.svg"
              w="45px"
            />
          )}
        </Box>
        <Box className={styles.common_div}>
          <Text className={styles.common_text}>Track</Text>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
          >
            <FiClock className={styles.common_btn_sb_svg}/>
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              Timesheet
            </Text>
          </Button>
        </Box>
        <Box className={styles.common_div}>
          <Text className={styles.common_text}>Analyze</Text>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
          >
            <AiOutlineDashboard className={styles.common_btn_sb_svg}/>
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              Dashboard
            </Text>
          </Button>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
            onMouseEnter={onOpen}
          >
            <FaChartPie className={styles.common_btn_sb_svg}/>
            <Text
              {...(open ? { display: "flex" } : { display: "none" })}
              onMouseMove={onOpen}
              isOpen={isOpen}
            >
              <Link to = "Re">Reports</Link>
            </Text>
            {open ? <AiOutlineRight /> : ""}


            {/* <Drawer
              placement={"left"}
              isOpen={isOpen}
              size="xs"
              zIndex="-1000"
              className={styles.drawer_div_open}
            > */}
              {/* <DrawerContent {...open ? {marginLeft:"16%"}: {marginLeft:"7%"}} onMouseLeave={onClose}>
                <DrawerBody padding="0px">
                  <Box className={styles.drawer_content}>
                    <Text className={styles.common_text}>Time Reports</Text>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <BsBarChartLine />
                      Summary
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FaSearchPlus />
                      Detailed
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <BsCalendar2Check />
                      By days
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FaRegPlusSquare />
                      Custom
                    </Flex>
                  </Box>
                  <Box className={styles.drawer_content}>
                    <Text className={styles.common_text}>People Reports</Text>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FiUsers />
                      People by tasks
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FiUsers />
                      People by days and tasks
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FiUsers />
                      People by days
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FiUsers />
                      People by projects
                    </Flex>
                  </Box>
                  <Box className={styles.drawer_content}>
                    <Text className={styles.common_text}>
                      Budegeting Reports
                    </Text>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FaRegMoneyBillAlt />
                      Billable, unbillable, invoiced
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FaListUl />
                      Estimates
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FaDollarSign />
                      Revenues
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FaDollarSign />
                      Costs
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FaDollarSign />
                      Margin
                    </Flex>
                  </Box>
                  <Box className={styles.drawer_content}>
                    <Text className={styles.common_text}>Others</Text>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <AiOutlineDashboard />
                      Real time-dashboard
                    </Flex>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer> */}
          </Button>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
            onMouseEnter={secOnOpen}
          >
            <GrPersonalComputer className={styles.common_btn_sb_svg}/>

            <Text
              {...(open ? { display: "flex" } : { display: "none" })}
              onMouseEnter={secOnOpen}
            >
              Computer Time
            </Text>

            {open ? <AiOutlineRight className={styles.arrows}/> : ""}

            {/* <Drawer
              placement={"left"}
              isOpen={secIsOpen}
              size="xs"
              zIndex="-1000"
              className={styles.drawer_div_open}
            >
              <DrawerContent {...open ? {marginLeft:"16%"}: {marginLeft:"7%"}} onMouseLeave={secOnClose}>
                <DrawerBody padding="0px">
                  <Box className={styles.drawer_content}>
                    <Text className={styles.common_text}>
                      Computer Time Reports
                    </Text>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FaTableTennis />
                      Away time
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <GrCursor />
                      Activities
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <BiCategory />
                      Categories
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <BiCalendar />
                      Timeline
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <BiRocket />
                      Goals
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <FiTarget />
                      Efficiency
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      className={styles.drawer_elements}
                    >
                      <GrPieChart />
                      User Stactistics
                    </Flex>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer> */}
          </Button>
        </Box>
        <Box className={styles.common_div}>
          <Text className={styles.common_text}>Manage</Text>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
          >
            <VscFileSubmodule className={styles.common_btn_sb_svg}/>
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              Projects
            </Text>
          </Button>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
          >
            <BsTags className={styles.common_btn_sb_svg}/>
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              Tags
            </Text>
          </Button>
        </Box>
        <Box className={styles.common_div}>
          <Text className={styles.common_text}>Team</Text>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
          >
            <FiUsers className={styles.common_btn_sb_svg}/>
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              Users
            </Text>
          </Button>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
          >
            <AiOutlineCheckSquare className={styles.common_btn_sb_svg}/>
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              <Link to="/attendance">Attandance</Link>
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;

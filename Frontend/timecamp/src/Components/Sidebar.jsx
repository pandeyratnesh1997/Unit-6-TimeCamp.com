import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import styles from "./Style/Sidebar.module.css";
import { FiClock, FiUsers } from "react-icons/fi";
import {
  AiOutlineDashboard,
  AiOutlineCheckSquare,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsTags } from "react-icons/bs";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleButton = () => {
    setOpen(!open);
  };

  return (
    <Box
      {...(open ? { w: "16%" } : { w: "7%" })}
      height="100vh"
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      transition={".1s"}
      zIndex={1500}
    >
      <Button
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
            <FiClock />{" "}
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
            <AiOutlineDashboard />{" "}
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
            <FaChartPie />
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              Reports
            </Text>
            <Drawer placement={'left'}  isOpen={isOpen} size="md" zIndex={'1200'}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody onMouseLeave={onClose}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          </Button>
          <Button
            className={styles.common_btn_sb}
            bg="none"
            justifyContent={"flex-start"}
            fontWeight={"400"}
          >
            <GrPersonalComputer />{" "}
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              Computer time
            </Text>
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
            <VscFileSubmodule />{" "}
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
            <BsTags />{" "}
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
            <FiUsers />{" "}
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
            <AiOutlineCheckSquare />{" "}
            <Text {...(open ? { display: "flex" } : { display: "none" })}>
              Attendance
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;

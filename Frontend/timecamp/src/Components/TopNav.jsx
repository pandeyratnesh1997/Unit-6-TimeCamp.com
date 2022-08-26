// write only reusable components in this folder. eg. Navbar, footer etc

import {
  Box,
  Menu,
  MenuItem,
  MenuButton,
  Text,
  Button,
  Flex,
  Image,
  MenuList,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./Style/TopNav.module.css";
import cx from "classnames";
import React from "react";
import { Link as Routerlink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const TopNav = () => {
  const [fix, setFixed] = useState(false)
  const [fixTwo, setFixedTwo] = useState(false)
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: secOpen,
    onOpen: secOnOpen,
    onClose: secOnClose,
  } = useDisclosure();

  const handleShow = () => {
    setShow(!show);
  };

  const handelNavFix = () => {
      if(window.scrollY >= 90){
        setFixed(true)
        setFixedTwo(true)
      }
      else{
        setFixed(false)
        setFixedTwo(false)
      }
  }

  window.addEventListener('scroll', handelNavFix);

 
  return (
    <>
      <Box className={styles.extra_bar}>
        Want to become a Reseller, Affiliate, or Integration Partner? We are
        recruiting for our new Partner Programs.
        <Link
          href="https://www.timecamp.com/partners"
          isExternal
          fontWeight={"bold"}
        >
          Learn more and apply here ➡️
        </Link>
      </Box>
      <Box className={fix ? (styles.fixed) : (styles.TopNavContainer)}>
        <Flex className={styles.m_flex}>
          <Box>
            <Routerlink to="/">
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
                alt="timecamp logo"
              />
            </Routerlink>
          </Box>
          <Box className={styles.mid_part} onMouseLeave={secOnClose}>
            <Flex alignItems={"center"} justifyContent="space-between" onMouseLeave={onClose}>
              <Box>
                <Menu isOpen={isOpen}>
                  <MenuButton
                    colorScheme="white"
                    variant="ghost"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    onMouseEnter={onOpen}
                    className={styles.common_btn}
                  >
                    Features
                  </MenuButton>
                  <MenuList
                    onMouseLeave={onClose}
                    padding={0}
                    className={styles.menulist_items}
                    marginTop={"-6px"}
                  >
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg" />
                      Productivity tracking
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/automatic-time-tracking.svg" />
                      Automatic time tracking
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg" />
                      Reporting
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/timesheet-approvals.svg" />
                      Timesheet approval
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/invoicing.svg" />
                      Invoicing
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg" />
                      Billing rates and budgeting
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg" />
                      Attendance
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box onMouseEnter={secOnClose} onMouseMove={onClose}>
                <Text>Pricing</Text>
              </Box>
              <Box>
                <Menu isOpen={secOpen}>
                  <MenuButton
                    colorScheme="white"
                    variant="ghost"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    onMouseEnter={secOnOpen}
                    className={styles.common_btn}
                  >
                    Integrations
                  </MenuButton>
                  <MenuList
                    onMouseLeave={secOnClose}
                    padding={0}
                    className={styles.menulist_items}
                    marginTop={"-6px"}
                  >
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Trello.svg" />
                      Trello
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/GCalendar.svg" />
                      Google Calender
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/iCal.svg" />
                      iCal
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Asana.svg" />
                      Asana
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Monday.svg" />
                      Monday.com
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Jira.svg" />
                      Jira
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/all-integrations.svg" />
                      All integrations
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box onMouseEnter={secOnClose}>
                <Text>Blog</Text>
              </Box>
            </Flex>
          </Box>
          <Box className={styles.last_part}>
            <Flex alignItems={"center"}>
              <Box>
                <Button
                  className={styles.common_btn}
                  bg="none"
                  _hover={{ bg: "none" }}
                  borderRight="1px solid #90c1f2"
                  borderRadius={"none"}
                >
                  Book a Demo
                </Button>
              </Box>
              <Box>
                <Routerlink to="/register">
                <Button
                  className={styles.common_btn}
                  bg="none"
                  _hover={{ bg: "none" }}
                >
                  Sign in
                </Button>
                </Routerlink>
              </Box>
              <Box>
                <button className={styles.tracking_btn}>
                  Start tracking time
                </button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box className={fixTwo ? styles.fixed2 : styles.TopNavContainer2}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          padding="10px 20px"
        >
          <Box>
            <Routerlink to="/">
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
                alt="timecamp logo"
              />
            </Routerlink>
          </Box>
          <Box>
            <Button bg="none" onClick={handleShow}>
              <GiHamburgerMenu color="gray"/>
            </Button>
          </Box>
        </Flex>

        {show ? (
          <Box className={styles.last_part}>
            <Flex flexDirection="column">
              <Box>
                <Menu >
                  <MenuButton
                    colorScheme="white"
                    variant="ghost"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    className={styles.common_btn}
                  >
                    Features
                  </MenuButton>
                  <MenuList
                    padding={0}
                    className={styles.menulist_items}
                  >
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg" />
                      Productivity tracking
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/automatic-time-tracking.svg" />
                      Automatic time tracking
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg" />
                      Reporting
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/timesheet-approvals.svg" />
                      Timesheet approval
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/invoicing.svg" />
                      Invoicing
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg" />
                      Billing rates and budgeting
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg" />
                      Attendance
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box >
                <Button bg="none">Pricing</Button>
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    colorScheme="white"
                    variant="ghost"
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    className={styles.common_btn}
                  >
                    Integrations
                  </MenuButton>
                  <MenuList
                    padding={0}
                    className={styles.menulist_items}
                  >
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Trello.svg" />
                      Trello
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/GCalendar.svg" />
                      Google Calender
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/iCal.svg" />
                      iCal
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Asana.svg" />
                      Asana
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Monday.svg" />
                      Monday.com
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Jira.svg" />
                      Jira
                    </MenuItem>
                    <MenuItem>
                      <Image src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/all-integrations.svg" />
                      All integrations
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box >
                <Button bg="none">Blog</Button>
              </Box>
              <Box>
                <Button
                  className={styles.common_btn}
                  bg="none"
                  _hover={{ bg: "none" }}
                  borderRadius={"none"}
                >
                  Book a Demo
                </Button>
              </Box>
              <Box>
                <Button
                  className={styles.common_btn}
                  bg="none"
                  _hover={{ bg: "none" }}
                >
                  Sign in
                </Button>
              </Box>
              <Box>
                <button className={styles.tracking_btn_2} >
                  Start tracking time
                </button>
              </Box>
            </Flex>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default TopNav;

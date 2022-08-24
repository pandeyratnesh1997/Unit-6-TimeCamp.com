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

const TopNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: secOpen,
    onOpen: secOnOpen,
    onClose: secOnClose,
  } = useDisclosure();

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
          {" "}
          Learn more and apply here ➡️{" "}
        </Link>
      </Box>
      <Box className={styles.TopNav_container}>
        <Flex className={cx(styles.m_flex, styles.fixed_top)}>
          <Box>
            <Routerlink to="/">
              <Image
                src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
                alt="timecamp logo"
              />
            </Routerlink>
          </Box>
          <Box className={styles.mid_part}>
            <Flex alignItems={"center"} justifyContent="space-between">
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
              <Box>
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
              <Box>
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
                <Button
                  className={styles.common_btn}
                  bg="none"
                  _hover={{ bg: "none" }}
                >
                  Sign in
                </Button>
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
    </>
  );
};

export default TopNav;

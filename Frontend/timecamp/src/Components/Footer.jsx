import {
  Box,
  Flex,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Style/Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <SimpleGrid
        columns={[1, 2, 3, 4, 6]}
        textAlign={["center", "center", "left"]}
        spacing="40px"
        className={styles.grid_container}
      >
        <Box className={styles.common_container}>
          <Heading as="h2" size="md" color={"gray.600"}>
            Product
          </Heading>
          <UnorderedList>
            <Link href="/time-tracking/" style={{ textDecoration: "none" }}>
              <ListItem>Features</ListItem>
            </Link>
            <Link href="/integrations/" style={{ textDecoration: "none" }}>
              <ListItem>Integrations</ListItem>
            </Link>
            <Link href="/applications/" style={{ textDecoration: "none" }}>
              <ListItem>Applications</ListItem>
            </Link>
            <Link href="/product-updates/" style={{ textDecoration: "none" }}>
              <ListItem>Products Updates</ListItem>
            </Link>
            <Link href="/customer-stories/" style={{ textDecoration: "none" }}>
              <ListItem>Customer Stories</ListItem>
            </Link>
            <Link href="/self-hosting/" style={{ textDecoration: "none" }}>
              <ListItem>Self-Hosting</ListItem>
            </Link>
          </UnorderedList>
        </Box>
        <Box className={styles.common_container}>
          <Heading as="h2" size="md" color={"gray.600"}>
            Support
          </Heading>
          <UnorderedList>
            <Link href="/support/" style={{ textDecoration: "none" }}>
              <ListItem>Support</ListItem>
            </Link>
            <Link href="/knowledge-base/" style={{ textDecoration: "none" }}>
              <ListItem>Knowledge base</ListItem>
            </Link>
            <Link href="/developer-api/" style={{ textDecoration: "none" }}>
              <ListItem>Developers API</ListItem>
            </Link>
            <Link href="/server-status/" style={{ textDecoration: "none" }}>
              <ListItem>Server Status</ListItem>
            </Link>
          </UnorderedList>
        </Box>
        <Box className={styles.common_container}>
          <Heading as="h2" size="md" color={"gray.600"}>
            Integrations
          </Heading>
          <UnorderedList>
            <Link
              href="/integrations/trello-time-tracking/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Trello</ListItem>
            </Link>
            <Link
              href="/integrations/monday-com-time-tracking/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Monday.com</ListItem>
            </Link>
            <Link
              href="/integrations/google-calender-time-tracking/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Google Calender</ListItem>
            </Link>
            <Link
              href="/integrations/asana-time-tracking/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Asana</ListItem>
            </Link>
            <Link
              href="/integrations/jira-time-tracking/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Jira</ListItem>
            </Link>
            <Link
              href="/integrations/all-integrations-time-tracking/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>All integrations</ListItem>
            </Link>
          </UnorderedList>
        </Box>
        <Box className={styles.common_container}>
          <Heading as="h2" size="md" color={"gray.600"}>
            Resources
          </Heading>
          <UnorderedList>
            <Link href="/contact/" style={{ textDecoration: "none" }}>
              <ListItem>Contact</ListItem>
            </Link>
            <Link href="/heyspace/" style={{ textDecoration: "none" }}>
              <ListItem>HeySpace</ListItem>
            </Link>
            <Link href="/about/" style={{ textDecoration: "none" }}>
              <ListItem>About us</ListItem>
            </Link>
            <Link href="/press/" style={{ textDecoration: "none" }}>
              <ListItem>Press</ListItem>
            </Link>
            <Link href="/partner/" style={{ textDecoration: "none" }}>
              <ListItem>Become a Partner</ListItem>
            </Link>
          </UnorderedList>
        </Box>
        <Box className={styles.common_container}>
          <Heading as="h2" size="md" color={"gray.600"}>
            Calculators
          </Heading>
          <UnorderedList>
            <Link
              href="/resources/pmc/profit-margin-calculator/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Pofit margin Calculator</ListItem>
            </Link>
            <Link
              href="/resources/pmc/online-timer/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Online Timer</ListItem>
            </Link>
            <Link
              href="/resources/pmc/overtime-calculator/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Overtime Calculator</ListItem>
            </Link>
            <Link
              href="/resources/pmc/roi-calculator/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>ROI Calculator</ListItem>
            </Link>
            <Link
              href="/resources/pmc/time-card-calculator/"
              style={{ textDecoration: "none" }}
            >
              <ListItem>Time Card Calculator</ListItem>
            </Link>
          </UnorderedList>
        </Box>
        <Box className={styles.common_container}>
          <Heading as="h2" size="md" color={"gray.600"}>
            Legal
          </Heading>
          <UnorderedList>
            <Link href="/terms-conditions/" style={{ textDecoration: "none" }}>
              <ListItem>Terms</ListItem>
            </Link>
            <Link href="/privacy/" style={{ textDecoration: "none" }}>
              <ListItem>Privacy</ListItem>
            </Link>
            <Link href="/security/" style={{ textDecoration: "none" }}>
              <ListItem>Security</ListItem>
            </Link>
          </UnorderedList>
        </Box>
      </SimpleGrid>

      <Box className={styles.contact_div}>
        <Flex w={["25%","20%","10%"]} justifyContent={"space-between"} margin="30px auto">
          <Link href="https://www.facebook.com/timecamp/" isExternal>
            <FaFacebookF />
          </Link>
          <Link href="https://www.linkedin.com/company/timecamp/" isExternal>
            <FaLinkedinIn />
          </Link>
          <Link href="https://twitter.com/timecamp/" isExternal>
            <FaTwitter />
          </Link>
        </Flex>
        <Text color={'gray.400'} fontSize="12px">Copyright &#169; {year} TimeCamp. Inc.</Text>
        <Text color={'gray.400'} fontSize="11px">We use cookies. Click here to learn more</Text>
      </Box>
    </>
  );
};

export default Footer;

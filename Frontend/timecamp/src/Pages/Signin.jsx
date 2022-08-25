import React from "react";
import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import styles from "../Styled/signin.module.css"
const Signin = () => {
  return (
    <>
      <Box className={styles.top_sec}>
        <Flex className={styles.top_sec_flex}>
          <Box>
            <Image src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661428039.svg" w="150px"/>
          </Box>
          <Box>
            <Button variant={'ghost'}>Log in</Button>
          </Box>
        </Flex>
      </Box>
      <Box className={styles.sign_in_div}>
        <Heading>Start tracking time</Heading>
        <Heading as="h2">Create an account and start with a free 14-day trial</Heading>
        <Heading as="h4">All features. No credit card required.</Heading>
        <Button>Sign up with Google</Button>
        <Text>Or</Text>
        <form>
            <Input/>
            <Input/>
            <Input/>
            <Button>Sign up for free</Button>
        </form>
        <Text>By signing up you agree to our Terms of Service and Privacy Policy</Text>
      </Box>
    </>
  );
};

export default Signin;

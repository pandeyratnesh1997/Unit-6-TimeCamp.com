import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  Link,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FiChrome } from "react-icons/fi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import styles from "../Styled/login.module.css";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(login(payload)).then(res => {
      console.log(res)
      if(res.LOGIN_SUCCESS  === LOGIN_SUCCESS){
        toast({
          position: "top",
          title: "Hurray! we are a team now!",
          description:
            "You have successfully logged in for the Timecamp. You are now being redirected to Home. Please wait!",
          status: "success",
          duration: 5000,
          isClosable: true,
          zIndex: 10000,
        });
        localStorage.removeItem("TimeCampToken");
        localStorage.setItem("TimeCampToken", res.data.token);
        setTimeout(() => {
          navigate("/project", { replace: true });
        }, 5000);
      } else if (res === LOGIN_FAILURE) {
        toast({
          position: "top",
          title: "Oops! You have entered wrong email or password.",
          description:
            "You have entered wrong credentials. Please try again with correct one.",
          status: "error",
          duration: 5000,
          isClosable: true,
          zIndex: 10000,
        });
      }
    });
  };

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.title = "Timecamp || Login";
  });
  return (
    <>
      <Box className={styles.top_sec}>
        <Flex className={styles.top_sec_flex}>
          <Box>
            <RouterLink to="/">
              <Image
                src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661428039.svg"
                w="149px"
              />
            </RouterLink>
          </Box>
        </Flex>
      </Box>
      <Box className={styles.mid_div}>
        <Box className={styles.left_container}>
          <Text>Product update</Text>
          <Heading as="h1">TimeCamp Plugin for Google Chrome</Heading>
          <Heading as="h2">
            Track time without leaving Chrome in 70+ online apps.
          </Heading>
          <Button
            borderRadius="50px"
            colorScheme="whatsapp"
            w={["15rem", "70%", "65%"]}
          >
            <FiChrome />
            Add TimeCamp for Chrome
          </Button>
          <Flex
            className={styles.mid_div_flex}
            display={["none", "none", "none", "flex"]}
          >
            <Box>
              <Image src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661509648.png" />
            </Box>
            <Box>
              <Image src="https://cdn.timecamp.com/res/css/images/capterra-icon.1661509648.png" />
            </Box>
            <Box>
              <Image src="https://cdn.timecamp.com/res/css/images/crowd-icon.1661509648.png" />
            </Box>
            <Box>
              <Image src="https://cdn.timecamp.com/res/css/images/get-app-icon.1661509648.png" />
            </Box>
          </Flex>
        </Box>

        <Box className={styles.right_container}>
          <Heading as="h1">Log in to TimeCamp</Heading>
          <Link href="http://localhost:5000/google/auth/google">
            <Button className={styles.google_sign} display="flex" bg="none">
              <FcGoogle />
              <Text>Log in with Google</Text>
            </Button>
          </Link>
          <Text className={styles.or_text}>Or</Text>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.log_in_input}
              size={["sm", "md", "md"]}
              w={["95%", "80%", "80%"]}
            />
            <InputGroup
              className={styles.log_in_input}
              size={["sm", "md", "md"]}
              w={["95%", "80%", "80%"]}
            >
              <Input
                type={show ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement>
                <Button
                  size="sm"
                  onClick={handleClick}
                  bg="none"
                  className={styles.show_hide_btn}
                >
                  {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              className={styles.forget_pass}
              variant={"link"}
              display="flex"
              colorScheme={"whatsapp"}
            >
              Forgotten Password?
            </Button>
            <Button
              className={styles.log_in_btn}
              display="flex"
              colorScheme="whatsapp"
              borderRadius={"50px"}
              height={["40px", "50px", "50px"]}
              variant={"solid"}
              type="submit"
            >
              Log in
            </Button>
          </form>

          <Text className={styles.else_sign_up}>
            No account ?<RouterLink to="/register"> Sign up</RouterLink>
            <span> or </span>
            <span style={{ color: "#02ce10" }}>Log in with SSO</span>
          </Text>
        </Box>
        <Flex
          className={styles.right_div_flex}
          display={["flex", "flex", "flex", "none"]}
        >
          <Box>
            <Image src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1661509648.png" />
          </Box>
          <Box>
            <Image src="https://cdn.timecamp.com/res/css/images/capterra-icon.1661509648.png" />
          </Box>
          <Box>
            <Image src="https://cdn.timecamp.com/res/css/images/crowd-icon.1661509648.png" />
          </Box>
          <Box>
            <Image src="https://cdn.timecamp.com/res/css/images/get-app-icon.1661509648.png" />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Login;

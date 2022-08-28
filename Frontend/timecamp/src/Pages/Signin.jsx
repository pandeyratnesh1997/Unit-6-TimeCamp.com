import React, { useState } from "react";
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
  Link
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styles from "../Styled/signin.module.css";
import { useDispatch } from "react-redux";
import { Link as RouterLink,useNavigate } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";
import {
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "../Redux/AuthReducer/actionTypes";
import axios from "axios";
import { useEffect } from "react";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [show, setShow] = React.useState(false);

  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
      phone,
    };

    dispatch(register(payload)).then((res) => {
      console.log(res);
      if (res === SIGNUP_SUCCESS) {
        toast({
          position: "top",
          title: "Account created.",
          description:
            "You have registered successfully for the Timecamp. You are now being redirected to login",
          status: "success",
          duration: 5000,
          isClosable: true,
          zIndex: 10000,
        });
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 5000);
        return;
      } else if (res === SIGNUP_FAILURE) {
        toast({
          position: "top",
          title: "Email has already been registered!",
          description: "This email has already been registered, please login",
          status: "error",
          duration: 5000,
          isClosable: true,
          zIndex: 10000,
        });
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 5000);
        return;
      } else {
        toast({
          position: "top",
          title: "OOPS!",
          description:
            " Something went wrong while registering. Please try again!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };

  const handleClick = () => setShow(!show);

  return (
    <>
      <Box className={styles.top_sec}>
        <Flex className={styles.top_sec_flex}>
          <Box>
            <Image
              src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661428039.svg"
              w="150px"
            />
          </Box>
          <Box>
            <RouterLink to="/login"><Button variant={"link"}>Log in</Button></RouterLink>
          </Box>
        </Flex>
      </Box>
      <Box className={styles.sign_in_div}>
        <Heading as="h1">Start tracking time</Heading>
        <Heading as="h2">
          Create an account and start with a free 14-day trial
        </Heading>
        <Heading as="h4">All features. No credit card required.</Heading>
        <Link href="http://localhost:5000/google/auth/google">
        <Button className={styles.google_sign} display="flex" bg="none">
            <FcGoogle />
            <Text>Sign up with Google</Text>
        </Button>
        </Link>
        <Text className={styles.or_text}>Or</Text>
        <form onSubmit={handleRegister}>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={styles.sign_in_input}
            size={["sm", "md", "md"]}
            w={["90%", "80%", "80%"]}
          />
          <InputGroup
            className={styles.sign_in_input}
            size={["sm", "md", "md"]}
            w={["90%", "80%", "80%"]}
          >
            <Input type={show ? "text" : "password"} placeholder="Password" />
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
          <Input
            placeholder="Phone (Optional)"
            onChange={(e) => setPhone(e.target.value)}
            className={styles.sign_in_input}
            size={["sm", "md", "md"]}
            w={["90%", "80%", "80%"]}
          />
          <Button
            className={styles.sign_up_btn}
            display="flex"
            colorScheme="whatsapp"
            borderRadius={"50px"}
            height={["40px","50px","50px"]}
            variant={"solid"}
            type="submit"
          >
            Sign up for free
          </Button>
        </form>
        <Text className={styles.terms}>
          By signing up you agree to our
          <span>Terms of Service and Privacy Policy</span>
        </Text>
      </Box>
    </>
  );
};

export default Signin;

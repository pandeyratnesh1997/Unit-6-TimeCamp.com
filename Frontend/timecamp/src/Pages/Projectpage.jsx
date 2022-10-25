import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Container,
  HStack,
  Text,
  Select,
  Input,
  VStack,
  Heading,
  useToast
} from "@chakra-ui/react";

import styles from "../Styled/projectpage.module.css";

import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { Spinner } from '@chakra-ui/react'

import ProjectCard from "../Components/ProjectCard";

import EditPage from "./EditPage";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { getProject } from "../Redux/AppReducer/action";

const Projectpage = () => {
  const {isLoading, isError, allProject} = useSelector((state)=> state.appReducer);
  const toast = useToast();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProject())
  }, []);
  if(isLoading){
    return <Spinner ml={'50%'} mt={'20%'} size={'xl'} color='blue.500'/>
  }
  if(isError){
    toast({
      position: "top",
      title: "Error in Data fetching",
      description:
        "Error from server",
      status: "error",
      duration: 3000,
      isClosable: true,
      zIndex: 10000,
    });
  }
  return (
    <Flex w="100%" justifyContent={"space-between"} padding={0}>
      <Container w="17%" padding={0} margin={0}>
        <Sidebar />
      </Container>
      <Box
        boxSize={"border-box"}
        border="1px solid rgb(219,219,219)"
        top={"50%"}
        height={"60px"}
        ml="40"
        width={"70%"}
        margin=" 1px auto"
      >
        <Box className={styles.top_cont}>
          <Text fontSize={"20"} fontWeight="700">
            Projects
          </Text>

          <Link to={"/billing"}>
            <Button bg={"orange.300"}>Subscribe to Pro</Button>
          </Link>
          <Button className={styles.top_cont_profile}>
            <IoPersonAddOutline />
          </Button>
          <Button className={styles.top_cont_profile}>
            <CgProfile />
          </Button>
        </Box>

      
        <Box className={styles.project_cont_and_taskform_parent}>
          <Box className={styles.project_card_container}>
            <Heading textAlign={"center"} size={"lg"} mb={"5"}>
              Your Tasks
            </Heading>
            {allProject?.length > 0 &&
              allProject.map((el) => {
                return (
                  <Box className={styles.card_div} key={el._id}>
                    <ProjectCard {...el} />
                  </Box>
                );
              })}
          </Box>

          <EditPage />
        </Box>
      </Box>
    </Flex>
  );
};

export default Projectpage;

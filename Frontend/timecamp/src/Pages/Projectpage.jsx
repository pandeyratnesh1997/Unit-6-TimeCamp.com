import React, { useState } from "react";
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
} from "@chakra-ui/react";
import styles from "../Styled/projectpage.module.css";

import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";

import ProjectCard from "../Components/ProjectCard";
import { useEffect } from "react";
import EditPage from "./EditPage";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

const Projectpage = () => {
  // const [project,setproject] = useState("");;
  const [allProjects, setAllProjects] = useState([]);
  // const handleAdd = async(e)=>{
  //     e.preventDefault();
  //     let url = "https://blooming-sea-03900.herokuapp.com/project"
  //     const payload = {
  //         project_name : project,
  //         user_id : 1
  //     }
  //     const headers = {
  //         'Content-Type': 'application/json',
  //         'authorization': `${localStorage.getItem("TimeCampToken")}`
  //       }
  //     try {
  //         let res = await axios.post(url,payload);
  //         console.log(res)
  //     } catch (error) {
  //         console.log("error while createing project", error)
  //     }

  // }

  const getProject = async () => {
    const headers = {
      authorization: `${localStorage.getItem("TimeCampToken")}`,
    };
    try {
      let res = await axios.get(
        "https://blooming-sea-03900.herokuapp.com/project/task",
        {
          headers,
        }
      );
      setAllProjects(res.data);
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

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

        {/* <Box mb='15'>
            <HStack spacing={'2'} >
           
                <Button colorScheme='green' size='md'>Add Project</Button>
                <Select variant='outline' size='md' width='110px' placeholder='Filter'>
                    <option value='All tasks'>All tasks</option>
                    <option value='My tasks'>My tasks</option>
                </Select>
            </HStack>
        </Box>
        <Box mb={'8'}>
            <HStack gap={'2'}>
                <Input w='60' placeholder='Enter project name' value={project} onChange={(e)=>setproject(e.target.value)}></Input>
                <Button size={'md'} colorScheme='green' onClick={(e)=>handleAdd(e)}>Add</Button>
                <Button variant={'outline'} size='md'>Cancel</Button>
            </HStack>
        </Box>
       */}
        <Box className={styles.project_cont_and_taskform_parent}>
          <Box className={styles.project_card_container}>
            <Heading textAlign={"center"} size={"lg"} mb={"5"}>
              Your Tasks
            </Heading>
            {allProjects?.length > 0 &&
              allProjects.map((el) => {
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

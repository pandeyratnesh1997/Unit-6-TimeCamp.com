import {
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
  HStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export const Report = () => {
  const [alltask, setAllTask] = useState([]);
  const [page, setpage] = useState(0);
  const [limit,setlimit] = useState(5);
  const [totalPage,setTotalPage] = useState(0)
console.log(alltask)

  const getTimer = async (url) => {
    const headers = {
      authorization: `${localStorage.getItem("TimeCampToken")}`,
    };
    try {
      let res = await axios.get(url, {
        headers,
      });
      return res.data
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handlePrev =()=>{
    if(page<=0){
      page = 0
    }
   setpage(page - 1)
  }
  const handleNext =()=>{
    if(page>=totalPage){
      page = 0
    }
   setpage(page+1)
  }

  useEffect(() => {
    const getData = async()=>{
      let url1 = `http://localhost:5000/timer?page=${page}&limit=${limit}`
   
      let res = await getTimer(url1);
      console.log(res)
     setAllTask(res);
      
    }
    getData()
   
    
    
  }, [page, limit]);
  useEffect(()=>{

    const getTotalNoOfPage = async()=>{
      let url2 = "http://localhost:5000/timer";
    
      let res = await getTimer(url2);
      console.log(res)
      setTotalPage(res)
      }
    getTotalNoOfPage()
  },[])

  return (
    <Box>
      <Heading ml={'45%'} mb={8} size={'md'}>Report page</Heading>
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        
        <Thead>
          <Tr>
            <Th>Task Id</Th>
            <Th>Start time</Th>
            <Th>End Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {alltask?.map((el) => {
            return (
              <Tr key={el._id}>
                <Td>{el.taskName}</Td>
                <Td>{el.startTime}</Td>
                <Td>{el.endTime}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
          <HStack>
            <Button onClick={handlePrev}>Prev</Button>
            <Text>{page+1}</Text>
            <Button onClick={handleNext}>Next</Button>
          </HStack>
    </Box>
  );
};

import {
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
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
import styles from "../Styled/report.module.css";

export const Report = () => {
  const [alltask, setAllTask] = useState([]);
  const [page, setpage] = useState(0);

  const [totalPage, setTotalPage] = useState(0);
  // console.log(alltask);

  const getTimer = async (url) => {
    const headers = {
      authorization: `${localStorage.getItem("TimeCampToken")}`,
    };
    try {
      let res = await axios.get(url, {
        headers,
      });
      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  };
  const handlePrev = () => {
    if (page <= 0) {
      page = 0;
    }
    setpage(page - 1);
  };
  const handleNext = () => {
    if (page >= totalPage) {
      page = 0;
    }
    setpage(page + 1);
  };

  useEffect(() => {
    const getData = async (limit = 5) => {
      let url1 = `https://blooming-sea-03900.herokuapp.com/timer?page=${page}&limit=${limit}`;

      let res = await getTimer(url1);
      // console.log(res);
      setAllTask(res.task);
      setTotalPage(res.totalPage);
    };
    getData();
  }, [page]);

  return (
    <Box className={styles.reportCont}>
      <Heading ml={"45%"} mb={8} size={"md"}>
        Report page
      </Heading>
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
      <Box className={styles.btnGr}>
        <HStack>
          <Button disabled={page <= 0} onClick={handlePrev}>
            Prev
          </Button>
          <Text>{page + 1}</Text>
          <Button disabled={page >= totalPage} onClick={handleNext}>
            Next
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

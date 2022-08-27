import React, { useState }from 'react'
import {questions} from "./api";
import MyAccordion from "./MyAccordion";
import styled from "styled-components"

const MyDi= styled.div`

margin:auto;
width:70%;
height:400px;

`

const Accordion = () => {
    const [data,setData]= useState(questions)
  return (
    <>
    <h1 style={{fontSize:"40px",margin:"40px 45rem",fontWeight:"bold"}}>FAQ</h1>
    <MyDi>
    {
        data.map((elem)=>{
            const {id}=elem;
            return <MyAccordion key={id} {...elem}/>
        })
    }
    </MyDi>
    </>
  )
}

export default Accordion;
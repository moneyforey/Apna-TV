import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Image, SimpleGrid } from '@chakra-ui/react'

const AdminMovies = () => {

  const [data,setData]=useState([])
  
  const getMovies=async()=>{
    let res=await axios.get("http://localhost:8080/movieadmin")
    console.log(res.data)
    setData(res.data)

  }

  useEffect(()=>{
getMovies()
  },[])
  return (
    <>
    <SimpleGrid m={"auto"} columns={[1,2,3,4]} rowGap="20px" mt={10}>
      {
        data.map((m)=>{
          return(
            <Box  m={"auto"}>
              <Image width={"300px"} src={m.poster_path}/>
            </Box>
          )
        })
      }
    </SimpleGrid>
    
    </>
  )
}

export default AdminMovies
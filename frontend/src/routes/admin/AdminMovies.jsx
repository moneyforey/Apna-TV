import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const AdminMovies = () => {

  const [data,setData]=useState([])
  
  const getMovies=async()=>{
    let res=await axios.get("https://zeebackend-production.up.railway.app/movieadmin")
    console.log(res.data)
    setData(res.data)

  }

  useEffect(()=>{
getMovies()
  },[])

  const deleteMovies=async(id)=>{
    let res=await axios.delete(`https://zeebackend-production.up.railway.app/movieadmin/${id}`)
    getMovies()
  }
  return (
    <>
    <SimpleGrid m={"auto"} columns={[1,2,3,4]} rowGap="20px" mt={10}>
      {
        data.map((m)=>{
          return(
            <Box key={m._id} m={"auto"}>
              <Link to={`/admin/${m._id}`}>
                  <Image width={"300px"} src={m.poster_path}/>
              <Text mt={5} fontSize="md" color={"teal"}>{m.title}</Text>
              <Text fontSize="md" color={"teal"}>{m.release_date}</Text>
              
              </Link>
              <Flex justifyContent={"space-evenly"}> 
                <Link to={`/admin/update/${m._id}`}>
                <Button>Update</Button>
                </Link>
                <Button onClick={()=>deleteMovies(m._id)}>Delete</Button>
              </Flex>
             
          
            </Box>
          )
        })
      }
    </SimpleGrid>
    
    </>
  )
}

export default AdminMovies
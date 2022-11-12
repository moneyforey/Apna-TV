import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <>
    <Flex justifyContent={"space-around"} bg="black">
        <Link to={"/admin/allUsers"}>
        <Text fontSize={"xl"} fontWeight="semibold" color={"blue.500"} >All Users</Text>
        
        </Link>
        <Link to={"/admin"}>
        <Text fontSize={"xl"} fontWeight="semibold" color={"blue.500"} >All Movies</Text>
        
        </Link>
        <Link to={"admin/addMovie"}>
         <Text fontSize={"xl"} fontWeight="semibold" color={"blue.500"} >Add Movies</Text>
        </Link>
       

    </Flex>
    
    </>
  )
}

export default AdminNav
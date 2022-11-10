import {Box, Text, Flex, Input, Button, Image, FormLabel, border}  from '@chakra-ui/react'
import "./login.css"
import {  BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Login = ()=>{
   
    const [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
        


    const {error, loading, token}  = useSelector((store)=> store.auth)
   
    return(
    <>
            <Box bg="#0f0617" color="white" >
            <div> 
                   <Link to="/"> <AiOutlineClose style={{position: "fixed", top: "20px" , right: "20px", cursor: "pointer"}} /></Link>
                   </div>
                  
                        <Box p="20px">
                            <Box p="30px">
                                <Text fontSize="20px" as="h1" fontWeight="bold" pb="15px" >Login to Appna Tv</Text>
                                <Text as="p" width="35%" m="auto" textAlign={"center"}  >Login to continue enjoying uninterrupted video and personalised experience.</Text>

                            </Box>
                             <Flex mt="20px" alignItems={"center"} justifyContent="center" gap={"2rem"} mb="35px" >
                                <Box borderRadius={"50%"} backgroundColor="white" h="40px" w="40px" size={"25px"} display="grid" placeItems="center" >
                                     <BsApple display={"grid"} placeItems="center" size={"23px"}color='black' m="auto" />
                                </Box>
                                <Box borderRadius={"50%"} backgroundColor="white"  h="40px" w="40px" size={"25px"} display="grid" placeItems="center">
                                    <FcGoogle  size={"25px"} />
                                </Box>
                                  <Box >
                                    <Image src="https://www.zee5.com/images/fb-social-icon-circle.svg?ver=2.52.50"  border="0"  size={"40px"}/>
                                  </Box>
                                  <Box>
                                   <Image src="https://www.zee5.com/images/twitter-social-icon.svg?ver=2.52.50" size="40px" />
                                  </Box>
                             </Flex> 
                             <Box  textAlign={"center"} w="40px" h="40px" m="auto" borderRadius ="50%" backgroundColor={"hsla(0,0%,100%,.06);"} display="grid" placeItems="center">
                                  or
                             </Box>
                              <Box mt="30px" >
                                <FormLabel textAlign={"center"}>Email ID Or Mobile Number</FormLabel>
                                <Input placeholder='Email' mb="20px" onChange={(e)=> setEmail(e.target.value)} value={email} focusBorderColor="none" borderTop={"0"} borderLeft="0" borderRadius={"0"} borderRight="0" type="text" w="25%" required />
                                <br />
                                {
                                   email.split("").includes("@")   &&  <Input placeholder='Password' onChange={(e)=> setPassword(e.target.value)} value={password} focusBorderColor="none"   borderTop={"0"} borderLeft="0" borderRadius={"0"} borderRight="0" type="text" w="25%" required />
                                }
                                <Box mt="35px" mb="25px">
                                    <Text color="#a785ff">Forget Password ?</Text>
                                </Box>
                                <Button w="315px"  backgroundColor={"#8230c6"} >
                                    Login
                                </Button>
                                <Box mt="25px">
                                  <Text>New to Appna TV  <Link to="/register"><span style={{color:"#a785ff"}}>Register</span></Link></Text>
                                </Box>
                              </Box>
                              

                            </Box> 
         
            </Box>
      </>
    )
}

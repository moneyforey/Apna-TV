import {Box, Text, Flex, Input, Button, Image, FormLabel, border}  from '@chakra-ui/react'

import {  BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../store/signup/sign.action';


   
   export const SignUP = ()=>{
     const dispatch  = useDispatch();
     const navigate = useNavigate();
     const auth = useSelector((store)=> store.singup);
    const  [userSignup, setUsersingUp] = useState({
        name: "",
        email: "",
        password: "",
    })
 
    // console.log(auth)

    const handleChange = (e)=>{
   
        const  {name, value} = e.target
        setUsersingUp({
          ...userSignup,
          [name] : value
        })
    }
 
    const handleSignUp = ()=>{
          // console.log(userSignup)
         dispatch(signUp(userSignup));
         setUsersingUp({
          name: "",
          email: "",
          password: "",
         })
        }


    return(
    <div style={{backgroundColor: "#0f0617" ,
    height: "100vh"
}}>
          <Box bg="#0f0617" color="white"  >
            <div> 
                  <Link to="/">  <AiOutlineClose style={{position: "fixed", top: "20px" , right: "20px", cursor: "pointer"}} /></Link>
                   </div>
                  
                        <Box p="5px">
                            <Box p="10px">
                                <Text fontSize="20px" as="h1" fontWeight="bold" pb="15px" >Create a new account</Text>
                                <Text as="p" width="35%" m="auto" textAlign={"center"}  >Create an account to continue enjoying uninterrupted video and personalised experience</Text>

                            </Box>
                             <Flex mt="15px" alignItems={"center"} justifyContent="center" gap={"2rem"} mb="20px" >
                              
                                <Button  backgroundColor="white"  h="50px" w="315px" size={"25px"} display="grid" placeItems="center">
                                   <Flex gap="1.5rem" alignItems={"center"} justifyContent="center"> <FcGoogle  size={"25px"} />  <Text color="red" as="span">Sign in</Text></Flex>
                                </Button>
                               
                             </Flex> 
                             <Box  textAlign={"center"} w="40px" h="40px" m="auto" borderRadius ="50%" backgroundColor={"#450948"} display="grid" placeItems="center">
                                  or
                             </Box>
                              <Box mt="30px" >
                                <FormLabel color={"hsla(0,0%,100%,.5)"} textAlign={"center"}> Register Here</FormLabel>
                                <Input onChange={handleChange} name={"name"} value={userSignup.name}  focusBorderColor="none" mb="10px"  placeholder='Name' borderTop={"0"} borderLeft="0" borderRadius={"0"} borderRight="0" type="text" w="25%" required /> 
                                <br />
                                <Input onChange={handleChange} name={"email"} value={userSignup.email} focusBorderColor="none" mb="10px" placeholder='Email' borderTop={"0"} borderLeft="0" borderRadius={"0"} borderRight="0" type="email" w="25%" required /> 
                                <br />
                                <Input onChange={handleChange} name={"password"} value={userSignup.password} focusBorderColor="none"  placeholder='Password' borderTop={"0"} borderLeft="0" borderRadius={"0"} borderRight="0" type="password" w="25%" required />
                                <Box mt="20px" mb="15px">
                                 <Text as="p">By proceeding you agree to our  <Text as="span" color="#a785ff">Terms of services </Text>& <br /> <Text as="span" color="#a785ff">Privacy Policy</Text> </Text> 
                                </Box>
                                <Button onClick={handleSignUp} w="315px"  backgroundColor={"#8230c6"} >
                                    Register
                                </Button>
                                <Box mt="25px">
                                  <Text>Already registered? <Link to="/login"><span style={{color:"#a785ff"}}>Login</span></Link></Text>
                                </Box>
                              </Box>
                              

                            </Box> 
         
            </Box>
            </div>
    )
   }
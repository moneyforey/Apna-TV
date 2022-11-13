import { Box, 
 
  FormLabel,
  Input,
 } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ModalUsers = () => {

  const {id}=useParams()
 
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      singleupdate(id);
    }
  }, [id]);
  
  const singleupdate=async()=>{
  const res=await axios.get(`https://zeebackend-production.up.railway.app/movieadmin/users/${id}`)
 
  setState(res.data)
  }


  const updateUser = async (data, id) => {
    const res = await axios.patch(`https://zeebackend-production.up.railway.app/movieadmin/users/${id}`, data);
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(id){
      updateUser(state,id)
     
    }
  }



  return (
   <>
   <Box width={"50%"} m="auto" mt={10}>
   
              <form onSubmit={handleSubmit} mt={4}>
                <FormLabel mt={5}>User Name</FormLabel>
                <Input mb={5}onChange={handleChange} name="name" value={state.name} type={"text"} placeholder=" name" />

                <FormLabel mt={5}>Email id</FormLabel>
                <Input  onChange={handleChange} name="email" value={state.email} type={"text"} placeholder="email" />
                <Input bg={"aqua"} mt={5} type={"submit"} />
              </form>
        
      

   </Box>
   </>
  )
}

export default ModalUsers
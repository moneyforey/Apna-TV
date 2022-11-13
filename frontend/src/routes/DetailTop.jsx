import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import TopRated from "../components/Home/TopRated";
import VideoApp from "../components/VideoPlayer";
import {Box,Flex,Text,Heading,Stack} from "@chakra-ui/react";
import { FaImdb } from "react-icons/fa";
import styles from "./Detail.module.css"
const DetailTop=()=>{
    const [data,setData] = useState({});
    const params = useParams();
    const {id} = params;

    useEffect(()=>{
        axios(`http://localhost:8080/topratedmovies/${id}`)
        .then((res)=>{
        console.log(res.data)    
        setData(res.data)
       
    })

},[id]);
    return(
       <Box bg="#000000">
      <Flex className={styles.flxvd}>
      <VideoApp/>
      <Stack className={styles.bxtxt}>
      <Heading>{data.title}</Heading>
        <Text>{data.overview}</Text>
        <Flex className={styles.flxrd}>
            <Text>Released on : {data.release_date}</Text>
            <Flex className={styles.flxim}> <FaImdb/>
             <Text>{data.ratings}</Text>
             </Flex>
        </Flex>
      </Stack>
      </Flex>
       <TopRated/>
       </Box>
    )
}

export default DetailTop;
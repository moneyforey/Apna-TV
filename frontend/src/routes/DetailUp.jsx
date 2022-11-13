import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import TopRated from "../components/Home/TopRated";
import VideoApp from "../components/VideoPlayer";
import {Box,Flex,Heading,Text,Stack, Image} from "@chakra-ui/react";
import styles from "./Detail.module.css";
import { FaImdb } from "react-icons/fa";

const DetailUp=()=>{
    const [data,setData] = useState({});
    const params = useParams();
    const {id} = params;

    useEffect(()=>{
        axios(`https://zeebackend-production.up.railway.app/upcomingmovies/${id}`)
        .then((res)=>{
        console.log(res.data)    
        setData(res.data)
       
    })

},[id]);
    return(
       <Box bg="#000000">
      <Flex className={styles.flxvd}>
      <VideoApp/>
      <Stack m={"auto"} textAlign={"center"} className={styles.bxtxt}>
      <Heading>{data.title}</Heading>
      <Image className={styles.cover} ml={"255px"} w="65%" h="200px" objectFit={"contain"}  alt={data.title} src={data.poster_path} />
      <p className={styles.overview}>{data.overview}</p>
        <Flex className={styles.flxrd}>
            <Text><FaImdb/>{data.release_date}</Text>
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

export default DetailUp;
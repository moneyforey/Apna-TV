import { Box, Image } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Single.module.css"

const AdminSingle = () => {

    const [data,setData]=useState([])
    const {id}=useParams()
    const getMovies=async(id)=>{
      let res=await axios.get(`https://zeebackend-production.up.railway.app/movieadmin/${id}`)
      console.log("single",res.data)
      setData(res.data)
  
    }
  
    useEffect(()=>{
  getMovies(id)
    },[])


  return (
            <>
            <Box m="auto" mt={2}>
                <Box height={"600px"} >
                <Image height={"600px"} display={"block"} borderRadius={"7px"} m="auto" width={"99%"}  src={data.backdrop_path}/>
                </Box>
                <div className="posterImage__overlay">
                                    <div className={styles.posterImage__title}>{ data.title}</div>
                                    <div className={styles.posterImage__runtime}>
                                        { data.release_date }
                                        <span className={styles.posterImage__rating}>
                                            { data.ratings}
                                           
                                        </span>
                                    </div>
                                    <div className={styles.posterImage__description}>{ data.overview}</div>
                                </div>
            </Box>
            </>
  )
}

export default AdminSingle
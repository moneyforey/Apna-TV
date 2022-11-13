import { Box, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminAdd = () => {
  const [movie, setMovie] = useState({
    backdrop_path: "",
    genre_ids: [],
    original_language: "en",
    overview: "",
    popularity: Math.floor(Math.random() * 100),
    poster_path: "",
    release_date: "",
    title: "",
    video: "false",
    ratings: "",
  });
const {id}=useParams()
const navigate=useNavigate()


useEffect(() => {
  if (id) {
    singleupdate(id);
  }
}, [id]);

const singleupdate=async()=>{
const res=await axios.get(`https://zeebackend-production.up.railway.app/movieadmin/${id}`)
console.log(res.data)
setMovie(res.data)


}

const updateMovie = async (data, id) => {
  const res = await axios.patch(`https://zeebackend-production.up.railway.app/movieadmin/${id}`, data);
 
};






  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const addMovie=(data)=>{
    let res=axios.post("https://zeebackend-production.up.railway.app/movieadmin/",data)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!id){
      addMovie(movie)
    }else{
      updateMovie(movie,id)
      console.log("hi")
    }
  
  }

  return (
    <>
      <Box width={"60%"} m="auto" mt="30px">
        <form onSubmit={handleSubmit}>
          <Input mb={4}    value={movie.title}  name="title" onChange={handleChange} type={"text"} placeholder="title" />
          <Input mb={4}    value={movie.overview}  name="overview" onChange={handleChange} type={"text"} placeholder="overview" />
          <Input mb={4}    value={movie.genre_ids}  name="genre_ids"
            onChange={handleChange}
            type={"text"}
            placeholder="genre_ids"
          />
          <Input mb={4}    value={movie.backdrop_path}  name="backdrop_path"
            onChange={handleChange}
            type={"text"}
            placeholder="backdrop_path"
          />
          <Input mb={4}    value={movie.poster_path}  name="poster_path"
            onChange={handleChange}
            type={"text"}
            placeholder="poster_path"
          />
          <Input mb={4}    value={movie.release_date}  name="release_date"
            onChange={handleChange}
            type={"text"}
            placeholder="release_date"
          />
          <Input mb={4}    value={movie.ratings}  name="ratings" onChange={handleChange} type={"text"} placeholder="ratings" />
          <Input type="submit" value={id ?"Update Movie": "Add Movie"} />
        </form>
      </Box>
    </>
  );
};

export default AdminAdd;

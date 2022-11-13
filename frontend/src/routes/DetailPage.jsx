import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const DetailPage=()=>{
    const [data,setData] = useState({});
    const params = useParams();
    const {id} = params;

    useEffect(()=>{
        axios(`http://localhost:8080/popularmovies/${id}`)
        .then((res)=>{
        console.log(res.data)    
        setData(res.data)
       
    })

},[]);
    return(
       <>
       <h1>{data.title}</h1>
       </>
    )
}

export default DetailPage;
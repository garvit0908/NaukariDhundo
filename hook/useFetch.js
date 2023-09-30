import { useState,useEffect } from "react";
import axios from "axios";
import { isLoading } from "expo-font";

import{Rapid_API_key} from '@env'

const rapidAPIkey=Rapid_API_key

const useFetch=(endpoint,query)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'X-RapidAPI-Key': rapidAPIkey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
}

const fetchData=async()=>{
    setIsLoading(true);
    try{
        const response=await axios.request(options);
        setData(response.data);
    }catch(err){
        setError(err);
    }
    setIsLoading(false);
}

useEffect(()=>{
    fetchData();
},[]);
import { useState,useEffect } from "react";

function FetchData()
{
  const[data,setData]=useState([]);

  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = async () => {
  

    const url =
      'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

};

export default FetchData;



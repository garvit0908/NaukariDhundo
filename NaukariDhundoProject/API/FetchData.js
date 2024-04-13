import React from 'react'
import { useState, useEffect } from "react";


const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const url = 'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
    // const baseUrl = 'https://jsearch.p.rapidapi.com/search';
    // const url = `${baseUrl}?query=${encodeURIComponent(query)}`

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5118c154b9mshd414c002c7f5b84p100877jsnf8931c8dfd24',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.data);
      // console.log(data.data[0].job_id)
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return {data,isLoading}


}

export default FetchData

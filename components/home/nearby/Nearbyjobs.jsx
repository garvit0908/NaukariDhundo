import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';

const NearbyJobs = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const url =
      'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '63ae627465mshe17c2c73a60df7dp1e24cbjsn5fb8408a7866',
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
      // console.log("heelo")
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NearbyJobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : data.data ? (
        data.data.map((job) => (
          <NearbyJobCard 
              job={job}
              // key={job.job_id}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
          />
        ))
      ) : (
        <Text>No data exists</Text>
      )}
    </View>
  );
};

export default NearbyJobs;

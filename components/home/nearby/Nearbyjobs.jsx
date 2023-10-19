import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';
import FetchData from '../../../API/FetchData';

const NearbyJobs = () => {
  const router = useRouter();
  const{data,isLoading}=FetchData();

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
              key={job.job_id}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              // key={job.job_id}?
          />
        ))
      ) : (
        <Text>No data exists</Text>
      )}
    </View>
  );
};

export default NearbyJobs;

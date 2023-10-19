import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import styles from './popularjobs.style';
import FetchData from '../../../API/FetchData';


const Popularjobs = () => {
  const router = useRouter();
  const{data,isLoading}=FetchData();

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    console.log(item);
    if (item.job_id) {
      router.push(`/job-details/${item.job_id}`);
      setSelectedJob(item.job_id);
    } else {
      console.warn('job_id is undefined for this item.');
    }
    console.log("dabbba dia")
  }

  // data.data.map((job)=>(
  //   <Text>{job}.job_id</Text>
  // ))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.cardsContainer}>

          <FlatList
            data={data.data} // Use the fetched data here
            renderItem={({ item }) => (
              // {console.log({item})}
              <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
              />
              // <Text>heelloo</Text>
              )}
              horizontal
              contentContainerStyle={{ columnGap: SIZES.medium }}
              // keyExtractor={(item) => item.job_id}
          />
        </View>
      )}
    </View>
  );
};

export default Popularjobs;

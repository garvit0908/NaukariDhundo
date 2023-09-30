import {useState} from 'react'
import { View, Text ,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'

import { icons ,SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'


import styles from './popularjobs.style'

const Popularjobs = () => {
  const router=useRouter()

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <FlatList
            data={[1,2,3,4,5,6,7,8,9,10]}
            renderItem={({item})=>(
              <PopularJobCard
                 item={item}
              />
            )}
            horizontal
            contentContainerStyle={{columnGap:SIZES.medium}}
          />
        </View>
    </View>
  )
}

export default Popularjobs
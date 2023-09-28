import React from 'react'
import { useState } from 'react'
import { View, Text ,Image,TextInput,TouchableOpacity,FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons ,SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter()

  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.username}>Helllo Garvit</Text>
      <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
    </View>

    <View style={styles.searchContainer}>
      <View style={styles.wrapper}>
        <TextInput style={styles.searchInput} />
      </View>

    </View>


    </View>
    
  )
}

export default Welcome
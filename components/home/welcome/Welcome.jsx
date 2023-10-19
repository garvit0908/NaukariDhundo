import React from 'react'
import { useState } from 'react'
import { View, Text ,Image,TextInput,TouchableOpacity,FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons ,SIZES } from '../../../constants'

const jobTypes=["Full-time" ,"Contractor","Part-time","Internship","Temporary"]

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router = useRouter()
  const [activejobType,setActivejobType]=useState(jobTypes[0])

  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.userName}>Helllo Garvit</Text>
      <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
    </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput}
           value={searchTerm}
           onChange={(text) => {setSearchTerm(text)}}
          //  placeholder="kya dhund rha hai bhai"
        />
      </View>
    <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image source={icons.search} style={styles.searchBtnImage} />
    </TouchableOpacity>

    </View>

    <View style={styles.tabsContainer}>
      <FlatList
         data={jobTypes}
         renderItem={({item})=>(
            <TouchableOpacity style={styles.tab(activejobType,item)}
              onPress={()=>{
                setActivejobType(item)
                router.push(`/search/${item}`)
              }}>
              <Text style={styles.tab(activejobType,item)}>{item}</Text>
            </TouchableOpacity>
            
         )}
         horizontal
         contentContainerStyle={{columnGap:SIZES.small}}
      
      />


    </View>


    </View>
    
  )
}

export default Welcome
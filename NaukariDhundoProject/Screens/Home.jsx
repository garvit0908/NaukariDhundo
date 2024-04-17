import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const Home = () => {
    const [data, setData] = useState('')
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Navbar/>
      <View style={styles.input}>
      <TextInput
      onChangeText={(text) => setData(text)}
    value={data}
    placeholder='Search your job'
      />
      </View>
      <View>
        
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    input:{
        width: '90%',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    }
})

export default Home
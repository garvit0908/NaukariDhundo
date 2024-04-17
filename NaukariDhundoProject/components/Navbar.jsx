import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
    <View style={styles.leftContainer}>
      <Image
        source={require('../assets/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.text}>Username</Text>
      <Image
        source={require('../assets/icon.png')}
        style={styles.profileImage}
        resizeMode="cover"
      />
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        height: 60,
        width: '100%',
        paddingHorizontal: 15,
        
        //how to fix it to the top
      },
      leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
      },
      rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      logo: {
        width: 100,
        height: '100%',
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 10,
      },
      text: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
      },
})

export default Navbar
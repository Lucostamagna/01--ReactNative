import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const BoxObjectModel = () => {
  return (
   
   <View style={styles.container}>
     <Text style={styles.title}> Box Object Model</Text>
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        // backgroundColor:'black'
    },
    title:{
        padding:90,
        fontSize:30,
        borderWidth:10,
        color:'red'
}
})






export default BoxObjectModel;

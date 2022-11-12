import React from 'react'
import { StyleSheet, View } from 'react-native';

const PositionScreen = () => {
  return (
   <View style={styles.container}>
   <View style={styles.cajaMorada}/>
   <View style={styles.cajaNaranja}/>
   </View>
   
  )
}

export default PositionScreen

const styles=StyleSheet.create({
    //primero el padre y despues hijos.
    //como funciona el top en la position:relative
    container:{
        flex:1,
        backgroundColor:'#28C4D9'
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor:'white',
        top:50
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth:10,
        borderColor:'white',
        bottom:-500
    }
})

//position absolute - relative

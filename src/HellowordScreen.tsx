import React from 'react'
import { Text, View } from 'react-native'


const HellowordScreen = () => {
  return (
    
<View style={{
    flex:1, //el flex es especial para react native
    // backgroundColor:'red', //cuando voy a escribir en js no puedo poner guiones
    justifyContent:'center'
  }}>
    <Text style={{
      fontSize:40,
      textAlign:'center'

    }}> 
      LUCIA
      </Text>
  </View>
  )
}

export default HellowordScreen





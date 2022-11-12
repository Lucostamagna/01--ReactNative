import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'

// const {width, height}= Dimensions.get('window'); //cuando doy vuelta la pantalla continuan las mismas dimensiones. y en realidad no deberia ser asi.

const DimensionesScreen = () => {
  const {width, height}=useWindowDimensions();
  return (
    <View>
    <View style={styles.container}>
        <View style={{
          ...styles.cajaMorada,
          width: width * 2
          
          }}/>

        <View style={styles.cajaNaranja}/>
        
    </View>
    <Text>W:{width}, H:{height}</Text>
    </View>
  )
}


//tener en cuenta las dimensiones del padre y del hijo
const styles=StyleSheet.create({
    container:{
     width:'100%',
     height:600,
     backgroundColor:'red'
    },
    cajaMorada:{
        backgroundColor:'#5856D6',
        width:'50%',
        height:'50%'
    },
    cajaNaranja:{
        backgroundColor:'#F0A23B'
    }
})

export default DimensionesScreen
//FUNDAMENTO DE DISEÑOS DE REACT NATIVE
//POSITION= ABSOLUTE (puedo cambiarlo)- RELATIVE(siempre es relativa al padre)
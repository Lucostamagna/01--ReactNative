import React, {useState} from 'react'
import { Text, View,  TouchableOpacity, StyleSheet } from 'react-native';
import Fab from './Components/Fab';

const CounterScreen = () => {

    const[counter, setCounter]=useState(10)

  return (
    <View style={styles.conteiner}>
        <Text style={styles.titulo}> 
        Contador: {counter} 
        </Text>


        <Fab
        title="+1"
        position="br"
        onPress={()=>setCounter(counter + 1)}
        />

        <Fab
        title="-1"
        position="bl"
        onPress={()=>setCounter(counter - 1)}
        />


{/* <Button
      title="click"
      onPress={()=> setCounter(counter + 1)}
      /> */}
     
      {/* <TouchableOpacity
      style={styles.fabloc}
      onPress={()=>setCounter(counter -1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> -1 </Text>
        </View>
        
      </TouchableOpacity> */}




    </View>
    
  )
}

const styles=StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor:'blue',
    justifyContent:'center'
  },
  titulo:{
    textAlign:'center',
    fontSize:40,
    color:'black',
    top:-15
  },
 
  // boton:{
  //   backgroundColor:'red',
  //   borderRadius:100,
  // }
})

export default CounterScreen

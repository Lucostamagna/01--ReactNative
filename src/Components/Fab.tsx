import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';


interface Props{
  title:string;
  position:'br' | 'bl';
  onPress:()=>void;
  
}



const Fab = ({title, onPress, position="br"}: Props) => {


  const ios= () =>{
    return (
      <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.fabLocation,
        (position==='br')? styles.left : styles.right
        
        ]} >
           <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>

      </TouchableOpacity>
    )

  }
  const android = ( ) =>{
    return (
      <View
      style={[styles.fabLocation,
        (position==='br')? styles.left : styles.right
        
        ]}  >
      <TouchableNativeFeedback
      style={[styles.fabLocation,
      (position==='br')? styles.left : styles.right
      
      ]}
      onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title} </Text>
        </View>
        
      </TouchableNativeFeedback>
      </View>
    )
  }
  return (Platform.OS) ==='ios' ? ios() :android();
 
}

//los estilos pueden ser diferentes para ios y android

const styles=StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom:25,
        right:25
       },
       right:{
        right: 25
      },
      left:{
         left:25,
       },
       fab:{
         backgroundColor:'#5856D6',
         width:60,
         height:60,
         borderRadius:100,
        justifyContent:'center',
        //poner sombra  https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
       },
       fabText:{
         color:'white',
         fontSize:25,
         fontWeight:'bold',
         alignSelf:'center'
     
       },

})
export default Fab; 

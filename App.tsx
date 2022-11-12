
import React from 'react'
import { SafeAreaView, SafeAreaViewBase } from 'react-native';
import BoxObjectModel from './src/Components/BoxObjectModel';
import DimensionesScreen from './src/Components/DimensionesScreen';
import PositionScreen from './src/Components/PositionScreen';
import CounterScreen from './src/CounterScreen';

import HellowordScreen from './src/HellowordScreen';


const App=()=> {
  return(
    //Algunos celulares tienen un bloque negro arriba, para asegurarme de poder verlo tengo que utilizar esta propiedad
    <SafeAreaView style={{flex: 1}}> 
  {/* // <HellowordScreen/>
  // <CounterScreen/> */}
  {/* <BoxObjectModel/> */}
  {/* <DimensionesScreen/> */}
  <PositionScreen/>
  </SafeAreaView> 
  )
}

export default App;
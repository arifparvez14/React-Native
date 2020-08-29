import React, { useState, useEffect } from 'react';
import {Text, View, Alert, Button } from 'react-native';
// import Button from './src/Components/Button'

const App = () => {

  const onTap = () => {
    console.log("Tap")
  }

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Button title = {"Click Me"} backgroundColor = {"red"} width = {60} height = {20} onPress = {onTap}/>
      <Counter/>
    </View>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count % 2 == 0){
      alert("Number is even");
    }
  },[count]);

  return (
  <View>
      <Button onPress = {() => { setCount(count + 1); console.log("Increment Press");}} title = "Increment" />
      <View style={{marginTop: 20}}></View>
      <Button onPress = {() => { setCount(count - 1); console.log("Decrement Press");}} title = "Decrement" />
      <Text>{count}</Text>
  </View>
  );
};

export default App;




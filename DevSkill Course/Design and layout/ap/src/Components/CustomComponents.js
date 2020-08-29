import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomComponents = (props) => {
    const {name, age} = props
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
    );
  };

  export default CustomComponents;
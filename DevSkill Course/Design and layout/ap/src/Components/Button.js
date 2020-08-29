import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = (props) => {
    const {title, backgroundColor, width, height, onTap} = props
    return (
      <View style = {{backgroundColor: backgroundColor, width: width, height: height}}>
          <Text style = {{justifyContent: "center", alignItems: "center"}}>{title}</Text>
      </View>
    );
  };

  export default Button;
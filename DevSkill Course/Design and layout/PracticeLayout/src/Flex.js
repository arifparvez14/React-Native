import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

export default function Flex (){
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column-reverse",
    },

    box: {
        height: 100,
        width: 100,
    },

    box1:{
        backgroundColor: "orange",
    },

    box2: {
        backgroundColor: "yellow",
    },

    box3: {
        backgroundColor: "blue",
    },
    
  });

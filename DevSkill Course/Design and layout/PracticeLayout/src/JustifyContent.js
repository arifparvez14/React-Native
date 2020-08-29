import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

export default function JustifyContent() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", //row, column, row-reverse, column-reverse
    justifyContent: "space-between", // flex-start, center, flex-end, space-between, space-around, space-evenly
    alignItems: "center", //flex-start, center, flex-end
  },

  box: {
    height: 100,
    width: 100,
  },

  box1: {
    backgroundColor: "orange",
  },

  box2: {
    backgroundColor: "yellow",
  },

  box3: {
    backgroundColor: "blue",
  },
});

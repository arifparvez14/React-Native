import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card({ children, customStyle }) {
  return <View style={[styles.wrapper, customStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "white",
  },
});

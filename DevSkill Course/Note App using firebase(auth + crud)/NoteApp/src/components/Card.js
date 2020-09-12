import React from "react";
import { View, StyleSheet } from "react-native";
export default function Card({ children, customStyle }) {
  return <View style={[styles.wrapper, customStyle]}>{children}</View>;
}
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "orange",

    //androide
    elevation: 1,
    //iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.02,
    shadowRadius: 4,
  },
});

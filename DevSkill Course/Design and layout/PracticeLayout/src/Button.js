import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Button({ icon, title, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <Image source={icon} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 25,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    padding: 8,
  },
});

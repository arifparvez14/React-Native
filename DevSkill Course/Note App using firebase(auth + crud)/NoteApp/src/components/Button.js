import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Button({ icon, title, backgroundColor, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <Image source={icon} />
      <Text onPress={onPress} style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingHorizontal: 25,
    marginTop: 30,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});

import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function Home() {
  return (
    <View>
      <Image
        source={require("../../assets/Background.png")}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
      ></Image>
    </View>
  );
}

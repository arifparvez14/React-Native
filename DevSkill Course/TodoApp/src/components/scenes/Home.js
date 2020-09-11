import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Button from "./Button";
import { firebase } from "../firebase/config";

export default function Home() {
  const data = [];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={{ fontWeight: "bold" }}>My TODOs</Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/plus.png")}
          />
        </View>
      </View>

      <Button
        title="LOGOUT"
        backgroundColor="yellow"
        onPress={() => {
          firebase.auth().signOut();
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 25,
  },

  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: 60, width: 60, marginTop: 20, marginLeft: 5 }}
          source={require("./assets/logo.png")}
        />
      </View>
      <View style={styles.body}>
        <Image style={styles.boxImag} source={require("./assets/box.png")} />

        <Text style={styles.mainText}>
          Non-Contact
          {"\n"}
          Deliveries
        </Text>

        <Text style={styles.detailText}>
          We placing an order, select the option
          {"\n"}
          Contactless delivery and the courier will leave
          {"\n"}
          your order at the door.
        </Text>

        <TouchableOpacity style={styles.customBtnBG} onPress={() => {}}>
          <Text style={styles.customBtnText}>ORDER NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dismissBtnBG} onPress={() => {}}>
          <Text style={styles.dismissBtnText}>DISMISS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A259FF",
  },
  body: {
    flex: 2,
    backgroundColor: "#F6F5F5",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  boxImag: {
    width: 90,
    height: 90,
    marginTop: 20,
  },

  mainText: {
    color: "#2D0C57",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 27,
    lineHeight: 35,
    marginTop: 5,
    textAlign: "center",
  },

  detailText: {
    textAlign: "center",
    marginTop: 10,
    color: "#9586A8",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 18,
  },
  customBtnText: {
    fontSize: 12,
    color: "white",
  },

  customBtnBG: {
    backgroundColor: "#0BCE83",
    paddingHorizontal: "35%",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  dismissBtnText: {
    fontSize: 12,
    color: "#9586A8",
  },

  dismissBtnBG: {
    backgroundColor: "white",
    paddingHorizontal: "37%",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

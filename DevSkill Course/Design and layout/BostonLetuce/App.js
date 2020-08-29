import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import Home from "./src/component/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "green" }}></View>

      <View style={styles.bottomView}>
        <Text style={styles.titleText}>Boston Letuce</Text>

        <View style={styles.priceTextContainer}>
          <Text style={styles.titleText}>1.10</Text>
          <Text style={styles.priceText}>€ / piece</Text>
        </View>
        <Text style={styles.gramPriceText}>~ 150 gr/ piece</Text>
        <Text style={styles.countryName}>Spain</Text>
        <Text style={styles.detailsText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </Text>

        <View style={styles.cartContainer}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "dcdcdc",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Image source={require("./assets/love.png")} />
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0BCE83",
              paddingHorizontal: 35,
              paddingVertical: 10,
              borderRadius: 5,
              marginLeft: 10,
            }}
          >
            <View style={{ flexDirection: "row", paddingHorizontal: "20%" }}>
              <Image source={require("./assets/cart.png")} />
              <Text style={styles.addToCartText}>ADD TO CART</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomView: {
    flex: 2,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 10,
  },

  titleText: {
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 41,
    color: "#2D0C57",
  },

  priceText: {
    color: "#9586A8",
    fontSize: 20,
    lineHeight: 43,
    fontWeight: "normal",
    marginLeft: 10,
  },

  gramPriceText: {
    color: "#06BE77",
    fontSize: 17,
    fontWeight: "normal",
  },

  countryName: {
    color: "#2D0C57",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },

  detailsText: {
    marginTop: 10,
    color: "#9586A8",
    fontSize: 17,
  },

  cartContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  addToCartText: {
    color: "white",
    fontSize: 15,
    fontWeight: "normal",
    marginLeft: 10,
  },

  priceTextContainer: {
    flexDirection: "row",
  },
});

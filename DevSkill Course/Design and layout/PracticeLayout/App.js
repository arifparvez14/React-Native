import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Flex from "./src/Flex";
import JustifyContent from "./src/JustifyContent";
import Button from "./src/Button";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ marginTop: 40, marginHorizontal: 24 }}>
            {/* Menu and bell Image View */}

            <View style={styles.menu}>
              <Image source={require("./assets/menu.png")}></Image>
              <Image source={require("./assets/bell.png")}></Image>
            </View>

            {/* Title Container View */}
            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.title}>Covid 19</Text>
              </View>

              <TouchableOpacity style={styles.countryButton}>
                <View style={styles.countryButtonWrapper}>
                  <Image
                    style={{ marginRight: 10 }}
                    source={require("./assets/usa_flag.png")}
                  ></Image>
                  <Text style={styles.USA}>USA</Text>
                  <Image source={require("./assets/dropdown.png")}></Image>
                </View>
              </TouchableOpacity>
            </View>

            {/* Bottom View */}
            <View style={{ marginTop: 16 }}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                Are you feeling sick?
              </Text>

              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  lineHeight: 22,
                  marginTop: 12,
                }}
              >
                If you feel sick with any of covid-19 symptoms please call or
                SMS us immediately for help.
              </Text>

              <View style={styles.childButtonContainer}>
                <Button
                  backgroundColor="#FF4D58"
                  icon={require("./assets/phone.png")}
                  title="Call Now"
                ></Button>
                <Button
                  icon={require("./assets/text.png")}
                  title="Send SMS"
                  backgroundColor="#4D79FF"
                ></Button>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <Image source={require("./assets/prevention.png")} />
        </View>

        <View style={{ alignItems: "center", marginTop: 10, marginBottom: 20 }}>
          <Image source={require("./assets/test.png")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "#473F97",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  bodyContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 26,
    color: "white",
  },

  countryButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
  },

  countryButton: {
    height: 40,
    width: 116,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
  },

  USA: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 15,
    marginRight: 10,
  },

  childButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 16,
    marginBottom: 30,
  },
});

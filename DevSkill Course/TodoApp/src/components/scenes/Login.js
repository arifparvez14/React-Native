import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import Button from "../scenes/Button";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { firebase } from "../firebase/config";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (!email || !password) {
      return Alert.alert("Error", "You need to fill up all the input", [
        { text: "OK", onPress: () => {} },
      ]);
    }

    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("res", res);
        setLoading(false);
      })
      .catch((error) => {
        console.log("err", error);
        alert(error);
        setLoading(false);
      });
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{ alignSelf: "center", marginTop: 42, alignItems: "center" }}
        >
          <Image source={require("../../../assets/landing-image.png")} />
          <Text style={{ fontWeight: "bold" }}>Never forget your TODOs</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="Email Address"
            style={styles.input}
            autoCapitalize="none"
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />

          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button onPress={login} title="LOGIN" backgroundColor="yellow" />
          )}
        </View>

        <View
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={{ padding: 20 }}
          >
            <Text style={{ fontSize: 16 }}>
              Don't have an account?
              <Text
                style={{
                  color: "#18B18D",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 25,
    marginTop: 40,
  },

  input: {
    height: 40,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginBottom: 30,
  },
});

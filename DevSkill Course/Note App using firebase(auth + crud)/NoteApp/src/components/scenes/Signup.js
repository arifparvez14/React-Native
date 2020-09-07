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
import Button from "../Button";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { firebase } from "../firebase/config";

export default function Signup({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = () => {
    if (!name || !email || !password || !confirmPassword) {
      return Alert.alert("Error", "You need to fill up all the input", [
        { text: "OK", onPress: () => {} },
      ]);
    }

    if (password !== confirmPassword) {
      return Alert.alert(
        "Error",
        "Password and confirm password should match",
        [{ text: "OK", onPress: () => {} }]
      );
    }

    setLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        setLoading(false);

        //first step -> get user id
        const uid = response.user.uid;

        //second step -> create user profile data
        const userProfileData = {
          id: uid,
          email: email,
          name: name,
        };

        //third step -> create user collection
        const userRef = firebase.firestore().collection("users");

        //fourth step -> save it to cloud
        userRef.doc(uid).set(userProfileData);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
        alert(error);
      });
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ alignSelf: "center", marginTop: 120 }}>
          <Image source={require("../../../assets/favicon.png")} />
        </View>

        <View style={styles.form}>
          <TextInput
            onChangeText={(text) => setName(text)}
            placeholder="Name"
            style={styles.input}
            autoCapitalize="words"
          />

          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            style={styles.input}
            autoCapitalize="none"
          />

          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />

          <TextInput
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder="ConfirmPassword"
            style={styles.input}
            secureTextEntry={true}
          />

          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button onPress={signup} title="SIGN UP" backgroundColor="blue" />
          )}
        </View>

        <View
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ padding: 20 }}
          >
            <Text style={{ fontSize: 16 }}>
              Already have an account?
              <Text style={{ color: "blue", fontWeight: "bold" }}>Sign In</Text>
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
    marginTop: 60,
  },

  input: {
    height: 40,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginBottom: 30,
  },
});

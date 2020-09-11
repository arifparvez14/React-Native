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

export default function Signup({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = () => {
    if (!email || !password) {
      return Alert.alert("Error", "You need to fill up all the input", [
        { text: "OK", onPress: () => {} },
      ]);
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
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.form}>
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

          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button onPress={signup} title="SIGN UP" backgroundColor="yellow" />
          )}
        </View>

        <View
          style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
        >
          <Text style={{ fontSize: 12, marginTop: 30 }}>
            By continue you accept the{" "}
            <Text style={{ color: "#18B18D", fontWeight: "bold" }}>
              Term of Uses
            </Text>{" "}
            and
            <Text style={{ color: "#18B18D", fontWeight: "bold" }}>
              {" "}
              Privacy Policy
            </Text>
          </Text>
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

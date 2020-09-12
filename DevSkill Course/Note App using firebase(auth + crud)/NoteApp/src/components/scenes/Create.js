import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Button from "../Button";
import { firebase } from "../firebase/config";
import { showMessage } from "react-native-flash-message";

export default function Create({ navigation, route }) {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const userId = route.params.userId;
  const noteRef = firebase.firestore().collection("notes");

  const onSave = () => {
    if (note && note.length > 0) {
      //1 - make loading active
      setLoading(true);

      //2 - create a timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      //3 - create the data object
      const data = {
        description: note,
        authorId: userId,
        createdAt: timestamp,
      };

      //4 - save to firestore
      return noteRef
        .add(data)
        .then((doc) => {
          showMessage({
            message: "Successfully created",
            type: "success",
          });
          setNote(null);
          setLoading(false);
          navigation.goBack();
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }

    return alert("Note is empty");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Create Note</Text>

        <TextInput
          onChangeText={(text) => setNote(text)}
          placeholder="Write down your notes"
          style={styles.input}
          value={note}
        />
        {loading ? (
          <ActivityIndicator style={{ marginTop: 25 }} />
        ) : (
          <Button title="SAVE" backgroundColor="blue" onPress={onSave}></Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 25,
    flex: 1,
  },

  titleWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 60,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginTop: 40,
  },
});

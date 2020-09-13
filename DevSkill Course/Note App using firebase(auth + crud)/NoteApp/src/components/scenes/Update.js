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

export default function Update({ navigation, route }) {
  const userId = route.params.userId;
  const item = route.params.item;
  const noteRef = firebase.firestore().collection("notes");

  const [note, setNote] = useState(item.description);
  const [loading, setLoading] = useState(false);

  const onUpdate = () => {
    if (note && note.length > 0) {
      //1 - make loading active
      setLoading(true);

      return noteRef
        .doc(item.id)
        .update({ description: note })
        .then(() => {
          showMessage({
            message: "Successfully updated",
            type: "success",
          });
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
        <Text style={styles.title}>Edit Note</Text>

        <TextInput
          onChangeText={(text) => setNote(text)}
          placeholder="Write down your notes"
          style={styles.input}
          value={note}
        />
        {loading ? (
          <ActivityIndicator style={{ marginTop: 25 }} />
        ) : (
          <Button
            title="UPDATE"
            backgroundColor="blue"
            onPress={onUpdate}
          ></Button>
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

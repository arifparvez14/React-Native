import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Button from "../Button";
import { firebase } from "../firebase/config";
import { AntDesign } from "@expo/vector-icons";
import Card from "../Card";
import { Feather } from "@expo/vector-icons";

export default function Home({ navigation, extraData }) {
  const [notes, setNotes] = useState(null);
  const userId = extraData.uid;
  const noteRef = firebase.firestore().collection("notes");

  useEffect(() => {
    //on snapshot is our subscription
    const subscriber = noteRef
      .where("authorId", "==", userId)
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapShot) => {
        const newNotes = []; //create this array to ser to our main notes
        querySnapShot.forEach((doc) => {
          //creating note object
          const note = doc.data();
          note.id = doc.id;
          newNotes.push(note);
        });

        //setting it here
        setNotes(newNotes);
      });

    return subscriber;
  }, []);

  const onDeleteNote = (id) => {
    showMessage({
      message: "Successfully Deleted",
      type: "success",
    });
    return noteRef.doc(id).delete();
  };

  const renderNote = ({ item, index }) => {
    return (
      <Card customStyle={{ padding: 20, marginBottom: 15 }}>
        <View style={[styles.titleWrapper, { flex: 1 }]}>
          <View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
            <Text>{`Note #${index + 1} - `}</Text>
            <Text>{item.description}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Update", { item })}
            >
              <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onDeleteNote(item.id)}>
              <AntDesign
                style={{ marginLeft: 10 }}
                name="delete"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    );
  };

  if (!notes || (notes && notes.length === 0)) {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>My Notes</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Create", { userId })}
            >
              <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View>
            <Image
              style={{ height: 250, width: "100%", marginTop: 50 }}
              resizeMode="contain"
              source={require("../../../assets/empty_task.png")}
            />
            <Text style={{ textAlign: "center", paddingTop: 20, fontSize: 18 }}>
              No notes, Please add new notes
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Button
              title="LOGOUT"
              backgroundColor="blue"
              onPress={() => {
                firebase.auth().signOut();
              }}
            ></Button>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>My Notes</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Create", { userId })}
          >
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={notes}
          renderItem={renderNote}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingVertical: 20 }}
        />

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            title="LOGOUT"
            backgroundColor="blue"
            onPress={() => {
              firebase.auth().signOut();
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 25,
    marginTop: 40,
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
});

import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { useState } from "react";

function Example(props) {
  const [name, setName] = useState(() => "Henrique");

  return (
    <View>
      <View
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={styles.view1}
      />
      <Text>Hello! I can run in React and React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({ view1: { color: "red" } });

export default Example;

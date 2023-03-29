import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function Button(props) {
  return (
    <View onClick={(e) => props.onClick(e)}>
      <Text>Click here</Text>
    </View>
  );
}

export default Button;

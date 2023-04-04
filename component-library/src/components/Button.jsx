import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      asdasd
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 28,
    height: 28,
  },
});

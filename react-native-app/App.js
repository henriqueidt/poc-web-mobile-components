import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ReactNativeButton } from "my-component-library";

export default function App() {
  const onClick = (e) => {
    console.log(e);
    console.log("button click");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ReactNativeButton onClick={onClick} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

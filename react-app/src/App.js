import "./App.css";

import { View } from "react-native-web";
import { Button } from "my-component-library";

function App() {
  return (
    <div className="App">
      <View>
        <Button title="Press me!" onPress={() => console.log("Pressed!")} />
      </View>
    </div>
  );
}

export default App;

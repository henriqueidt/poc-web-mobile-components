import "./App.css";

import { View } from "react-native-web";
import { Button } from "my-component-library";

function App() {
  const onClick = (e) => {
    console.log(e);
    console.log("button click");
  };

  return (
    <div className="App">
      <View>
        <Button onClick={onClick} />
      </View>
    </div>
  );
}

export default App;

import { StyleSheet, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {

  const [userNumber, setUserNumber] = useState('');

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }


  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  }



  return (
    <View style={styles.rootContainer}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover"
      style={styles.rootContainer} imageStyle={styles.backgroundImage} >
        {screen}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.75
  }
});

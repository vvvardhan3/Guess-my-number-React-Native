import { StyleSheet, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover"
      style={styles.rootContainer} imageStyle={styles.backgroundImage} >
        <StartGameScreen />
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

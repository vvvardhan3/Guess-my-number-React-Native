import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed!");
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable style={styles.innerContainer} onPress={pressHandler} android_ripple={{ color: "#640233" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#72063c",

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});

export default PrimaryButton;

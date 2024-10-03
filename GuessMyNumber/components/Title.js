import { StyleSheet, Text } from "react-native";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 60,
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      textAlign: "center",
      borderWidth: 2,
      borderColor: 'black',
      padding: 12
    },
  });
  

export default Title;
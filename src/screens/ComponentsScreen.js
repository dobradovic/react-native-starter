import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = <Text style={styles.nameStyle}>Dejan</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting starterd!</Text>
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  nameStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;

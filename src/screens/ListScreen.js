import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 20 },
    { name: "Friend #3", age: 20 },
    { name: "Friend #4", age: 20 },
    { name: "Friend #5", age: 20 },
    { name: "Friend #6", age: 20 },
    { name: "Friend #7", age: 20 },
    { name: "Friend #8", age: 20 },
    { name: "Friend #9", age: 222 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {},
});

export default ListScreen;

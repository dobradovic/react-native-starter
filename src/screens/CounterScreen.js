import React, { useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return state.count <= 0
        ? state
        : { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increse"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Decrese"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />

      <Text>Current Count:{state.count}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});

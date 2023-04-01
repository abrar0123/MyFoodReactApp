import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import AppText from "../AppText/AppText";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, props.style]}
      onPress={props.onPress}
    >
      <AppText> {props.children}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    borderRadius: 2,
  },
});

export default Button;

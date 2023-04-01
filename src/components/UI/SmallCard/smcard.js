import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const Smcard = (props) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
  },
});

export default Smcard;

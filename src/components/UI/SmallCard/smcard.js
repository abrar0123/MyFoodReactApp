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

    //  add a shadow property

    backgroundColor: colors.white,
    shadowColor: colors.black,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
  },
});

export default Smcard;

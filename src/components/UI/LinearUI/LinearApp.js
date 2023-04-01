import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const LinearApp = (props) => {
  return (
    <View
      style={props.style}
      // colors={[colors.jaman, colors.mxprimary, colors.jaman]}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LinearApp;

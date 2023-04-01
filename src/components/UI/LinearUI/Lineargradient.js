import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const Lineargradient = (props) => {
  return (
    <View
      style={props.style}
      // colors={[colors.jaman, colors.silk, colors.jamanlight]}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Lineargradient;

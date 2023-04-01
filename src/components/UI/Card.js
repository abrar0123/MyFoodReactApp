import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Card = (props) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({});

export default Card;

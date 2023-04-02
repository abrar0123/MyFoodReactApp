import React from "react";
import AppText from "../../components/UI/AppText";
import colors from "../../constants/colors";
import { StyleSheet, View } from "react-native";

export default function HandleProfile() {
  return (
    <View style={styles.container}>
      <AppText>Welcome here</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

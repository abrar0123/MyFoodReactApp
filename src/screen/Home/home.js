import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "../../components/UI/AppText";

const Home = () => {
  return (
    <View style={styles.container}>
      <AppText>welcome to Home </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 8,
  },
});

export default Home;

import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import AppText from "../../components/UI/AppText";

const Track = () => {
  return (
    // <SafeAreaView style={styles.SafeArea}>
    <View styles={styles.SafeArea}>
      <AppText>Soon , we added functionality of track ,thanks</AppText>
    </View>

    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    paddingTop: (Platform.OS = "android" ? StatusBar.currentHeight : 0),
  },
});

export default Track;

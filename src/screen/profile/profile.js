import React from "react";
import { View, StyleSheet, Text, Platform, StatusBar } from "react-native";
import colors from "../../constants/colors";
import { TextInput } from "react-native";
import AppText from "../../components/UI/AppText";

const Profile = () => {
  return (
    <View style={styles.SafeArea}>
      <Text>Welcome to profile</Text>
      <View style={{ width: 300, height: 50 }}>
        <TextInput style={styles.textinput} />
      </View>
      <AppText>okk good</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    paddingTop: (Platform.OS = "android" ? StatusBar.currentHeight : 10),
    flex: 1,
  },
  textinput: {
    width: "100%",
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.black,
  },
});

export default Profile;

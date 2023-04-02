import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../../constants/colors";
import Userprofile from "./userprofile";
import HandleProfile from "./HandleProfile";

const Tab = createMaterialTopTabNavigator();

export default function MyNav() {
  const Screen1 = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>First Screen</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBarStyle,
        labelStyle: styles.labelStyle,
        indicatorStyle: styles.indicatorStyle,
      }}
    >
      <Tab.Screen
        name="Screen 1"
        component={Screen1}
        options={{
          tabBarLabel: "Screen 1",
        }}
      />
      <Tab.Screen
        name="Userprofile"
        component={Userprofile}
        options={{
          tabBarLabel: "Userprofile",
        }}
      />
      <Tab.Screen
        name="Profile1"
        component={HandleProfile}
        options={{
          tabBarLabel: "Profile1",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.white,
    paddingTop: 50,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  indicatorStyle: {
    backgroundColor: colors.secondary,
    height: 4,
  },
  screenStyle: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

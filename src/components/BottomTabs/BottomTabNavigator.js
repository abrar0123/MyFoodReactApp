import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyFood from "../../screen/Home/MyFood/MyFood";
import Cartscreen from "../../screen/Cart/cartscreen";
import Home from "../../screen/Home/home";
import colors from "../../constants/colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: colors.white,
        },
        // tabBarActiveBackgroundColor: Color.grey,
        tabBarIcon: ({ focused, size, color }) => {
          return route.name === "MyFood" ? (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={focused ? 37 : 33}
              color={color}
            />
          ) : route.name === "track" ? (
            <TouchableOpacity
              style={{
                backgroundColor: focused ? colors.red : colors.l2black,
                padding: 10,
                borderRadius: 35,
              }}
            >
              <AntDesign
                name="Safety"
                size={37}
                color={focused ? colors.red : colors.white}
              />
            </TouchableOpacity>
          ) : route.name === "Cart" ? (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={focused ? 37 : 33}
              color={color}
            />
          ) : (
            route.name === "Profile" && (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={focused ? 37 : 33}
                color={color}
              />
            )
          );
        },
      })}
      // set entire tab setting
      tabBarOptions={{
        activeTintColor: colors.primaryorange,
        inactiveTintColor: colors.black,
        showLabel: false,

        style: {
          backgroundColor: colors.grey,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 2,
        },
      }}
    >
      <Tab.Screen name="MyFood" component={MyFood} />
      <Tab.Screen name="Cart" component={Cartscreen} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNavigator;
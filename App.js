import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import mystore from "./src/ReduxSlice/cartSlice";
import { mypersistor } from "./src/ReduxSlice/cartSlice";
import { PersistGate } from "redux-persist/integration/react";

import MyFood from "./src/screen/Home/MyFood/MyFood";
import Signup from "./src/screen/Signup/Signup";
import { Provider } from "react-redux";
import Cartscreen from "./src/screen/Cart/cartscreen";
import Home from "./src/screen/Home/home";
import BottomTabNavigator from "./src/components/BottomTabs/BottomTabNavigator";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      {/* <Signup /> */}
      <Provider store={mystore}>
        <PersistGate persistor={mypersistor}>
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

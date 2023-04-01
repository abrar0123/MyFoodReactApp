import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import mystore from "./src/ReduxSlice/cartSlice";
import { mypersistor } from "./src/ReduxSlice/cartSlice";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import Signup from "./src/screen/Signup/Signup";
import { Provider } from "react-redux";

import BottomTabNavigator from "./src/components/BottomTabs/BottomTabNavigator";

export default function App() {
  const App2 = () => {
    const authToken = useSelector((e) => e.auth.authToken);

    console.log("authToken____\n\n", authToken);
    return (
      <>
        {!authToken ? (
          <Signup />
        ) : (
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
        )}
      </>
    );
  };
  return (
    <>
      <Provider store={mystore}>
        <PersistGate persistor={mypersistor}>
          <App2 />
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

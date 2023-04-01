import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { mypersistor } from "./src/ReduxSlice/Store";
import mystore from "./src/ReduxSlice/Store";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import Signup from "./src/screen/Signup/Signup";
import { Provider } from "react-redux";
import { useEffect } from "react";
import BottomTabNavigator from "./src/components/BottomTabs/BottomTabNavigator";

export default function App() {
  const App2 = () => {
    const authToken = useSelector((e) => e.auth.authToken);
    const userFoodCart = useSelector((state) => state.foodcart.userFoodCart);

    const userEmail = useSelector((state) => state.auth.userEmail);

    console.log("email", userEmail);
    useEffect(() => {
      let total = 0;
      for (let u of userFoodCart) {
        total += u.quant * u.price;
      }
      const FireInsertUserCart = async () => {
        await fetch(
          `https://foodparadisereactapp-default-rtdb.firebaseio.com/UserFoodCart.json`,
          {
            method: "PUT",
            body: JSON.stringify({
              CartItems: userFoodCart,
              TotalBill: total,
              User: userEmail,
            }),
          }
        );
      };
      FireInsertUserCart();
    }, [userFoodCart]);
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

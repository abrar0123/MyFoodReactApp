import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/UI/AppText";
import { useSelector } from "react-redux";
import colors from "../../constants/colors";
import CartItems from "./cartItems";
import Button from "../../components/UI/Button/Button";
import { callFirebaseFn } from "../../ReduxSlice/myActions";

const Cartscreen = () => {
  const cartIndex = useSelector((state) => state.foodcart.cartIndex);
  const userFoodCart = useSelector((state) => state.foodcart.userFoodCart);

  let total = 0;

  for (let items in userFoodCart) {
    total += userFoodCart[items].quant * userFoodCart[items].price;
  }

  const orderPlaceHandler = () => {
    console.log("orderPlaceHandler__successfully");
    callFirebaseFn();
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: colors.blue, borderRadius: 8 }}>
        <AppText style={styles.mainTextstyle}>My Food Cart</AppText>
      </View>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <CartItems userFoodCart={userFoodCart} />
      </View>
      <Button
        style={{ backgroundColor: colors.blue }}
        onPress={orderPlaceHandler}
      >
        <AppText style={styles.mainTextstyle}>
          Place Order {`( Total : $${total} )`}
        </AppText>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTextstyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 25,
    color: colors.silk,
    textAlign: "center",
  },
  container: {
    paddingTop: 30,
    marginHorizontal: 3,
    flex: 1,
  },
});

export default Cartscreen;

import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import AppText from "../../components/UI/AppText";
import { useSelector } from "react-redux";
import Lineargradient from "../../components/UI/LinearUI/Lineargradient";
import LinearApp from "../../components/UI/LinearUI/LinearApp";
import colors from "../../constants/colors";
import CartItem from "./CartItem";
import Button from "../../components/UI/Button/Button";
import { ScrollView } from "react-native";
const Cartscreen = () => {
  const cartIndex = useSelector((state) => state.foodcart.cartIndex);
  const userFoodCart = useSelector((state) => state.foodcart.userFoodCart);

  let total = 0;

  for (let items in userFoodCart) {
    total += userFoodCart[items].quant * userFoodCart[items].price;
  }

  const orderPlaceHandler = () => {
    console.log("orderPlaceHandler__successfully");
  };

  return (
    <Lineargradient style={{ flex: 1 }}>
      <View style={styles.container}>
        <LinearApp style={{ borderRadius: 5 }}>
          <AppText style={styles.mainTextstyle}>My Food Cart</AppText>
        </LinearApp>
        <ScrollView>
          <CartItem userFoodCart={userFoodCart} />
        </ScrollView>
        <LinearApp>
          <Button onPress={orderPlaceHandler}>
            <AppText style={styles.mainTextstyle}>
              Place Order {`( Total : ${total} )`}
            </AppText>
          </Button>
        </LinearApp>
      </View>
    </Lineargradient>
  );
};

const styles = StyleSheet.create({
  mainTextstyle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 25,
    color: colors.silk,
    textAlign: "center",
  },
  container: {
    paddingTop: 20,
    marginHorizontal: 10,
    flex: 1,
  },
});

export default Cartscreen;

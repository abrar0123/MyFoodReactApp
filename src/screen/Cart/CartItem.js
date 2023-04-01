import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppText from "../../components/UI/AppText";
import Card from "../../components/UI/Card";
import colors from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { foodCartActions } from "../../ReduxSlice/cartSlice";

const CartItem = ({ userFoodCart }) => {
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch(foodCartActions.addToCart({ id: id }));
  };

  const removeToCart = (id) => {
    dispatch(foodCartActions.deleteToCart({ id: id }));
  };

  const deleteProduct = (id) => {
    dispatch(foodCartActions.deleteProduct({ id: id }));
  };

  return (
    <View style={{ flex: 1 }}>
      {userFoodCart &&
        userFoodCart.map((e, index) => {
          const myCart = userFoodCart.find((cart) => cart.id === e.id);

          return (
            <Pressable key={index}>
              <Card style={styles.mainContainer}>
                <View style={styles.boxCard}>
                  {/* 1st  */}
                  <View style={{ width: "48%" }}>
                    <Image source={{ uri: e.image }} style={styles.img} />
                  </View>
                  {/*  2nd  */}
                  <View style={{ width: "48%" }}>
                    <View>
                      <AppText lines={2} style={styles.titleText}>
                        {e.title}
                      </AppText>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <AppText style={styles.idtextStyle}>${e.price}</AppText>
                      <AppText style={styles.idtextStyle}>{e.quant}</AppText>
                    </View>
                    {/* button style */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={styles.cartcontainer}>
                        <TouchableOpacity
                          onPress={removeToCart.bind(this, e.id)}
                        >
                          <AntDesign
                            name="minussquare"
                            size={30}
                            color={colors.blue}
                          />
                        </TouchableOpacity>

                        {myCart && (
                          <AppText style={{ color: colors.white }}>
                            {myCart.quant}
                          </AppText>
                        )}

                        <TouchableOpacity onPress={addToCart.bind(this, e.id)}>
                          <AntDesign
                            name="plussquare"
                            size={30}
                            color={colors.blue}
                          />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        onPress={deleteProduct.bind(this, e.id)}
                      >
                        <AntDesign
                          name="delete"
                          size={25}
                          color={colors.blue}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Card>
            </Pressable>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    aspectRatio: 2.2,
    marginVertical: "2%",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 1.25,
  },
  cartcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    borderRadius: 3,
    backgroundColor: colors.mxprimary,
  },
  titleText: {
    width: "100%",
    color: colors.primaryorange,

    fontSize: 18,
    marginBottom: 10,
  },
  idtextStyle: {
    color: colors.blue,
    fontSize: 18,
    marginBottom: 10,
  },

  img: {
    height: "88%",
    borderRadius: 5,
    resizeMode: "center",
    marginLeft: 10,
    marginRight: 13,
  },

  boxCard: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    // alignItems: "center",
    marginTop: 20,
  },
});

export default CartItem;

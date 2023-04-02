import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AppText from "../../components/UI/AppText";
import colors from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { FlatList } from "react-native";
import { foodCartActions } from "../../ReduxSlice/cartSlice";
import Card from "../../components/UI/Card";
import { SwipeListView } from "react-native-swipe-list-view";
import Smcard from "../../components/UI/SmallCard/smcard";
const cartItems = ({ userFoodCart }) => {
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

  const renderItem = ({ item }) => {
    const myCart = userFoodCart.find((cart) => cart.id === item.id);

    return (
      <Card style={styles.mainContainer} key={item.id}>
        <View style={styles.boxCard}>
          {/* 1st  */}
          <View style={{ width: "48%" }}>
            <Image source={{ uri: item.image }} style={styles.img} />
          </View>
          {/*  2nd  */}
          <View style={{ width: "48%" }}>
            <View>
              <AppText lines={2} style={styles.titleText}>
                {item.title}
              </AppText>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <AppText style={styles.idtextStyle}>${item.price}</AppText>
              <AppText style={styles.idtextStyle}>{item.quant}</AppText>
            </View>
            {/* button style */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.cartcontainer}>
                <TouchableOpacity onPress={removeToCart.bind(this, item.id)}>
                  <AntDesign name="minussquare" size={30} color={colors.blue} />
                </TouchableOpacity>

                {myCart && (
                  <AppText style={{ color: colors.white }}>
                    {myCart.quant}
                  </AppText>
                )}

                <TouchableOpacity onPress={addToCart.bind(this, item.id)}>
                  <AntDesign name="plussquare" size={30} color={colors.blue} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={deleteProduct.bind(this, item.id)}>
                <AntDesign name="delete" size={25} color={colors.blue} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  const renderHiddenItems = ({ item }) => {
    return (
      <View style={styles.deletbtn}>
        <Smcard
          style={{
            backgroundColor: colors.red,
            height: "120%",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,

            paddingHorizontal: 20,
            paddingVertical: 60,
          }}
        >
          <TouchableOpacity onPress={deleteProduct.bind(this, item.id)}>
            <AntDesign name="delete" size={30} color={colors.white} />
          </TouchableOpacity>
        </Smcard>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SwipeListView
        contentContainerStyle={{ paddingBottom: 60 }}
        data={userFoodCart}
        renderHiddenItem={renderHiddenItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        rightOpenValue={-90}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  deletbtn: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 20,
  },
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

export default cartItems;

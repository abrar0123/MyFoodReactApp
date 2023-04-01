import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "../../../components/UI/AppText";
import colors from "../../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { foodCartActions } from "../../../ReduxSlice/cartSlice";
import { FlatList } from "react-native";

const listfood = ({ MyFood }) => {
  const userCart = useSelector((state) => state.foodcart.userFoodCart);
  // const cartIndex = useSelector((state) => state.cartIndex);

  // console.log("userCart____", userCart);

  const dispatch = useDispatch();

  const addToCart = (id, title, image, price) => {
    dispatch(
      foodCartActions.addToCart({
        id: id,
        title: title,
        image: image,
        quant: 1,
        price: price,
      })
    );
    // dispatch({ type: "addToCart", payload: { id: id, quant: 1 } });
  };

  const removeToCart = (id) => {
    // console.log("id_", id);
    dispatch(foodCartActions.deleteToCart({ id }));
    // dispatch({ type: "removeToCart", payload: { id: id, quant: 1 } });
  };

  const addToCartHandler = (productid) => {
    const updatedCartIndex = [...userFoodCart];
    const itemIndex = updatedCartIndex.findIndex((e) => e.id === productid);
    console.log("itemIndex___", itemIndex);
    if (itemIndex >= 0) {
      updatedCartIndex[itemIndex].cart++;
    } else {
      updatedCartIndex.push({ id: productid, cart: 1 });
    }
    setUserFoodCart(updatedCartIndex);
  };

  const deleteToCartHandler = (pid) => {
    const updatedCartIndex = [...userFoodCart];
    const findIndex = updatedCartIndex.findIndex((e) => e.id === pid);
    console.log("findIndex", findIndex);
    if (findIndex >= 0) {
      if (updatedCartIndex[findIndex].cart > 0) {
        updatedCartIndex[findIndex].cart--;
      } else if (updatedCartIndex[findIndex].cart === 0) {
        updatedCartIndex.splice(findIndex, 1);
      }
      setUserFoodCart(updatedCartIndex);
    }
  };

  const renderItem = ({ item, index }) => {
    const imageUrl = `https://spoonacular.com/recipeImages/${item.image}`;
    const mycarts = userCart && userCart.find((e) => e.id === item.id);

    return (
      <View style={styles.cardcontainer}>
        <Image source={{ uri: imageUrl }} style={styles.img} />
        <AppText lines={2} style={styles.title}>
          {item.title}
        </AppText>
        <AppText
          lines={2}
          style={{ fontSize: 13, color: colors.grey, paddingHorizontal: 10 }}
        >
          {item.sourceUrl}
        </AppText>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={styles.cartcontainer}>
            <TouchableOpacity
              // onPress={deleteToCartHandler.bind(this, item.id, index)}
              onPress={removeToCart.bind(this, item.id)}
            >
              <AntDesign
                name="minuscircle"
                size={30}
                color={colors.jamanlight}
              />
            </TouchableOpacity>

            {mycarts && (
              <AppText style={{ color: colors.white }}>{mycarts.quant}</AppText>
            )}

            <TouchableOpacity
              // onPress={addToCartHandler.bind(this, item.id, index)}
              onPress={addToCart.bind(
                this,
                item.id,
                item.title,
                imageUrl,
                item.readyInMinutes
              )}
            >
              <AntDesign
                name="pluscircle"
                size={30}
                color={colors.jamanlight}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 60 }}
        data={MyFood}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 8,
  },
  cartcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: 100,
    borderRadius: 40,
    backgroundColor: colors.jaman,
    marginTop: 15,
  },
  cardcontainer: {
    backgroundColor: colors.white,
    // padding: 10,
    marginVertical: 8,
    // marginHorizontal: 8,
    width: "47%",
    height: 270,
    borderRadius: 10,
    // shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
  },
  img: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: colors.primaryorange,
  },
});

export default listfood;

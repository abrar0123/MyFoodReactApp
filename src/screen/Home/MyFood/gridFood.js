import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import AppText from "../../../components/UI/AppText";
import colors from "../../../constants/colors";

const gridFood = ({ MyFood, Loader }) => {
  const renderItem = ({ item }) => {
    const imageUrl = `https://spoonacular.com/recipeImages/${item.image}`;

    return (
      <View style={styles.cardcontainer}>
        <Image source={{ uri: imageUrl }} style={styles.img} />
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText
          style={{ fontSize: 13, color: colors.grey, paddingHorizontal: 10 }}
        >
          {item.sourceUrl}
        </AppText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Loader ? (
        <ActivityIndicator size={"large"} color={colors.orange} />
      ) : (
        <FlatList
          data={MyFood}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },

  img: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    resizeMode: "cover",
  },

  cardcontainer: {
    backgroundColor: colors.white,
    // padding: 10,
    marginVertical: 10,
    height: 240,
    borderRadius: 10,
    // shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
  },

  title: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default gridFood;

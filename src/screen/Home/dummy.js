import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../../constants/colors";
import { useState, useEffect } from "react";

const SearchBar = (props) => {
  const [searchedMovie, setsearch] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const movie = props.myMovies;
  const searchInputHandler = (event) => {
    setsearchInput(event);
  };

  const searchHandler = () => {
    const searchMovie = movie.filter((e) => {
      const movieTitle = e.title.toLowerCase();
      const search = searchInput.toLowerCase();
      return movieTitle.includes(search);
    });
    setsearch(searchMovie);
    props.serachedRecord(searchedMovie);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={searchInput}
        onChangeText={searchInputHandler}
        onChange={searchHandler}
      />

      <TouchableOpacity onPress={searchHandler}>
        <Feather
          name="search"
          size={25}
          color={colors.dgrey}
          style={{ paddingRight: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "92%",
    height: 45,
    borderColor: colors.grey,
    borderWidth: 2,
    marginBottom: 30,
    margin: 5,
    marginTop:100,
    borderRadius: 30,
  },
  inputStyle: {
    marginLeft: 15,
    fontSize: 18,
    width: "80%",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    display: "flex",
    // justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colors.white,
  },
});

export default SearchBar;

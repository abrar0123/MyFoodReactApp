import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppText from "../../components/UI/AppText";
import colors from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import Smcard from "../../components/UI/SmallCard/smcard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../ReduxSlice/authSlice";
import { SwipeListView } from "react-native-swipe-list-view";

const data = [{ key: "item1", text: "Swipe here to Logout" }];

const Userprofile = () => {
  const myToken = useSelector((state) => state.auth.authToken);
  const myEmail = useSelector((state) => state.auth.userEmail);

  const Dispatch = useDispatch();

  const logoutHandler = () => {
    Alert.alert("want Logout ?", "Are you sure you want to be logout ", [
      { text: "Cancel", onPress: () => console.log("okkk") },
      { text: "Yes", onPress: () => Dispatch(authActions.aut_Logout()) },
    ]);

    console.log("logout");
  };

  const renderItem = ({ item }) => {
    return (
      <Smcard style={styles.logoutStyle}>
        <AppText
          style={{
            fontSize: 20,
            color: colors.jaman,
            fontWeight: "900",
          }}
        >
          {item.text}
        </AppText>
      </Smcard>
    );
  };

  const renderHiddenItems = () => {
    return (
      <View style={styles.deletbtn}>
        <Smcard
          style={{
            backgroundColor: colors.red,
            height: "100%",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingHorizontal: 18,
            paddingVertical: 15,
          }}
        >
          <TouchableOpacity onPress={logoutHandler}>
            <AntDesign
              name="logout"
              size={25}
              color={colors.white}
              style={{ fontWeight: "bold" }}
            />
          </TouchableOpacity>
        </Smcard>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Smcard style={{ marginBottom: 20 }}>
        <AppText style={{ fontSize: 22, textAlign: "center" }}>
          Welcome to User Profile
        </AppText>
      </Smcard>

      <SwipeListView
        data={data}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItems}
        // leftOpenValue={75}
        rightOpenValue={-75}
      />

      {myEmail && (
        <Smcard style={{ marginVertical: 20 }}>
          <AppText style={{ fontSize: 22, color: colors.blue }}>
            Your Email
          </AppText>
          <AppText style={{ fontSize: 20, color: colors.jaman }}>
            {myEmail}
          </AppText>
        </Smcard>
      )}
      {myToken && (
        <Smcard>
          <AppText style={{ fontSize: 22, color: colors.blue }}>
            Your Credential
          </AppText>
          <AppText lines={5}>{myToken}</AppText>
        </Smcard>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
    marginHorizontal: 10,
    // marginBottom: 20,
  },
  row: {
    padding: 20,
    backgroundColor: "white",
  },
  deletbtn: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    borderRadius: 10,
  },
  logoutStyle: {
    // marginBottom: 20,
    // marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
});

export default Userprofile;

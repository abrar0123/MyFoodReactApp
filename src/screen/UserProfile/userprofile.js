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
  return (
    <View style={styles.container}>
      <Smcard>
        <AppText style={{ fontSize: 22, textAlign: "center" }}>
          Welcome to User Profile
        </AppText>
      </Smcard>
      <Smcard style={styles.logoutStyle}>
        <AppText
          style={{
            fontSize: 20,
            color: colors.jaman,
            fontWeight: "900",
          }}
        >
          Want to to Logout
        </AppText>

        {
          <TouchableOpacity onPress={logoutHandler}>
            <AntDesign
              name="logout"
              size={25}
              color={colors.jaman}
              style={{ fontWeight: "bold" }}
            />
          </TouchableOpacity>
        }
      </Smcard>
      {myEmail && (
        <Smcard style={{ marginBottom: 20 }}>
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
  },
  logoutStyle: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default Userprofile;

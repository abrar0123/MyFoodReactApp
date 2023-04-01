import React, { Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import colors from "../../constants/colors";
import Card from "../../components/UI/Card";
import AppText from "../../components/UI/AppText";
import { useWindowDimensions } from "react-native";

const Login = () => {
  const [email, setemail] = useState("ab090988@gmail.com");
  const [pass, setpass] = useState("");
  const [username, setusername] = useState("");
  const [FirebaseError, setFirebaseError] = useState("");
  const [errors, seterrors] = useState({ uname: "", Email: "", Pass: "" });
  const [Islogin, setIslogin] = useState(false);
  const [passShowHider, setpassShowHider] = useState(false);
  const emailError = "Empty Email not allowed";
  const passError = "Empty Password not allowed";
  const unameError = "Enter Valid username";

  const wantlogin = "Already have Account";
  const signupme = "Signup Me !";
  const logintext = "Login ";
  const signuptext = "Signup ";

  const { width, height } = useWindowDimensions();

  const screenHight = height;

  const wantLoginHandler = () => {
    setIslogin(!Islogin);
    setemail("");
    setpass("");
    setusername("");
    setFirebaseError("");
    seterrors({ Email: "", Pass: "", uname: "" });
  };

  const unameHandler = (event) => {
    setusername(event);
    if (username.trim().length !== 0) {
      seterrors({ uname: "" });
    }
  };

  const emailHandler = (event) => {
    setemail(event);
    if (event.trim().length !== 0) {
      seterrors({ Email: "" });
    }
  };

  const passHandler = (event) => {
    setpass(event);
    if (email.trim().length !== 0) {
      seterrors({ Pass: "" });
    }
  };

  // main functions ...

  const onsubmit = (event) => {
    event.preventDefault();
    if (!email && !pass && !username && !Islogin) {
      return seterrors({
        uname: unameError,
        Email: emailError,
        Pass: passError,
      });
    } else if (!email && !pass && Islogin) {
      return seterrors({
        Email: emailError,
        Pass: passError,
      });
    } else if (!Islogin && !username) {
      return seterrors({ uname: unameError });
    } else if (email.trim() === "") {
      return seterrors({ Email: emailError });
    } else if (pass.trim() === "") {
      return seterrors({ Pass: passError });
    } else seterrors({ Email: "", Pass: "" });
    if (Islogin) {
      // firebaseLogin();
    } else {
      // firebaseSignup();
    }
  };
  let Fontsize;
  const fontsize = (font) => {
    let screen = screenHight / 10;
    Fontsize = screen * ((2 * font) / 100);
    return Fontsize;
  };

  const firebaseSignup = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUneAz5Dmey7s4uSRwo9_412OACxvtte0",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pass,
            username: username,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        const error = `Authentication error : ${data.error.message.toLowerCase()}`;
        setFirebaseError(error);
        return;
      }

      if (!response.ok) {
        throw Error("Result not ok ");
      }

      authctx.onLogin(data.idToken, email);

      Alert.alert("You have Successfully Log In", email + "\n" + pass);

      setemail("");
      setpass("");
      setusername("");
      setFirebaseError("");
    } catch (error) {
      console.log("signup_api_error", error);
    }
  };

  const firebaseLogin = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUneAz5Dmey7s4uSRwo9_412OACxvtte0",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pass,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        const error = `Authentication error : ${data.error.message.toLowerCase()}`;

        setFirebaseError(error);
        return;
      }

      if (!response.ok) {
        throw Error("Result not ok ");
      }
      console.log("data__", data);
      authctx.onLogin(data.idToken, email);
      Alert.alert("You have Successfully Log In", email + "\n" + pass);

      setemail("");
      setpass("");
      setFirebaseError("");
    } catch (error) {
      console.log("signup_api_error", error);
    }
  };

  fontsize(22);

  const passwordHandler = () => {
    setpassShowHider(!passShowHider);
  };

  return (
    <Fragment>
      {/* <LinearGradient
        style={{ flex: 1 }}
        colors={[colors.jaman, colors.grey, colors.mxprimary]}
      > */}
      <Card style={styles.mainContainer}>
        {/* <form onsubmit={onsubmit}> */}
        <AppText
          style={[
            styles.mainText,
            {
              fontSize: Fontsize,
            },
          ]}
        >
          {Islogin ? logintext : signuptext}
        </AppText>

        <TextInput
          style={{
            backgroundColor: colors.black,
            width: 100,
            height: 90,
            borderRadius: 10,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
        />

        {/* username input that only signup */}
        {!Islogin && (
          <View style={styles.inputcontainer}>
            <FontAwesome
              name="user"
              size={25}
              color={colors.blue}
              style={{ marginRight: 10 }}
            />

            <TextInput
              style={styles.input}
              value={username}
              onChangeText={unameHandler}
              placeholder="Enter username"
              keyboardType="numeric"
            />
          </View>
        )}

        {errors.uname && <Text style={styles.formtxt}>{errors.uname}</Text>}
        {/* email input */}
        <View style={styles.inputcontainer}>
          <MaterialCommunityIcons
            name="email"
            size={25}
            color={colors.blue}
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={emailHandler}
            clearButtonMode="always"
            placeholder="Enter Email"
          />
        </View>

        {errors.Email && <Text style={styles.formtxt}>{errors.Email}</Text>}

        {/* password input */}
        <View style={styles.inputcontainer}>
          <TouchableOpacity onPress={passwordHandler}>
            <Entypo
              name={passShowHider ? "eye" : "eye-with-line"}
              size={25}
              color={colors.blue}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            value={pass}
            onChangeText={passHandler}
            placeholder="Enter password"
            keyboardType="numeric"
            secureTextEntry={passShowHider}
          />
        </View>

        {errors.Pass && <Text style={styles.formtxt}>{errors.Pass}</Text>}

        {/* want login */}
        <View>
          <TouchableOpacity style={{}} onPress={wantLoginHandler}>
            <AppText style={{ fontSize: 18, color: colors.blue }}>
              {Islogin ? signupme : wantlogin}
            </AppText>
          </TouchableOpacity>
        </View>

        {FirebaseError && (
          <AppText
            style={[
              styles.formtxt,
              {
                textAlign: "center",
                marginTop: 15,
              },
            ]}
          >
            {FirebaseError}
          </AppText>
        )}

        {/* login /signup */}

        <Pressable
          style={styles.btn}
          // onPress={submit}
          onPress={onsubmit}
        >
          {Islogin ? (
            <Text style={styles.txt1}>Login</Text>
          ) : (
            <Text style={styles.txt1}>Signup</Text>
          )}
        </Pressable>

        <AppText>kjdjkdjk</AppText>
        {/* </form> */}
      </Card>
      {/* </LinearGradient> */}
    </Fragment>
  );
};
const styles = StyleSheet.create({
  mainText: {
    textAlign: "left",
    fontSize: 35,
    color: colors.blue,
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomColor: colors.blue,
    width: "30%",
    marginTop: 100,
    borderBottomWidth: 3,
  },
  mainContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    marginHorizontal: 10,
  },
  inputcontainer: {
    flexDirection: "row",
    width: "95%",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: colors.blue,
    paddingRight: 10,
    paddingBottom: 10,
    // backgroundColor: colors.red,
    marginVertical: 10,
  },
  input: {
    width: "90%",
    height: 50,
    fontSize: 18,
    borderBottomColor: colors.red,
    backgroundColor: colors.red,
    fontWeight: "500",
    color: colors.black,
  },

  input11: {
    // width: "90%",
    fontSize: 18,
    borderBottomColor: colors.red,
    backgroundColor: colors.red,
    fontWeight: "500",
    color: colors.black,
  },
  btn: {
    backgroundColor: colors.blue,
    padding: 10,
    color: "white",
    marginTop: 30,
    borderRadius: 5,
  },
  txt1: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  formtxt: {
    color: colors.red,
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
    top: -5,
  },
});

export default Login;

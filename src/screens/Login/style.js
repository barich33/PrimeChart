import { backgroundColor, color } from "@shopify/restyle";

const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    //backgroundColor: "#B7EFFC",
    alignItems: "center",
    justifyContent: "center",
    opacity:1
  },
  image: {
    marginBottom: 40,
  },
  TextInput: {
    height: 44,
    flex: 1,
    padding: 5,
    marginLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

export default styles;
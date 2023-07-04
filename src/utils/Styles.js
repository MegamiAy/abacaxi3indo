import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "#1C2128",
    },

    head: {
        fontSize: 20,
        color:"#fffff",
    },

    container: {
      padding: 15,
      flex: 1,
      backgroundColor: "#1C2128",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "100%",
      alignSelf: "center",
    },

    title: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#e3e3e3",
      paddingRight: 100,
      position: "relative",
      padding: 50,

    },

    titlesmall: {
      fontSize: 13,
      fontWeight: "bold",
      color: "#e3e3e3",
    },

    taskheader: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#111417",
      height: "30%",
      width: "100%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 10,
      borderBottomWidth: 2,
    },

    taskbody: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#889199",
      height: "50%",
      width: "100%",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      padding: 10,
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 10,
    },

    textinput: {
      alignSelf: "center",
      backgroundColor: "#e3e3e3",
      width: "70%",
      height: 40,
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
    },

    inputtitle:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#e3e3e3",
      alignSelf: "center",
      position: "relative",
      paddingTop: 40,
      padding: 20,
    },

    button: {
      backgroundColor: "#111417",
      width: "70%",
      height: 40,
      borderRadius: 10,
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 10,
    }

  });

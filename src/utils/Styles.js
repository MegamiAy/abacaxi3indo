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
    },

    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#e3e3e3",
    },

    titlesmall: {
      fontSize: 13,
      fontWeight: "bold",
      color: "#e3e3e3",
    },

    taskheader: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#323138",
      height: "50%",
      width: "100%",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },

    taskbody: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#828282",
      height: "50%",
      width: "100%",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      padding: 20,
    },

    del: {
      color: "#fff",
      fontSize: 12,
      padding: 5,
      margin: 2,
      backgroundColor: "#8B0000",
      borderRadius: 5,
    }

  });

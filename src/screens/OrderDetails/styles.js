import { StyleSheet } from "react-native";

export default  StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 33,
        fontWeight: "600",
        marginVertical: 10,
    },
    menuTitle:{
        marginTop:10,
        fontSize:18,
        letterSpacing :0.7,

    },
    subtitle: {
        color: "#525252",
        fontSize: 15,
    },
    container:{
        margin:10,
    },
    iconContainer:{
        position: "absolute",
        top: 40,
        left: 20,
        borderRadius: 50,


    },
});
import { StyleSheet, Platform, StatusBar } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "ghostwhite",
        ...Platform.select({
        ios: { paddingTop: 20 },
        android: { paddingTop: StatusBar.currentHeight }
        })
    },
    box: {
        // width: 300,
        height: 100,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray"
    },
    boxText: {
        color: "darkslategray",
        fontWeight: "bold"

    }
});
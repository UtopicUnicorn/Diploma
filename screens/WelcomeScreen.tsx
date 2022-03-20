import {
    Alert,
    Image, SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Ionicons, AntDesign, Feather, Entypo } from "@expo/vector-icons";
import React from "react";

export default function WelComeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Добро пожаловать в систему Clone Service!</Text>
            <Image
                style={styles.logo}
                source={{
                    uri: "http://clone.6171.ru/img/site-logo.png",
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    logo: {
        width: 194,
        height: 43,
        // alignItems: "center",
    },
    text: {
        marginTop: 60,
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40,
    },
    container: {
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#FFF",
        flex: 1,
    },
});

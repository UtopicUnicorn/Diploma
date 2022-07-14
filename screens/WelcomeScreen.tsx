import {
    Image, Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React from "react";
import {refs} from "../components/refs";
import {welcomeScreenEnums} from "../components/constants";

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{welcomeScreenEnums.title}</Text>
            <Image
                style={styles.logo}
                source={{
                    uri: refs.logo,
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    logo: {
        width: 194,
        height: 43,
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
        backgroundColor: "#FFF",
        flex: 1,
    },
});

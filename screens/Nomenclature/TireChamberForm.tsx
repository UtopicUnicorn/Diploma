import React from "react";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";



export default function TireChamberForm(status: Record<any, any>) {

    let [diameterValue, diameter] = React.useState("");

    return(
        <View>
            <TextInput
                onChangeText={diameter}
                style={styles.form}
                placeholder={"Диаметр"}
                placeholderTextColor={"#808080"}
            />
            <Pressable style={styles.button}>
                <Text style={styles.text}>Добавить</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        height: 40,
        margin: '3%',
        borderWidth: 1,
        borderColor: '#804EA7',
        padding: 10,
        // marginTop:'15%',
    },

    text: {
        alignSelf: "center"
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderColor: '#804EA7',
        elevation: 3,
        borderWidth: 1,
        margin: "3%",
        marginTop: "2%",
    },
})

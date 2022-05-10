import React from "react";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";


export default function SensorsForm(status: Record<any, any>) {

    let [brandValue, brand] = React.useState("");
    let [modelValue, model] = React.useState("");


    return(
        <View>
            <Text style={styles.name}>Бренд</Text>
            <TextInput
                onChangeText={brand}
                style={styles.form}
            />
            <Text style={styles.name}>Модель</Text>
            <TextInput
                onChangeText={model}
                style={styles.form}
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
    name: {
        marginTop: 20,
        marginLeft: '3%'
    },
})

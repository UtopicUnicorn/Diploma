import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import NomenclatureService from "../../../services/NomenclatureService";


export default function CapsForm(status: Record<any, any>) {

    let [brandValue, brand] = React.useState("");
    let [modelValue, model] = React.useState("");
    let [diameterValue, diameter] = React.useState("");
    let [colorValue, color] = React.useState("");
    let [applicationValue, application] = React.useState("");

    const sendForm = async ()=> {
        let data = await NomenclatureService.post({
            brand: brandValue,
            model: modelValue,
            diameter: Number(diameterValue),
            color: colorValue,
            application: applicationValue,
            type: "caps",
        })
    }

    return(
        <View>
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
            </View>
            <View>
                <TextInput
                    onChangeText={diameter}
                    style={styles.form}
                    placeholder={"Диаметер"}
                    placeholderTextColor={"#808080"}
                />
                <TextInput
                    onChangeText={color}
                    style={styles.form}
                    placeholder={"Цвет"}
                    placeholderTextColor={"#808080"}
                />
                <TextInput
                    onChangeText={application}
                    style={styles.form}
                    placeholder={"Прим-е"}
                    placeholderTextColor={"#808080"}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={sendForm}>
                <Text style={styles.text}>Добавить</Text>
            </TouchableOpacity>
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
    formarea: {
        height: 80,
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
    oldnew: {
        marginTop: '5%',
    },
    name: {
        marginTop: 20,
        marginLeft: '3%'
    },
})

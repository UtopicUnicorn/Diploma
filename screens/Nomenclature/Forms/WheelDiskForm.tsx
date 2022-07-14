import React from "react";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";


export default function WheelDiskForm(status: Record<any, any>){
    let [brandValue, brand] = React.useState("");
    let [modelValue, model] = React.useState("");
    let [diameterValue, diameter] = React.useState("");
    let [pcdValue, pcd] = React.useState("");
    let [widthValue, width] = React.useState("");
    let [etValue, et] = React.useState("");
    let [coValue, co] = React.useState("");
    let [diskTypeValue, diskType] = React.useState("");
    let [colorValue, color] = React.useState("");
    let [descriptionValue, description] = React.useState("");
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
                    onChangeText={pcd}
                    style={styles.form}
                    placeholder={"PCD"}
                    placeholderTextColor={"#808080"}
                />
                <TextInput
                    onChangeText={width}
                    style={styles.form}
                    placeholder={"Ширина"}
                    placeholderTextColor={"#808080"}
                />
                <TextInput
                    onChangeText={et}
                    style={styles.form}
                    placeholder={"ET"}
                    placeholderTextColor={"#808080"}
                />
                <TextInput
                    onChangeText={co}
                    style={styles.form}
                    placeholder={"Ц.О."}
                    placeholderTextColor={"#808080"}
                />
                <TextInput
                    onChangeText={diskType}
                    style={styles.form}
                    placeholder={"Тип"}
                    placeholderTextColor={"#808080"}
                />
                <TextInput
                    onChangeText={color}
                    style={styles.form}
                    placeholder={"Цвет"}
                    placeholderTextColor={"#808080"}
                />
                <Text style={styles.name}>Описание</Text>
                <TextInput
                    onChangeText={description}
                    style={styles.formarea}
                    multiline={true}
                    numberOfLines={2}
                />
            </View>
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
        padding: 10,
        borderColor: '#804EA7',
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
        elevation: 3,
        borderWidth: 1,
        borderColor:'#804EA7',
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

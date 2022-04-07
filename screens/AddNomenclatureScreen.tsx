import React from "react";
import {Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";





export default function AddNomenclature ({navigation}: any){
    const [BrandValue, brand] = React.useState("");
    const [ModelValue, model] = React.useState("");
    const [ProfileValue, profile] = React.useState("");
    const [DiameterValue, diameter] = React.useState("");
    const [WidthValue, width] = React.useState("");
    const [IndexValue, index] = React.useState("")
    const [DescriptionValue, description] = React.useState("");
    const [YearValue, year] = React.useState("");

    const sendForm =()=> {
        fetch('http://localhost:3000/nomenclature', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brand: BrandValue,
                model: ModelValue,
                profile: ProfileValue,
                diameter: DiameterValue,
                width: WidthValue,
                index: IndexValue,
                description: DescriptionValue,
                year: YearValue
            })
        });
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Title area*/}
                <View style={styles.center} >
                    <Text style={styles.title}>Каталог номенклатуры</Text>
                </View>
                {/* Buttons area*/}
                <View>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Шины</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Диски</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Услуги</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Колпаки</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Камеры</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Датчики</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Крепеж</Text>
                    </Pressable>
                </View>

                {/*NEW/Old buttons*/}
                <View style={styles.oldnew}>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>NEW</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Б/У</Text>
                    </Pressable>
                </View>
                {/*Child Components with the rest layout*/}
                {/*Temp tires form*/}
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
                    <Text style={styles.name}>Ширина</Text>
                    <TextInput
                        onChangeText={width}
                        style={styles.form}
                    />
                    <Text style={styles.name}>Профиль</Text>
                    <TextInput
                        onChangeText={profile}
                        style={styles.form}
                    />
                    <Text style={styles.name}>Диаметр</Text>
                    <TextInput
                        onChangeText={diameter}
                        style={styles.form}
                    />
                    <Text style={styles.name}>Индекс</Text>
                    <TextInput
                        onChangeText={index}
                        style={styles.form}
                    />
                    <Text style={styles.name}>Год</Text>
                    <TextInput
                        onChangeText={year}
                        style={styles.form}
                    />
                    <Text style={styles.name}>Описание</Text>
                    <TextInput
                        onChangeText={description}
                        style={styles.formarea}
                        multiline={true}
                        numberOfLines={2}
                    />
                    <Pressable style={styles.button} onPress={sendForm}>
                        <Text style={styles.text}>Добавить</Text>
                    </Pressable>
                </View>
            </ScrollView>


        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center:{
        alignItems:'center',
    },
    title:{
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        marginBottom: '7%'
    },
    form:{
        height:40,
        margin:'3%',
        borderWidth: 1,
        padding: 10,
        // marginTop:'15%',
    },
    formarea:{
        height:80,
        margin:'3%',
        borderWidth: 1,
        padding: 10,
        // marginTop:'15%',
    },
    text:{
        alignSelf: "center"
    },
    button:{
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 1,
        margin:"3%",
        marginTop:"2%",
    },
    oldnew:{
        marginTop:'5%',
    },
    name:{
        marginTop:20,
        marginLeft:'3%'
    },

});

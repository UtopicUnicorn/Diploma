import React from "react";
import {SafeAreaView, View, Text, StyleSheet, TextInput, Pressable, ScrollView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {PriceRuleClass} from "../Classes/PriceRuleClass";

export default function AddPriceRules ({navigation} : any){
    const [NameValue, name] = React.useState("");
    const [PercentValue,percent ] = React.useState("");
    const [MinValue, min] = React.useState("");
    const [MaxValue, max] = React.useState("");

    // pricerule: PriceRuleClass;

    const sendForm =()=> {
        fetch('http://localhost:3000/price-rules', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: NameValue,
                percent: PercentValue,
                min: MinValue,
                max: MaxValue,
            })
        });
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Создание правила</Text>
            </View>
            <View style={styles.formView}>
                <TextInput
                    style={styles.formInput}
                    onChangeText={name}
                    placeholder={'Название'}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={percent}
                    placeholder={'Процент'}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={min}
                    placeholder={'Не меньше'}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={max}
                    placeholder={'Не больше'}
                    placeholderTextColor={'#808080'}
                />
            </View>
            <View style={styles.saveButtonView}>
                <LinearGradient
                    start={{x:0.0, y:0.2}}
                    end={{x:1.0, y:0.6}}
                    locations={[0.2498,0.7503]}
                    colors={['#804EA7','#4FB0C0']}
                    style={styles.gradient}>
                    <Pressable style={styles.saveButton} onPress={sendForm}>
                        <Text style={styles.text}>Сохранить</Text>
                    </Pressable>
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        flex:1,
    },
    titleView:{
        alignItems:'flex-start',
        marginTop:20,
    },
    title:{
        fontSize: 22,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        marginLeft:10,
    },
    formView:{
        marginTop:30,
        marginLeft:10,
        marginRight:10,
    },
    formInput:{
        alignItems:'center',
        height:40,
        marginTop:10,
        justifyContent: "center",
        borderWidth:1,
        padding:10,
    },
    saveButtonView:{
        alignItems:"center",
        margin:20,
        marginTop:150,
    },
    saveButton:{
        alignItems:'center',
        justifyContent: 'center',
        height:40,
        width: 300,
    },
    text:{
        color:'#fff',
        fontSize:18,
    },
    gradient:{
    }

})

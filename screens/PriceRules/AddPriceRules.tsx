import React, {useState} from "react";
import {onPressIn,onPressOut,animatedScaleStyle} from '../../mixins/buttonAnimation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    Animated,
    TouchableWithoutFeedback, Keyboard, ScrollView
} from "react-native";

import {LinearGradient} from "expo-linear-gradient";
import PriceService from "../../services/PriceService";
import {navigationEnums} from "../../components/navigationEnums";
import {priceRulesConstants} from "../../components/constants";


export default function AddPriceRules ({route, navigation} : any){

    let [NameValue, name] = React.useState("");
    let [PercentValue,percent ] = React.useState("");
    let [MinValue, min] = React.useState("");
    let [MaxValue, max] = React.useState("");
    let [idValue, id] = React.useState("");


    let Method=()=>(
        <TouchableWithoutFeedback onPress={()=>sendForm("null",false)} onPressIn={onPressIn} onPressOut={onPressOut}>
            <LinearGradient
                start={{x:0.0, y:0.2}}
                end={{x:1.0, y:0.6}}
                locations={[0.2498,0.7503]}
                colors={['#804EA7','#4FB0C0']}
                style={styles.gradient}>
                <Animated.View style={[styles.saveButton, animatedScaleStyle]}>
                    <Text style={styles.text}>Сохранить</Text>
                </Animated.View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )


    if(route.params!=undefined){
        idValue = route.params['id'];
        [NameValue,name] = React.useState(route.params['name']);
        [PercentValue,percent ] = React.useState(route.params['percent']);
        [MinValue, min] = React.useState(route.params['min']);
        [MaxValue, max] = React.useState(route.params['max']);
        Method=()=>(
            <TouchableWithoutFeedback onPress={()=>sendForm(idValue,true)} onPressIn={onPressIn} onPressOut={onPressOut}>
                <LinearGradient
                    start={{x:0.0, y:0.2}}
                    end={{x:1.0, y:0.6}}
                    locations={[0.2498,0.7503]}
                    colors={['#804EA7','#4FB0C0']}
                    style={styles.gradient}>
            <Animated.View style={[styles.saveButton, animatedScaleStyle]}>
                <Text style={styles.text}>Редактировать</Text>
            </Animated.View>
                </LinearGradient>
            </TouchableWithoutFeedback>
        )
    }


    //form send start
    const sendForm = async (id: string, update: boolean)=> {

        const tempMin: number = +MinValue;
        const tempMax: number = +MaxValue;
        if(tempMin>tempMax){
            Alert.alert(priceRulesConstants.alertTitlePrice,priceRulesConstants.alertPriceText);
            return;
        }

        if(NameValue == '' || PercentValue=='' || MinValue=='' || MaxValue==''){
            Alert.alert(priceRulesConstants.alertTitleForm,priceRulesConstants.alertFormText);
            return;
        }
        const key = await AsyncStorage.getItem('key');
        const body = {
            name: NameValue,
            percent: Number(PercentValue),
            min: Number(MinValue),
            max: Number(MaxValue),
        }
        if(update){
            let {data} = await PriceService.patch(id, body).then(navigation.navigate(navigationEnums.priceRule));

        }else{
            let {data} = await PriceService.post(body, key).then(navigation.navigate(navigationEnums.priceRule));
        }
    }
    //form send end

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps={"handled"}>
            <View style={styles.titleView}>
                <Text style={styles.title}>{priceRulesConstants.title}</Text>
            </View>
            <View style={styles.formView}>
                <TextInput
                    style={styles.formInput}
                    onChangeText={name}
                    value={NameValue}
                    placeholder={priceRulesConstants.name}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={percent}
                    value={PercentValue.toString()}
                    keyboardType={"numeric"}
                    placeholder={priceRulesConstants.percent}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={min}
                    value={MinValue.toString()}
                    keyboardType={"numeric"}
                    placeholder={priceRulesConstants.min}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={max}
                    value={MaxValue.toString()}
                    keyboardType={"numeric"}
                    placeholder={priceRulesConstants.max}
                    placeholderTextColor={'#808080'}
                />
            </View>
            <View style={styles.saveButtonView}>
                <Method/>
        </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        flex:1,
    },
    titleView:{
        alignItems:'center',
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
    },


})

import React, {useState} from "react";
import {onPressIn,onPressOut,animatedScaleStyle} from '../mixins/buttonAnimation';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    Animated,
    TouchableWithoutFeedback
} from "react-native";

import {LinearGradient} from "expo-linear-gradient";
import PriceRepository from "../Repositories/PriceRepository";
import {navigationEnums} from "../components/navigationEnums";
import {priceRulesConstants} from "../components/constants";


export default function AddPriceRules ({route, navigation} : any){

    // let nametmp= "";
    // let pertmp="";
    // let mintmp="";
    // let maxtmp="";

    let [NameValue, name] = React.useState("");
    let [PercentValue,percent ] = React.useState("");
    let [MinValue, min] = React.useState("");
    let [MaxValue, max] = React.useState("");
    let [idValue, id] = React.useState("");




    // if(route.params!=undefined) {
    //     let [NameValue, name] = React.useState(route.params['item']['name']);
    //     let [PercentValue, percent] = React.useState(route.params['item']['percent']);
    //     let [MinValue, min] = React.useState(route.params['item']['min']);
    //     let [MaxValue, max] = React.useState(route.params['item']['max']);
    //     let [idValue, id] = React.useState(route.params['item']['id']);
    // }else{
    //     let [NameValue, name] = React.useState("");
    //     let [PercentValue,percent ] = React.useState("");
    //     let [MinValue, min] = React.useState("");
    //     let [MaxValue, max] = React.useState("");
    //     let [idValue, id] = React.useState("");
    // }

    // let [NameValue, name] = React.useState("");
    // let [PercentValue,percent ] = React.useState("");
    // let [MinValue, min] = React.useState("");
    // let [MaxValue, max] = React.useState("");
    // let [idValue, id] = React.useState("");



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
        idValue = route.params['item']['id'];
        [NameValue,name] = React.useState(route.params['item']['name']);
        [PercentValue,percent ] = React.useState(route.params['item']['percent']);
        [MinValue, min] = React.useState(route.params['item']['min']);
        [MaxValue, max] = React.useState(route.params['item']['max']);
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

        console.log(NameValue);
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
        const body = {
            name: NameValue,
            percent: Number(PercentValue),
            min: Number(MinValue),
            max: Number(MaxValue),
        }
        if(update){
            let {data} = await PriceRepository.patch(id, body).then(navigation.navigate(navigationEnums.priceRule));

        }else{
            let {data} = await PriceRepository.post(body).then(navigation.navigate(navigationEnums.priceRule));
        }
    }

    //form send end

    return(
        <SafeAreaView style={styles.container}>
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
                    placeholder={priceRulesConstants.procent}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={min}
                    value={MinValue.toString()}
                    placeholder={priceRulesConstants.min}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={max}
                    value={MaxValue.toString()}
                    placeholder={priceRulesConstants.max}
                    placeholderTextColor={'#808080'}
                />
            </View>
            <View style={styles.saveButtonView}>
                <Method/>
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
    }

})

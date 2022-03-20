import React from "react";
import {Pressable, SafeAreaView, StyleSheet, Text, View, Image, ImageBackground} from "react-native";
//import {LinearGradient} from "expo-linear-gradient";
import {AntDesign} from "@expo/vector-icons";

export default function PriceRules ({navigation}:any){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Ценовые правила</Text>
            </View>
            <View style={styles.buttonsView}>
                <ImageBackground
                    resizeMode={"cover"}
                    style={styles.img}
                    source={
                        require('../assets/button-bg.png')
                    }
                >
                    <Pressable style={styles.button} onPress={()=> navigation.navigate('AddPriceRules')}>
                        {/*<AntDesign name={'pluscircleo'} size={24} color={'black'}/>*/}
                        <Text style={styles.text}>Добавить</Text>
                    </Pressable>
                </ImageBackground>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFF',
    },
    button:{
        flexDirection:'row',
        elevation: 2,
        // borderWidth: 1,
        height:30,
        width: 80,
        alignItems:'center',
        justifyContent: 'center',
        // borderColor:'#804EA7',
    },
    title:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    text:{
        alignItems:'center',
        color:'#fff'
    },
    buttonsView:{
        marginTop:20,
        alignItems:'flex-start',
        marginLeft:20,
    },
    titleView:{
        marginTop:20,
        alignItems:'flex-start',
        marginLeft: 20,
    },
    img:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:90,
        height:30,
    }
})

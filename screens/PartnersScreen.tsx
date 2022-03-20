import React from "react";
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput, Pressable, ScrollView,
} from "react-native";

export default function PartnersScreen ({navigation}: any){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Контрагенты</Text>
            </View>
            <View style={styles.buttonsView}>
                <ImageBackground
                    resizeMode={"cover"}
                    style={styles.img}
                    source={
                        require('../assets/button-bg.png')
                    }
                >
                    <Pressable style={styles.button} onPress={()=>navigation.navigate('AddPartners')}>
                        <Text style={styles.text}>Добавить</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#FFF'
    },
    titleView:{
        marginTop:20,
        alignItems:'flex-start',
        marginLeft: 20,
    },
    title:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
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
    text:{
        alignItems:'center',
        color:'#fff'
    },
    buttonsView:{
        marginTop:20,
        alignItems:'flex-start',
        marginLeft:20,

    },
    img:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:90,
        height:30,
    }

})

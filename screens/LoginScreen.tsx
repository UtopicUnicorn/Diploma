import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground, TextInput, Button, Pressable,
} from "react-native";
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from "../components/useAuth";
import {LinearGradient} from "expo-linear-gradient";
import {loginEnum} from "../components/constants";
import LoginService from "../services/LoginService";


export default function Login({navigation}: any) {
    const [loginValue, login] = React.useState("");
    const [passwordValue, password] = React.useState("");

    const {isAuth, setIsAuth} = useAuth();

    const setToken = (id: any)=>{
        AsyncStorage.setItem('key', id['data']).then(()=> setIsAuth(true));
    }

    const  authHandler = () =>{
        if(loginValue && passwordValue){
            const body = {
                login: loginValue,
                password: passwordValue
            }
            LoginService.checkPass(body).then((id)=>setToken(id)).catch(e=>{console.log(e)});

        }else{
            console.log('заполните все поля');
        }
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode={"center"}
                source={{
                    uri: loginEnum.logo,
                }}
            />
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={login}
                    placeholder={loginEnum.login}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={password}
                    placeholder={loginEnum.password}
                    placeholderTextColor={'#808080'}
                    textContentType={"password"}
                />
                <View style={styles.saveButtonView}>
                <LinearGradient
                    start={{x:0.0, y:0.2}}
                    end={{x:1.0, y:0.6}}
                    locations={[0.2498,0.7503]}
                    colors={['#804EA7','#4FB0C0']}>
                <Pressable style={styles.saveButton} onPress={authHandler}>
                    <Text style={styles.text}>{loginEnum.enter}</Text>
                </Pressable>
                </LinearGradient>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flex: 1,
        backgroundColor: '#fff',
    },
    logo:{
        width: "100%",
        height: "30%",
    },
    input:{
        height:40,
        margin:12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 1,
        margin:"3%",
        marginTop:"35%",
    },
    text:{
        color:'#fff',
        fontSize:18,
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
        borderWidth:1,
    },
});

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


export default function Login({navigation}: any) {
    const [loginValue, login] = React.useState("");
    const [passwordValue, password] = React.useState("");

    const loginSendForm =()=>{
        const sendform = {
            "login" :loginValue,
            "password": passwordValue,
        }
        console.log(sendform);
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode={"center"}
                source={{
                    uri: "http://clone.6171.ru/img/site-logo.png",
                }}
            />
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={login}
                    placeholder={'Login'}
                    placeholderTextColor={'#808080'}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={password}
                    placeholder={'Password'}
                    placeholderTextColor={'#808080'}
                />
                <Pressable style={styles.button} onPress={loginSendForm}>
                    <Text style={styles.text}>Авторизоваться</Text>
                </Pressable>
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
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    }
});

import React from "react";
import {
    ImageBackground,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function ItemsScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.field}>
                    <Text>Размер шины</Text>
                    <View style={styles.sizeOptionsView}>
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'Ширина'}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'Профиль'}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'Диаметер'}
                            placeholderTextColor={'#808080'}
                        />
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={'Брэнд'}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Модель'}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Площадка'}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Кол-Во'}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Cтатус'}
                            placeholderTextColor={'#808080'}
                        />
                        <ImageBackground
                            resizeMode={"cover"}
                            style={styles.img}
                            source={
                                require('../assets/button-bg.png')
                            }
                        >
                            <Pressable style={styles.button}>
                                <Text style={styles.text}>Добавить фотографию</Text>
                            </Pressable>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
    },
    field:{
        margin: 20,
        borderWidth:1,
        padding:20,
    },
    sizeOptionsView:{
        marginTop:10,
        flexDirection:"row",
        // alignItems:"center",
        // justifyContent: "center",
    },
    sizeOptions:{
        borderWidth:1,
        width:80,
        height:50,
        marginLeft: 10,
        marginRight: 10,
        alignItems:"center",
        justifyContent: "center",
    },
    input:{
        height:40,
        margin:'3%',
        borderWidth: 1,
        padding: 10,
        // marginTop:'15%',
    },
    text:{
        alignItems:'center',
        color:'#fff'
    },
    img:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:180,
        height:30,
        marginLeft:10,
    },
    button:{
        flexDirection:'row',
        elevation: 2,
        // borderWidth: 1,
        height:30,
        width: 180,
        alignItems:'center',
        justifyContent: 'center',
        // borderColor:'#804EA7',
    },
})

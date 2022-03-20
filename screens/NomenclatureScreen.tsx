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

export default function Nomenclature (){
    const [SearchValue, search] = React.useState("Поиск");
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
                {/*Search area*/}
                <View>
                    <TextInput
                        onChangeText={search}
                        value={SearchValue}
                        style={styles.form}
                    />
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
            </ScrollView>
            {/*Child Components with the rest layout*/}
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:'10%'
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
        marginTop:'15%',
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
    }

});

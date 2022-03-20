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

export default function Deals(){
    const [OrganizationValue, organization] = React.useState("");
    const [ManagerValue, manager] = React.useState("");
    const [IntervalValue, interval] = React.useState("");

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.center}>
                    <Text style={styles.title}>Сделки с клиентами</Text>
                </View>
                {/*Input Data*/}
                <View>
                    <Text style={styles.text}>Организация</Text>
                    <TextInput
                        onChangeText={organization}
                        value={OrganizationValue}
                        style={styles.form}
                    />
                    <Text style={styles.text}>Менеджер</Text>
                    <TextInput
                        onChangeText={manager}
                        value={ManagerValue}
                        style={styles.form}
                    />
                    <Text style={styles.text}>Интервал</Text>
                    <TextInput
                        onChangeText={interval}
                        value={IntervalValue}
                        style={styles.form}
                    />
                </View>
                {/*Buttons*/}

                <View style={styles.buyButtonsView}>
                    <Pressable style={styles.buyButtons}>
                        <Text>Выкуп</Text>
                    </Pressable>
                    <Pressable style={styles.buyButtons}>
                        <Text>Комиссия</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    center:{
        marginTop:20,
        alignItems:'center',
    },
    title:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    form:{
        height:40,
        marginLeft:20,
        marginRight:20,
        borderWidth: 1,
        padding: 10,
        borderColor:'#804EA7'
    },
    text:{
        marginTop:20,
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        marginLeft:20,
        letterSpacing: 0.25,
    },
    button:{
        borderRadius: 4,
        elevation: 3,
        borderWidth: 1,
        marginLeft:20,
        marginRight:20,
        marginTop:"2%",
    },
    buyButtonsView:{
        marginTop:20,
        marginLeft:20,
        flexDirection:'row',
        justifyContent: "flex-start",
    },
    buyButtons:{
        elevation: 2,
        borderWidth: 1,
        height:30,
        width: 80,
        margin:'2%',
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#804EA7',
    }
})

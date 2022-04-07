import React, {useEffect, useState} from "react";
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput, Pressable, ScrollView, ActivityIndicator, FlatList,
} from "react-native";

export default function Deals(){
    const [OrganizationValue, organization] = React.useState("");
    const [ManagerValue, manager] = React.useState("");
    const [IntervalValue, interval] = React.useState("");

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);


    let state ={
        activeBtnId : 'button1',
    }

    const getDeals = async ()=>{
        try {
            const response = await fetch('http://localhost:3000/deals');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        getDeals();
    }, [])


    const sendForm =()=> {
        fetch('http://localhost:3000/deals', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                organization: OrganizationValue,
                manager: ManagerValue,
                interval: IntervalValue,
            })
        });
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#FFF'}}>
            <ScrollView>
                <View style={styles.center}>
                    <Text style={styles.title}>Сделки с клиентами</Text>
                </View>
                {/*Input Data*/}
                <View>
                    <Text style={styles.text}>Организация</Text>
                    <TextInput
                        onChangeText={organization}
                        style={styles.form}
                    />
                    <Text style={styles.text}>Менеджер</Text>
                    <TextInput
                        onChangeText={manager}
                        style={styles.form}
                    />
                    <Text style={styles.text}>Интервал</Text>
                    <TextInput
                        onChangeText={interval}
                        style={styles.form}
                    />
                    <Pressable style={styles.button} onPress={sendForm}>
                        <Text>Отправить</Text>
                    </Pressable>
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
                {/*temp get request UI*/}
                <View style={styles.tableView}>
                    <Text>organization, manager, interval</Text>
                    {isLoading ? <ActivityIndicator/> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item } : any) => (
                                <Text>{item.organization}, {item.manager}, {item.interval}</Text>
                            )}
                        />
                    )}
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
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderColor:'#804EA7',
        elevation: 3,
        borderWidth: 1,
        margin:"3%",
        marginTop:"15%",
        alignSelf:"center",
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
    },
    tableView: {

    }
})

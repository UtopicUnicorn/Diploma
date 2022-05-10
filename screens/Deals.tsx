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
    TextInput, Pressable, ScrollView, ActivityIndicator, FlatList, LogBox,
} from "react-native";
import DealsRepository from "../Repositories/DealsRepository";
import PriceRepository from "../Repositories/PriceRepository";
import {FontAwesome} from "@expo/vector-icons";


//displayed item
const Item = ({item, onPress, backgroundColor, textColor } : any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.itemText, textColor]}>Организация {item.organization}</Text>
        <Text style={[styles.itemText, textColor]}>Менеджер {item.manager}</Text>
        <Text style={[styles.itemText, textColor]}>Интервал {item.interval}</Text>
        <TouchableOpacity style={styles.itemText} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </TouchableOpacity>
);

function deleteItem(id: string) : void{
    DealsRepository.delete(id).then(r =>console.log('ok'));
}

export default function Deals(){
    const [OrganizationValue, organization] = React.useState("");
    const [ManagerValue, manager] = React.useState("");
    const [IntervalValue, interval] = React.useState("");

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);


    let state ={
        activeBtnId : 'button1',
    }

    const getDeals = async ()=>{
         await DealsRepository.get().then(resp=>{setData(resp.data)}).
            catch(error=>{console.log(error)}).
                finally(()=>setLoading(false));
    }

    useEffect(()=>{setInterval(()=>getDeals(),5000); LogBox.ignoreLogs(['VirtualizedLists should never be nested'])}, [])

    //function to render item
    const renderItem = ({item} : any)=> {
        const backgroundColor = item.id === selectedId ? "#808080" : "#fff";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    }

    const sendForm = ()=> {
         let data = DealsRepository.post({
                    organization: OrganizationValue,
                    manager: ManagerValue,
                    interval: IntervalValue,
        })
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#FFF'}}>
            <ScrollView>
                {/*<View style={styles.center}>*/}
                {/*    <Text style={styles.title}>Сделки с клиентами</Text>*/}
                {/*</View>*/}
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
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={({ id }, index) => id}
                    extraData={selectedId}
                />)}
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

    },
    item: {
        // padding: 20,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    itemText:{
        alignItems:'center',
        color:'#fff',
        borderWidth:1,
        borderColor: '#804EA7',
        padding: 10,
    }
})

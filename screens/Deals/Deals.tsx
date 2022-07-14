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
import DealsService from "../../services/DealsService";
import PriceRepository from "../../services/PriceService";
import {FontAwesome} from "@expo/vector-icons";
import {deals, sort as sortData} from "../../components/data";
import {CustomPicker} from "../../components/CustomPicker";
import { Entypo } from '@expo/vector-icons';
import {navigationEnums} from "../../components/navigationEnums";
import AsyncStorage from "@react-native-async-storage/async-storage";

//displayed item
const Item = ({item} : any) => (
    <View style={styles.item}>
        {/*<Text style={[styles.itemText, textColor]}>Организация {item.organization}</Text>*/}
        {/*<Text style={[styles.itemText, textColor]}>Менеджер {item.manager}</Text>*/}
        {/*<Text style={[styles.itemText, textColor]}>Интервал {item.interval}</Text>*/}
        <View style={styles.itemView}>
        <Text style={styles.itemText}>Артикул</Text>
        <Text style={styles.itemText}>{item.number}</Text>
        </View>


        <View style={styles.itemView}>
            <Text style={styles.itemText}>Дата выполнения</Text>
            <Text style={styles.itemText}>{item.date}</Text>
        </View>

        {/*<View style={styles.itemView}>*/}
        {/*<Text style={styles.itemText}>Дата</Text>*/}
        {/*<Text style={styles.itemText}>{item.date}</Text>*/}
        {/*</View>*/}

        <View style={styles.itemView}>
        <Text style={styles.itemText}>Сумма</Text>
        <Text style={styles.itemText}>{item.price}₽</Text>
        </View>

        <View style={styles.itemView}>
        <Text style={styles.itemText}>Контрагент</Text>
        <Text style={styles.itemText}>{item.partner}</Text>
        </View>

        <View style={styles.itemView}>
        <Text style={styles.itemText}>Состояние</Text>
        <Text style={styles.itemText}>{item.state}</Text>
        </View>

        <View style={styles.itemView}>
        <Text style={styles.itemText}>Отгрузить</Text>
        <Text style={styles.itemText}>{item.amount}</Text>
        </View>
        <TouchableOpacity style={styles.chooseButtons} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </View>
);

function deleteItem(id: string) : void{
    DealsService.delete(id).then(r =>console.log('ok'));
}

export default function Deals({navigation}: any){
    const [OrganizationValue, organization] = React.useState("");
    const [ManagerValue, manager] = React.useState("");
    const [IntervalValue, interval] = React.useState("");

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const [sort, setSort] = useState(sortData[0]);
    const [sortModal, setSortModal] = useState(false)

    let state ={
        activeBtnId : 'button1',
    }


    useEffect(()=>{LogBox.ignoreLogs(['VirtualizedLists should never be nested']); setInterval(()=>getDeals(), 5000)}, [])

    //function to render item
    const renderItem = ({item} : any)=> {
        return (
            <Item
                item={item}
            />
        );
    }


    const getDeals = async ()=>{
        const key  = await AsyncStorage.getItem('key');
        await DealsService.get(key).then(resp=>{setData(resp.data)});
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#FFF'}}>
            <ScrollView>
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
                    <Pressable style={styles.button} onPress={()=>navigation.navigate(navigationEnums.addDeals)}>
                        <Text>Добавить сделку</Text>
                    </Pressable>
                </View>

                <View  style={{margin:20, flexDirection: 'row'}}>
                    <Text style={{padding: 10}}>Сортировать по: </Text>
                    <TouchableOpacity style={{borderColor:'#804EA7', borderWidth: 1, flexDirection:'row'}} onPress={()=>setSortModal(!sortModal)}>
                        <Text style={{padding: 10}}>{sort}</Text>
                        <Entypo style={{padding: 10}}  name="chevron-thin-down" size={20} color="black" />
                    </TouchableOpacity>
                    <CustomPicker
                      modalOpen = {sortModal}
                      setModalOpen = {setSortModal}
                      value = {sort}
                      setValue={setSort}
                      items = {sortData}
                    />
                </View>
            {/*{isLoading ? <ActivityIndicator/> : (*/}
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={({ id }, index) => id}
                    extraData={selectedId}/>
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
    chooseButtons:{
        borderWidth: 1,
        height:30,
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#804EA7',
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
        padding: 10,
    },
    itemView:{
        borderWidth:1,
        borderColor:'#804EA7',
        flexDirection:'row',
        justifyContent:'space-between'
    },
})

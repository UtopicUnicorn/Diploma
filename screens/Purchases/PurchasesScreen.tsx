import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput, Pressable, ScrollView, ActivityIndicator, FlatList, TouchableOpacity, LogBox, Alert,
} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import {purchasesEnum} from "../../components/constants";
import PurchasesService from "../../services/PurchasesService";
import PartnersRepository from "../../services/PartnersService";
import {navigationEnums} from "../../components/navigationEnums";
import AsyncStorage from "@react-native-async-storage/async-storage";

//displayed item
const Item = ({item, navigation} : any) => (
    <View style={styles.item}>
        <View style={styles.itemView}>
            <Text style={styles.itemText}>{purchasesEnum.date}:</Text>
            <Text style={styles.itemText}>{item.date}</Text>
        </View>

        <View style={styles.itemView}>
            <Text style={styles.itemText}>{purchasesEnum.organization}:</Text>
            <Text style={styles.itemText}>{item.organization}</Text>
        </View>

        <View style={styles.itemView}>
            <Text style={styles.itemText}>{purchasesEnum.supplier}:</Text>
            <Text style={styles.itemText}>{item.supplier}</Text>
        </View>

        <View style={styles.itemView}>
            <Text style={styles.itemText}>{purchasesEnum.stock}:</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
        </View>

        <View style={styles.itemView}>
            <Text style={styles.itemText}>{purchasesEnum.sum}:</Text>
            <Text style={styles.itemText}>{item.sum}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={styles.itemText}>Наценка:</Text>
            <Text style={styles.itemText}>{item.addinvest}₽</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={styles.itemText}>Товар:</Text>
            <Text style={styles.itemText}>{item.item.brand} {item.item.model} {item.item.width}/{item.item.profile} R{item.item.diameter}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={styles.itemText}>Состояние:</Text>
            <Text style={styles.itemText}>{item.item.status}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={styles.itemText}>{purchasesEnum.partner}:</Text>
            <Text style={styles.itemText}>{item.partner.surname} {item.partner.name} {item.partner.parentname}</Text>
        </View>
        <View style={styles.itemButtonsView}>
            <TouchableOpacity style={styles.itemButton} onPress={() =>deleteItem(item.id)}>
                <FontAwesome name="trash-o" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButton} onPress={() =>navigation.navigate(navigationEnums.editPurchases, item)}>
                <FontAwesome name="edit" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>
);

function deleteItem(id: string) : void{
    PurchasesService.delete(id).then(r=>console.log('ok'));
}

export default function Purchases ({navigation}: any){
    const [OrganizationValue, organization] = React.useState("");
    const [SupplierValue, supplier] = React.useState("");
    const [StorageValue, stock] = React.useState("");
    const [IntervalValue, interval] = React.useState("");

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const getPurchases = async ()=>{
        const key = await AsyncStorage.getItem('key');
        await PurchasesService.get(key).then(resp=>{setData(resp.data)}).
            catch(e=>{console.log(e)}).finally(()=>setLoading(false));
    }

    useEffect(()=>{
        setInterval(()=>getPurchases(), 5000); LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    } , [])


    //function to render item
    const renderItem = ({item} : any)=> {
        return (
            <Item
                item={item}
                navigation={navigation}
            />
        );
    }


    // async function sendPurchase(){
    //     const body = {
    //        organization: OrganizationValue,
    //        supplier: SupplierValue,
    //        stock: StorageValue,
    //        interval: IntervalValue,
    //     }
    //     let {data} = await PurchasesService.post(body);
    // }



    return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.center} >
                        <Text style={styles.title}>{purchasesEnum.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{purchasesEnum.organization}</Text>
                        <TextInput
                            onChangeText={organization}
                            value={OrganizationValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>{purchasesEnum.supplier}</Text>
                        <TextInput
                            onChangeText={supplier}
                            value={SupplierValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>{purchasesEnum.stock}</Text>
                        <TextInput
                            onChangeText={stock}
                            value={StorageValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>{purchasesEnum.interval}</Text>
                        <TextInput
                            onChangeText={interval}
                            value={IntervalValue}
                            style={styles.form}
                        />
                        <View style={styles.saveButtonView}>
                            <LinearGradient
                                start={{x:0.0, y:0.2}}
                                end={{x:1.0, y:0.6}}
                                locations={[0.2498,0.7503]}
                                colors={['#804EA7','#4FB0C0']}>
                            <TouchableOpacity style={styles.button} onPress={()=>Alert.alert('v razrabotke')}>
                              <Text style={styles.buttonText}>{purchasesEnum.search}</Text>
                            </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                {/*temp get request UI*/}
                        {isLoading ? <ActivityIndicator/> : (
                            <FlatList nestedScrollEnabled
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={({ id }, index) => id}
                                extraData={selectedId}
                            />)}

                    <View style={styles.saveButtonView}>
                        <LinearGradient
                            start={{x:0.0, y:0.2}}
                            end={{x:1.0, y:0.6}}
                            locations={[0.2498,0.7503]}
                            colors={['#804EA7','#4FB0C0']}>
                            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(navigationEnums.addPurchases)}>
                                <Text style={styles.buttonText}>{purchasesEnum.add}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </SafeAreaView>
    );

}

 export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center:{
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
        alignItems:'center',
        justifyContent: 'center',
        height:40,
        width: 300,
    },
    head: { height: 40},
    row: { height: 28 },
    textTable: { textAlign: 'center' },
    wrapper: { flexDirection: 'row' },
    tableView:{

    },
    item: {
        // padding: 20,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    itemText:{
        alignItems:'center',
        // color:'#000',
        // borderWidth:1,
        // borderColor: '#804EA7',
        padding: 10,
    },
    saveButtonView:{
        alignItems:"center",
        margin:20,
        marginTop:50,
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
    },
    itemView:{
        borderWidth:1,
        borderColor:'#804EA7',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemButton:{
        // flexDirection:'row',
        // elevation: 2,
        borderWidth: 1,
        height:30,
        width: 167,
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#804EA7',
    },
     itemButtonsView:{
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center'
     }
});

import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput, Pressable, ScrollView, ActivityIndicator, FlatList, TouchableOpacity, LogBox,
} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import {purchasesEnum} from "../components/constants";
import PurchasesRepository from "../Repositories/PurchasesRepository";
import PartnersRepository from "../Repositories/PartnersRepository";

//displayed item
const Item = ({item} : any) => (
    <View style={styles.item}>
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
            <Text style={styles.itemText}>{purchasesEnum.interval}:</Text>
            <Text style={styles.itemText}>{item.interval}</Text>
        </View>
        <TouchableOpacity style={styles.itemButton} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </View>
);

function deleteItem(id: string) : void{
    PurchasesRepository.delete(id).then(r=>console.log('ok'));
}

export default function Purchases (){
    const [OrganizationValue, organization] = React.useState("");
    const [SupplierValue, supplier] = React.useState("");
    const [StorageValue, stock] = React.useState("");
    const [IntervalValue, interval] = React.useState("");

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const getPurchases = async ()=>{
        await PurchasesRepository.get().then(resp=>{setData(resp.data)}).
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
                // onPress={() => setSelectedId(item.id)}
            />
        );
    }


    async function sendPurchase(){
        const body = {
           organization: OrganizationValue,
           supplier: SupplierValue,
           stock: StorageValue,
           interval: IntervalValue,
        }
        let {data} = await PurchasesRepository.post(body);
    }



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
                            <Pressable style={styles.button} onPress={sendPurchase}>
                              <Text style={styles.buttonText}>{purchasesEnum.add}</Text>
                            </Pressable>
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
                </ScrollView>
            </SafeAreaView>
    );

}

const styles = StyleSheet.create({
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
        alignItems:'center',
        // color:'#fff',
        borderWidth:1,
        borderColor: '#804EA7',
        padding: 10,
    },
});

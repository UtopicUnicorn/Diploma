import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput, Pressable, ScrollView, ActivityIndicator, FlatList, TouchableOpacity,
} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

//displayed item
const Item = ({item, onPress, backgroundColor, textColor } : any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.itemText, textColor]}>Организация:  {item.organization}</Text>
        <Text style={[styles.itemText, textColor]}>Поставщик:  {item.supplier}</Text>
        <Text style={[styles.itemText, textColor]}>Склад:  {item.stock}</Text>
        <Text style={[styles.itemText, textColor]}>Интервал:  {item.interval}</Text>
        <TouchableOpacity style={styles.itemText} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </TouchableOpacity>
);

function deleteItem(id: string) : void{
    console.log(id);
    fetch('http://localhost:3000/purchases' + `/${id}`, { method: 'DELETE' })
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
        try {
            const response = await fetch('http://localhost:3000/purchases');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        setInterval(()=>getPurchases(), 5000);
    }, [])


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


    function sendPurchase() : void{
        fetch('http://localhost:3000/purchases', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                organization: OrganizationValue,
                supplier: SupplierValue,
                stock: StorageValue,
                interval: IntervalValue,
            })
        });

    }



    return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.center} >
                        <Text style={styles.title}>Документы закупки</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Организация</Text>
                        <TextInput
                            onChangeText={organization}
                            value={OrganizationValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>Поставщик</Text>
                        <TextInput
                            onChangeText={supplier}
                            value={SupplierValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>Склад</Text>
                        <TextInput
                            onChangeText={stock}
                            value={StorageValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>Интервал</Text>
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
                              <Text style={styles.buttonText}>Добавить</Text>
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
        color:'#fff',
        borderWidth:1,
        borderColor: '#804EA7',
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
    }
});

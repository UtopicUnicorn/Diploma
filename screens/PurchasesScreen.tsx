import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput, Pressable, ScrollView, ActivityIndicator, FlatList,
} from "react-native";


export default function Purchases (){
    const [OrganizationValue, organization] = React.useState("");
    const [SupplierValue, supplier] = React.useState("");
    const [StorageValue, storage] = React.useState("");
    const [IntervalValue, interval] = React.useState("");

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);

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
        getPurchases();
    }, [])



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
                            onChangeText={storage}
                            value={StorageValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>Интервал</Text>
                        <TextInput
                            onChangeText={interval}
                            value={IntervalValue}
                            style={styles.form}
                        />

                        <Pressable style={styles.button} onPress={sendPurchase}>
                            <Text>Добавить</Text>
                        </Pressable>
                    </View>
                {/*temp get request UI*/}
                    <View style={styles.tableView}>
                        <Text>organization, supplier, stock, interval</Text>
                        {isLoading ? <ActivityIndicator/> : (
                            <FlatList
                                data={data}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item } : any) => (
                                    <Text>{item.organization}, {item.supplier}, {item.stock}, {item.interval}</Text>
                                )}
                            />
                        )}
                    </View>
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
    head: { height: 40},
    row: { height: 28 },
    textTable: { textAlign: 'center' },
    wrapper: { flexDirection: 'row' },
    tableView:{

    }
});

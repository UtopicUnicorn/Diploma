import React, {useState} from "react";
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import {MaterialCommunityIcons, Ionicons, FontAwesome5} from "@expo/vector-icons";


export default function EditPurchaseScreen({route}: any){

    let [organization, setOrganization] = useState('');
    let [supplier, setSupplier] = useState('');
    let [stock, setStock] = useState('')


    if(route.params!=undefined){
        console.log(route.params);
        [organization, setOrganization] = useState(route.params['organization']);
        [supplier, setSupplier] = useState(route.params['supplier']);
        [stock, setStock] = useState(route.params['stock']);
    }


    return(
        <SafeAreaView>
            <ScrollView>
                {/*top part*/}
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Закупка</Text>
                    <Text style={styles.titleDate}>{route.params['date']}</Text>
                </View>
                {/*sum part*/}
                <View style={styles.sumView}>
                   <View style={styles.upperSumView}>
                       <Text>Оплачено 0</Text>
                       <Text>Сумма: {route.params.sum}₽</Text>
                   </View>
                    <TouchableOpacity style={styles.sumButtonsView}>
                        <MaterialCommunityIcons name="purse-outline" size={24} color="#804AE7" />
                        <Text>Внести оплату</Text>
                    </TouchableOpacity>
                   <View style={styles.sumButtonsDownView}>
                       <TouchableOpacity style={styles.sumButton}>
                           <Ionicons name="reload" size={24} color="#804AE7" />
                           <Text>Оформить возврат</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.sumButton}>
                           <FontAwesome5 name="receipt" size={24} color="#804AE7" />
                           <Text>Пробить чек</Text>
                       </TouchableOpacity>
                   </View>
                </View>
                {/*buttons*/}
                <View style={styles.closeButtonsView}>
                    <TouchableOpacity style={styles.closeButtons}>
                        <Text style={styles.closeButtonsText}>Записать</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButtons}>
                        <Text style={styles.closeButtonsText}>Записать и закрыть</Text>
                    </TouchableOpacity>
                </View>
                {/*form part*/}
                <View style={styles.formView}>
                    <Text style={styles.formTitle}>Организация</Text>
                    <TextInput
                        value={organization}
                        onChangeText={setOrganization}
                        style={styles.formInput}
                    />
                    <Text style={styles.formTitle}>Поставщик</Text>
                    <TextInput
                        value={supplier}
                        onChangeText={setSupplier}
                        style={styles.formInput}
                    />
                    <Text style={styles.formTitle}>Склад</Text>
                    <TextInput
                        value={stock}
                        onChangeText={setStock}
                        style={styles.formInput}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleView:{
        margin:20,
    },
    titleText:{
        fontSize: 25,
    },
    titleDate:{
        marginTop: 10,
        fontSize: 18
    },
    sumView:{
        // alignItems: "center",
        // justifyContent: "center",
        borderWidth: 1,
        borderColor: '#804EA7',
        margin: 10
    },
    upperSumView:{
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        margin: 10,
    },
    sumButtonsView:{
        flexDirection:'row',
        alignItems: 'center',
        margin: 10,
    },
    sumButtonsDownView:{
        flexDirection:'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between',

    },
    sumButton:{
        alignItems: 'center',
        flexDirection:'row',
    },
    closeButtonsView:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: 10,
    },
    closeButtons:{
        alignItems: "center",
        justifyContent: "center",
        margin:20,
        borderWidth:1,
        borderColor: '#804EA7',
        width: 150,
        height: 40,
    },
    closeButtonsText:{
        // padding: 10,
    },
    formView:{
        marginTop:30,
        marginLeft:10,
        marginRight:10,
    },
    formTitle:{
        marginTop:30,
    },
    formInput:{
        alignItems:'center',
        height:40,
        marginTop:10,
        justifyContent: "center",
        borderWidth:1,
        borderColor: '#804EA7',
        padding:10,
    }
})

import React from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity} from "react-native";

import NomenclatureService from "../../services/NomenclatureService";
import {CustomPicker} from "../../components/CustomPicker";
import {states as statesData, partners as partnersData} from "../../components/data";
import {styles} from '../Purchases/PurchasesScreen'
import {LinearGradient} from "expo-linear-gradient";
import {purchasesEnum} from "../../components/constants";
import {ItemPicker} from "../../components/ItemPicker";
import DealsService from "../../services/DealsService";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function AddDeal({navigation, route}: any){

    let [number, setNumber] = React.useState('');
    let [price, setPrice] = React.useState('');
    let [partner, setPartner] = React.useState('')
    let [items, setItems] = React.useState([])
    let [item, setItem] = React.useState('');
    let [itemId, setItemId] = React.useState('');
    let [state, setState] = React.useState('');
    let [amount, setAmount] = React.useState('');

    const [partnerModal, setPartnerModal] = React.useState(false);
    const [itemModal, setItemModal] = React.useState(false);
    const [stateModal, setStateModal] = React.useState(false);

    const getPartners = async () => {
       setPartnerModal(!partnerModal);
    }

    if(route.params!=undefined){
        [item, setItem] = React.useState(route.params['brand']  + ' ' + route.params['model'] +' '+ route.params['season']);
        [itemId, setItemId] = React.useState(route.params['id']);
    }

    const getItems = async () =>{
        const key = await AsyncStorage.getItem('key')
        await NomenclatureService.get(key).then(resp=>setItems(resp.data));
        setItemModal(!itemModal);
    }

    async function sendDeal(){
        const key  = await AsyncStorage.getItem('key');
        const body = {
            number : number,
            price: Number(price),
            partner : partner,
            item : itemId,
            state : state,
            amount : Number(amount),
        }

        await DealsService.post(body, key);
    }

    return(
        <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps={"handled"}>
                <View style={styles.center}>
                    <Text style={[styles.title, {marginTop: 20}]}>Совершение сделки</Text>
                </View>
                <View>
                    <Text style={styles.text}>Артикул</Text>
                    <TextInput
                        value={number}
                        onChangeText={setNumber}
                        style={styles.form}
                    />
                    <Text style={styles.text}>Сумма оплаты</Text>
                    <TextInput
                        value={price}
                        onChangeText={setPrice}
                        style={styles.form}
                        keyboardType={"numeric"}
                    />
                    <Text style={styles.text}>Контрагент</Text>
                    <TouchableOpacity onPress={()=>getPartners()}>
                        <Text style={styles.form}>{partner}</Text>
                    </TouchableOpacity>
                    <CustomPicker
                        modalOpen = {partnerModal}
                        setModalOpen = {setPartnerModal}
                        value = {setPartnerModal}
                        setValue = {setPartner}
                        items={partnersData}
                    />
                    <Text style={styles.text}>Товар</Text>
                    <TouchableOpacity onPress={()=>getItems()}>
                        <Text style={styles.form}>{item}</Text>
                    </TouchableOpacity>
                    <ItemPicker
                        modalOpen = {itemModal}
                        setModalOpen = {setItemModal}
                        value = {item}
                        setValue = {setItem}
                        items = {items}
                        setItemId = {setItemId}
                    />
                    <Text style={styles.text}>Состояние</Text>
                    <TouchableOpacity onPress={()=>setStateModal(!stateModal)}>
                        <Text style={styles.form}>{state}</Text>
                    </TouchableOpacity>
                    <CustomPicker
                        modalOpen = {stateModal}
                        setModalOpen = {setStateModal}
                        value = {state}
                        setValue = {setState}
                        items = {statesData}
                    />
                    <Text style={styles.text}>Количество</Text>
                    <TextInput
                        value = {amount}
                        onChangeText={setAmount}
                        style={styles.form}
                        keyboardType={"numeric"}
                    />
                    <View style={styles.saveButtonView}>
                        <LinearGradient
                            start={{x:0.0, y:0.2}}
                            end={{x:1.0, y:0.6}}
                            locations={[0.2498,0.7503]}
                            colors={['#804EA7','#4FB0C0']}>
                            <TouchableOpacity style={styles.button} onPress={sendDeal}>
                                <Text style={styles.buttonText}>{purchasesEnum.add}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

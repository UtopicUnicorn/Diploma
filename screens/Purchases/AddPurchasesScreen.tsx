import React, {useEffect, useState} from 'react'
import {Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {purchasesEnum} from "../../components/constants";
import {LinearGradient} from "expo-linear-gradient";
import PurchasesService from "../../services/PurchasesService";
import {styles} from "./PurchasesScreen";
import {navigationEnums} from "../../components/navigationEnums";
import {CustomPicker} from "../../components/CustomPicker";
import {docs as docsData, item as itemData} from "../../components/data";
import PriceService from "../../services/PriceService";
import PartnersService from "../../services/PartnersService";
import {PriceRulePicker} from "../../components/PriceRulePicker";
import NomenclatureService from "../../services/NomenclatureService";
import {ItemPicker} from "../../components/ItemPicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddPurchases({navigation, route}: any){

    const [organization, setOrganization] = React.useState("");
    const [supplier, setSupplier] = React.useState("");
    const [stock, setStock] = React.useState("");
    // const [interval, setInterval] = React.useState("");
    const [sum, setSum] = React.useState("");
    const [partner, setPartner] = React.useState("");
    const [docsModal, setDocsModal] = React.useState(false);
    const [doc, setDoc] = React.useState("")
    const [itemModal, setItemModal] = React.useState(false);
    const [item, setItem] = React.useState("");
    const [partnerId, setPartnerId] = React.useState('');
    const [tempD, setTempD] = useState([]);
    const [partnersForRule, setPartnersForRule] = useState({});
    const [amount, setAmount] = useState('');
    const [partnerModal, setPartnerModal] = useState(false);
    const [itemId, setItemID] = useState('');
    const [addInvest, setAddInvest] = useState(0);
    const OpenPickerPartner = async ()=>{
        const key = await AsyncStorage.getItem('key');
        await PartnersService.get(key).then(resp=>setTempD(resp.data));
        setPartnerModal(!partnerModal);
    }

    const OpenPickerItem = async ()=>{
        const key = await AsyncStorage.getItem('key');
        await NomenclatureService.get(key).then(resp=>setTempD(resp.data));
        setItemModal(!itemModal);
    }


    const changePartner = async (id : string ) => {
        setPartnerId(id);
        let {data} = await PartnersService.getOne(id);
        setPartnersForRule(data);
    }

    useEffect(()  => {
        console.log(partnerId);
        if(partnerId!=undefined && sum) {
            setAddInvest(Number(sum) * (10/100));
        } else {
            setAddInvest(0);
        }
    })




    async function sendPurchase(){
        const body = {
            organization: organization,
            supplier: supplier,
            stock: stock,
            // interval: interval,
            sum: Number(sum),
            partner: partnerId,
            item: itemId,
            document: doc,
            addinvest: addInvest
        }
        const key = await AsyncStorage.getItem('key');
        let {data} = await PurchasesService.post(body, key).then(()=>navigation.navigate(navigationEnums.purchases));
    }

    // @ts-ignore
    return(
        <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps={"handled"}>
                <View style={styles.center} >
                    <Text style={styles.title}>{purchasesEnum.title}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{purchasesEnum.organization}</Text>
                    <TextInput
                        onChangeText={setOrganization}
                        value={organization}
                        style={styles.form}
                    />

                    <Text style={styles.text}>{purchasesEnum.supplier}</Text>
                    <TextInput
                        onChangeText={setSupplier}
                        value={supplier}
                        style={styles.form}
                    />

                    <Text style={styles.text}>{purchasesEnum.stock}</Text>
                    <TextInput
                        onChangeText={setStock}
                        value={stock}
                        style={styles.form}
                    />

                    <Text style={styles.text}>{purchasesEnum.docs}</Text>
                    <TouchableOpacity onPress={()=>setDocsModal(!docsModal)}>
                        <Text style={styles.form}>{doc}</Text>
                    </TouchableOpacity>
                    <CustomPicker
                        modalOpen = {docsModal}
                        setModalOpen = {setDocsModal}
                        value = {doc}
                        setValue={setDoc}
                        items = {docsData}
                    />

                    <Text style={styles.text}>{purchasesEnum.item}</Text>
                    <TouchableOpacity onPress={OpenPickerItem}>
                        <Text style={styles.form}>{item}</Text>
                    </TouchableOpacity>
                    <ItemPicker
                        modalOpen = {itemModal}
                        setModalOpen = {setItemModal}
                        value = {item}
                        setValue={setItem}
                        items = {tempD}
                        setItemId={setItemID}
                    />

                    <Text style={styles.text}>{purchasesEnum.amount}</Text>
                    <TextInput
                        onChangeText={setAmount}
                        value={amount}
                        style={styles.form}
                        keyboardType={"numeric"}
                    />

                    <Text style={styles.text}>{purchasesEnum.sum}</Text>
                    <TextInput
                        onChangeText={setSum}
                        value={sum}
                        style={styles.form}
                        keyboardType={"numeric"}
                    />

                    <Text style={styles.text}>{purchasesEnum.partner}</Text>
                    <TouchableOpacity
                        onPress={OpenPickerPartner}>
                        <Text style={styles.form}>{partner}</Text>
                    </TouchableOpacity>
                    <PriceRulePicker
                        modalOpen = {partnerModal}
                        setModalOpen = {setPartnerModal}
                        value = {partner}
                        setValue = {setPartner}
                        items={tempD}
                        setRuleId={changePartner}
                    />
                        <Text style={styles.text}>{purchasesEnum.addInvest}</Text>
                        <Text style={styles.form}>{addInvest}</Text>

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
            </ScrollView>
        </SafeAreaView>
    )
}



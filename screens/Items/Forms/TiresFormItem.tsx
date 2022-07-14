import React, {useEffect, useState} from 'react';
import {
    Alert,
    FlatList,
    Image,
    ImageBackground, LogBox,
    Pressable,
    SafeAreaView,
    ScrollView, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {Feather, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

import * as ImagePicker from "expo-image-picker";
import ItemsService from "../../../services/ItemsService";
import {itemStyles as styles} from "../itemStyles";
import {CustomPicker} from "../../../components/CustomPicker";
import {brandsTires as dataBrands, modelsTires as dataModels, stores as dataStores} from "../../../components/data";
import Purchases from "../../Purchases/PurchasesScreen";
import PurchasesService from "../../../services/PurchasesService";
import {PriceRulePicker} from "../../../components/PriceRulePicker";
import {NewItemPicker} from "../../../components/newItemPicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Item = ({item, image } : any) => (
    <View style={[styles.item]}>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Брэнд</Text>
            <Text style={[styles.itemText]}>{item.item.item.brand}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Модель</Text>
            <Text style={[styles.itemText]}>{item.item.item.model}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Размеры</Text>
            <Text style={[styles.itemText]}>{item.item.item.width}/{item.item.item.profile} R{item.item.item.diameter} {item.item.item.index}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Площадка</Text>
            <Text style={[styles.itemText]}>{item.store}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Кол-во</Text>
            <Text style={[styles.itemText]}>{item.amount}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Цена</Text>
            <Text style={[styles.itemText]}>{item.price}</Text>
        </View>
        <View>
            <Image source={{ uri: `http://192.168.3.9:3000/items/image/${item.image}` }} style={{ width: 200, height: 200, alignSelf:'center' }} />
        </View>
        <TouchableOpacity style={styles.itemOps} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </View>
);

function deleteItem(id: string) : void{
    fetch('http://localhost:3000/items' + `/${id}`, { method: 'DELETE' })
}


export default function TiresFormItem(){
    const [image, setImage] = useState();
    const [selectedId, setSelectedId] = useState(null);
    const [data, setData] = useState([]);

    const [purchases, setPurchases] =useState([])
    const [item, setItem] = useState('')
    const [itemId, setItemId] = useState('')
    const [brandModal, setBrandModal] = useState(false);
    const [modelModal, setModelModal] = useState(false);
    const [storesModal, setStoresModal] = useState(false);
    const [purchasesModal, setPurchasesModal] = useState(false);
    let [BrandValue, brand] = React.useState("");
    let [ModelValue, model] = React.useState("");
    let [ProfileValue, profile] = React.useState("");
    let [DiameterValue, diameter] = React.useState("");
    let [WidthValue, width] = React.useState("");
    let [StoreValue, store] = React.useState("");
    let [AmountValue, amount] = React.useState("");
    let [StatusValue, status] = React.useState("");
    let [PriceValue, price] = React.useState("");
    let [season, setSeason] = React.useState("");
    const pickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.cancelled){
            // @ts-ignore
            setImage(result);
        }
    }

    const renderItem = ({item} : any)=> {
        return (
            <Item
                item={item}
                image={image}
            />
        );
    }


    const sendForm= async ()=>{

        let file = image;

        let formdata = new FormData();


        const key = await AsyncStorage.getItem('key');
        // @ts-ignore
        formdata.append("file", {uri: file.uri, name: `1.jpg`, type:'image/jpeg'});
        formdata.append("item", itemId);
        formdata.append("store", StoreValue);
        formdata.append("amount", AmountValue);
        formdata.append("price", PriceValue);
        console.log(file);
        fetch(`http://192.168.3.9:3000/items/${key}`,{
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata
        }).then(response =>{
            console.log('image uploaded')
        }).catch(err =>{
            console.log(err)
        })
    }

    //get request
    const getItems = async ()=>{
        const key = await AsyncStorage.getItem('key');
        await ItemsService.get(key).then(resp=>{setData(resp.data)});
    }

    const getPurchases = async ()=>{
        const key = await AsyncStorage.getItem('key');
        await PurchasesService.get(key).then(resp=>{setPurchases(resp.data)});
        setPurchasesModal(!purchasesModal);
    }

    useEffect(()=>{LogBox.ignoreLogs(['VirtualizedLists should never be nested']); setInterval(()=>getItems(), 5000)})


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.field}>
                    <View>
                        <Text>Доступный товар</Text>
                        <TouchableOpacity style={styles.input} onPress={getPurchases}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                        <NewItemPicker
                            modalOpen = {purchasesModal}
                            setModalOpen = {setPurchasesModal}
                            value = {item}
                            setValue = {setItem}
                            items={purchases}
                            setItemId={setItemId}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Кол-Во'}
                            onChangeText={amount}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Цена'}
                            onChangeText={ price}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Cтатус'}
                            onChangeText={status}
                            placeholderTextColor={'#808080'}
                        />
                        <TouchableOpacity style={styles.input} onPress={()=>setStoresModal(!storesModal)}>
                            <Text>{StoreValue}</Text>
                        </TouchableOpacity>
                        <CustomPicker
                            modalOpen ={storesModal}
                            setModalOpen={setStoresModal}
                            value={StoreValue}
                            setValue={store}
                            items={dataStores}
                        />

                        <ImageBackground
                            resizeMode={"cover"}
                            style={styles.img}
                            source={
                                require('../../../assets/button-bg.png')
                            }
                        >
                            <TouchableOpacity style={styles.button} onPress={pickImage}>
                                <Text style={styles.text}>Добавить фотографию</Text>
                            </TouchableOpacity>
                        </ImageBackground>

                        <View style={styles.saveButtonView}>
                            <LinearGradient
                                start={{x:0.0, y:0.2}}
                                end={{x:1.0, y:0.6}}
                                locations={[0.2498,0.7503]}
                                colors={['#804EA7','#4FB0C0']}>
                                <TouchableOpacity style={styles.saveButton} onPress={sendForm}>
                                    <Text style={styles.text}>Сохранить</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </View>

                <FlatList nestedScrollEnabled={true}
                          data={data}
                          renderItem={renderItem}
                          keyExtractor={({ id }, index) => id}
                          extraData={selectedId}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

import React, {useEffect, useState} from "react";
import {
    ImageBackground,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    View, FlatList, LogBox
} from "react-native";

import * as ImagePicker from 'expo-image-picker';
import {LinearGradient} from "expo-linear-gradient";
import {FontAwesome} from "@expo/vector-icons";
import ItemsRepository from "../Repositories/ItemsRepository";

const Item = ({item, onPress, backgroundColor, textColor, image } : any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.itemText, textColor]}>Брэнд {item.brand}</Text>
        <Text style={[styles.itemText, textColor]}>Модель {item.model}</Text>
        <Text style={[styles.itemText, textColor]}>Ширина {item.width}</Text>
        <Text style={[styles.itemText, textColor]}>Профиль {item.profile}</Text>
        <Text style={[styles.itemText, textColor]}>Диаметр {item.diameter}</Text>
        <Text style={[styles.itemText, textColor]}>Количество {item.amount}</Text>
        <Text style={[styles.itemText, textColor]}>Цена {item.price}</Text>
        <Text style={[styles.itemText, textColor]}>Площадка {item.store}</Text>
        <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf:'center' }} />
        <TouchableOpacity style={styles.itemText} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </TouchableOpacity>
);

function deleteItem(id: string) : void{
    fetch('http://localhost:3000/items' + `/${id}`, { method: 'DELETE' })
}


export default function ItemsScreen(){
    const [image, setImage] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [data, setData] = useState([]);

    let [BrandValue, brand] = React.useState("");
    let [ModelValue, model] = React.useState("");
    let [ProfileValue, profile] = React.useState("");
    let [DiameterValue, diameter] = React.useState("");
    let [WidthValue, width] = React.useState("");
    let [StoreValue, store] = React.useState("");
    let [AmountValue, amount] = React.useState("");
    let [StatusValue, status] = React.useState("");
    let [PriceValue, price] = React.useState("");

    const pickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.cancelled){
            setImage(result.uri);
        }
    }

    const renderItem = ({item} : any)=> {
        const backgroundColor = item.id === selectedId ? "#808080" : "#fff";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                image={image}
                textColor={{ color }}
            />
        );
    }

    const sendForm= async ()=>{

        let data = await ItemsRepository.post({
                    brand: BrandValue,
                    model: ModelValue,
                    profile: ProfileValue,
                    diameter: Number(DiameterValue),
                    width: Number(WidthValue),
                    store: StoreValue,
                    amount: Number(AmountValue),
                    status: StatusValue,
                    price: Number(PriceValue),
        }).then(()=>getItems());
    }

    //get request
    const getItems = async ()=>{
        await ItemsRepository.get().then(resp=>{setData(resp.data)}).catch(e=>{console.log(e)}).finally();
    }

    useEffect(()=>{LogBox.ignoreLogs(['VirtualizedLists should never be nested'])})


    // @ts-ignore
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.chooseItemView}>
                    <View style={styles.chooseItemViewTop}>
                        <TouchableOpacity>
                            <Text>Шины</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Диски</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Услуги</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Колпаки</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.chooseItemViewBottom}>
                        <TouchableOpacity>
                            <Text>Камеры</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Датчики</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Крепеж</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>Размер шины</Text>
                    <View style={styles.sizeOptionsView}>
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'Ширина'}
                            onChangeText={width}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'Профиль'}
                            onChangeText={profile}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'Диаметер'}
                            onChangeText={diameter}
                            placeholderTextColor={'#808080'}
                        />
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder={'Брэнд'}
                            onChangeText={brand}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Модель'}
                            onChangeText={model}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Площадка'}
                            onChangeText={store}
                            placeholderTextColor={'#808080'}
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
                        <ImageBackground
                            resizeMode={"cover"}
                            style={styles.img}
                            source={
                                require('../assets/button-bg.png')
                            }
                        >
                            <Pressable style={styles.button} onPress={pickImage}>
                                <Text style={styles.text}>Добавить фотографию</Text>
                            </Pressable>
                        </ImageBackground>
                        <View style={styles.chosenImgView}>
                            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        </View>

                        <View style={styles.saveButtonView}>
                            <LinearGradient
                                start={{x:0.0, y:0.2}}
                                end={{x:1.0, y:0.6}}
                                locations={[0.2498,0.7503]}
                                colors={['#804EA7','#4FB0C0']}>
                                <Pressable style={styles.saveButton} onPress={sendForm}>
                                    <Text style={styles.text}>Сохранить</Text>
                                </Pressable>
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

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
    },
    field:{
        margin: 20,
        borderWidth:1,
        borderColor:'#804EA7',
        padding:20,
    },
    sizeOptionsView:{
        marginTop:10,
        flexDirection:"row",
        // alignItems:"center",
        // justifyContent: "center",
    },
    sizeOptions:{
        borderWidth:1,
        borderColor:'#804EA7',
        width:80,
        height:40,
        marginLeft: 10,
        marginRight: 10,
        alignItems:"center",
        justifyContent: "center",
    },
    input:{
        height:40,
        margin:'3%',
        borderWidth: 1,
        borderColor: '#804EA7',
        padding: 10,
        // marginTop:'15%',
    },
    text:{
        alignItems:'center',
        color:'#fff'
    },
    img:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:180,
        height:30,
        marginLeft:10,
    },
    button:{
        flexDirection:'row',
        elevation: 2,
        // borderWidth: 1,
        height:30,
        width: 180,
        alignItems:'center',
        justifyContent: 'center',
        // borderColor:'#804EA7',
    },
    chosenImgView:{
        marginTop: 30,
    },
    saveButtonView:{
        alignItems:"center",
        margin:20,
        marginTop:50,
    },
    saveButton:{
        alignItems:'center',
        justifyContent: 'center',
        height:40,
        width: 300,
        borderWidth:1,
    },
    item:{
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
    chooseItemView:{

    },
    chooseItemViewTop:{

    },
    chooseItemViewBottom:{

    }
})

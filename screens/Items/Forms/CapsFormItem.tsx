import React, {useState} from "react";

import {itemStyles as styles} from "../itemStyles";
import {
    FlatList, Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import {FontAwesome} from "@expo/vector-icons";



const Item = ({item, image } : any) => (
    <TouchableOpacity style={[styles.item]}>
        <View>
            <Text style={[styles.itemText]}>Брэнд</Text>
            <Text style={[styles.itemText]}>{item.brand}</Text>
        </View>
        <View>
            <Text style={[styles.itemText]}>Модель</Text>
            <Text style={[styles.itemText]}>{item.model}</Text>
        </View>
        <View>
            <Text style={[styles.itemText]}>Профиль</Text>
            <Text style={[styles.itemText]}>{item.profile}</Text>
        </View>
        <View>
            <Text style={[styles.itemText]}>Диаметр</Text>
            <Text style={[styles.itemText]}>{item.diameter}</Text>
        </View>
        <View>
            <Text style={[styles.itemText]}>Площадка</Text>
            <Text style={[styles.itemText]}>{item.store}</Text>
        </View>
        <View>
            <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf:'center' }} />
        </View>
        <TouchableOpacity style={styles.itemText} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </TouchableOpacity>
);

function deleteItem(id: string) : void{
    fetch('http://localhost:3000/items' + `/${id}`, { method: 'DELETE' })
}

export default function CapsFormItem () {

    let [brand, setBrand] = React.useState("");
    let [model, setModel] = React.useState("");
    let [diameter, setDiameter] = React.useState("");
    let [color, setColor] = React.useState("");
    let [application, setApplication] = React.useState('');
    let [image, setImage] = useState(null);

    let [selectedId, setSelectedId] = useState(null);
    let [data, setData] = useState([]);

    const pickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.cancelled){
            // @ts-ignore
            setImage(result.uri);
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

    return(
        <SafeAreaView style={styles.container}>
            {/*<ScrollView>*/}
            <View style={styles.field}>
                <Text>Колпаки</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Брэнд'}
                        onChangeText={setBrand}
                        placeholderTextColor={'#808080'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Модель'}
                        onChangeText={setModel}
                        placeholderTextColor={'#808080'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Диаметр'}
                        onChangeText={setDiameter}
                        placeholderTextColor={'#808080'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Цвет'}
                        onChangeText={setColor}
                        placeholderTextColor={'#808080'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Прим-е'}
                        onChangeText={setApplication}
                        placeholderTextColor={'#808080'}
                    />
                    <ImageBackground
                        resizeMode={"cover"}
                        style={styles.img}
                        source={
                            require('../../../assets/button-bg.png')
                        }
                    >
                        <Pressable style={styles.button} onPress={pickImage}>
                            <Text style={styles.text}>Добавить фотографию</Text>
                        </Pressable>
                    </ImageBackground>

                    <View style={styles.saveButtonView}>
                        <LinearGradient
                            start={{x:0.0, y:0.2}}
                            end={{x:1.0, y:0.6}}
                            locations={[0.2498,0.7503]}
                            colors={['#804EA7','#4FB0C0']}>
                            <Pressable style={styles.saveButton}>
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
            {/*</ScrollView>*/}
        </SafeAreaView>
    )
}

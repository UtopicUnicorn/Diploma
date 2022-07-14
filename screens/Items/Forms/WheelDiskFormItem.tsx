import React, {useState} from 'react';
import * as ImagePicker from "expo-image-picker";
import {
    FlatList,
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {itemStyles as styles} from "../itemStyles";
import {Feather, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";


const Item = ({item, image } : any) => (
    <TouchableOpacity style={[styles.item]}>
        <Text style={[styles.itemText]}>Брэнд {item.brand}</Text>
        <Text style={[styles.itemText]}>Модель {item.model}</Text>
        <Text style={[styles.itemText]}>Ширина {item.width}</Text>
        <Text style={[styles.itemText]}>Профиль {item.profile}</Text>
        <Text style={[styles.itemText]}>Диаметр {item.diameter}</Text>
        <Text style={[styles.itemText]}>Количество {item.amount}</Text>
        <Text style={[styles.itemText]}>Цена {item.price}</Text>
        <Text style={[styles.itemText]}>Площадка {item.store}</Text>
        <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf:'center' }} />
        <TouchableOpacity style={styles.itemText} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </TouchableOpacity>
);

function deleteItem(id: string) : void{
    fetch('http://localhost:3000/items' + `/${id}`, { method: 'DELETE' })
}

export default function WheelDiskFormItem () {
    const [brand, setBrand] = React.useState("");
    const [model, setModel] = React.useState("");
    const [diameter, setDiameter] = React.useState("");
    const [pcd, setPCD] = React.useState("");
    const [width, setWidth] = React.useState("");
    const [et, setET] = React.useState("");
    const [co, setCO] = React.useState("");
    const [diskType, setDiskType] = React.useState("");
    const [color, setColor] = React.useState("");
    const [image, setImage] = useState(null);

    const [selectedId, setSelectedId] = useState(null);
    const [data, setData] = useState([]);

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
                <View style={styles.field}>
                    <Text>Размеры диска</Text>
                    <View style={styles.sizeOptionsView}>
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'Ширина'}
                            onChangeText={setWidth}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'PCD'}
                            onChangeText={setPCD}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.sizeOptions}
                            placeholder={'Диаметр'}
                            onChangeText={setDiameter}
                            placeholderTextColor={'#808080'}
                        />
                    </View>
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
                            placeholder={'Ц.О.'}
                            onChangeText={setCO}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'ET'}
                            onChangeText={setET}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Тип'}
                            onChangeText={setDiskType}
                            placeholderTextColor={'#808080'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Цвет'}
                            onChangeText={setColor}
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
        </SafeAreaView>
    )
}

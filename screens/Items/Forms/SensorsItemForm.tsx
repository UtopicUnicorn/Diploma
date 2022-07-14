import React, {useState} from 'react'

import {itemStyles as styles} from "../itemStyles";
import {FlatList, ImageBackground, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";

export default function SensorsItemForm(){

    let [brand, setBrand] = React.useState("");
    let [model, setModel] = React.useState("");
    let [image, setImage] = useState(null);

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
    return(
        <SafeAreaView style={styles.container}>
            {/*<ScrollView>*/}
            <View style={styles.field}>
                <Text>Датчики</Text>
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
                    {/*<View style={styles.chosenImgView}>*/}
                    {/*    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}*/}
                    {/*</View>*/}

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
            {/*<FlatList nestedScrollEnabled={true}*/}
            {/*          data={data}*/}
            {/*          renderItem={renderItem}*/}
            {/*          keyExtractor={({ id }, index) => id}*/}
            {/*          extraData={selectedId}*/}
            {/*/>*/}
            {/*</ScrollView>*/}
        </SafeAreaView>
    )
}

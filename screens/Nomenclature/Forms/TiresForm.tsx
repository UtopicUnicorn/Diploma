import React, {useState} from "react";
import {Pressable, StyleSheet, Text, TextInput, View, Modal, TouchableOpacity, Image} from "react-native";
import NomenclatureService from "../../../services/NomenclatureService";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import {CustomPicker} from "../../../components/CustomPicker";
import {year as dataYear, brandsTires as dataBrands, modelsTires as dataModels} from "../../../components/data"
import {seasonEnums} from "../../../components/constants";
import { RadioButton } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TiresForm( status: Record<any, any>) {
    let [brand, setBrand] = React.useState("");
    let [model, setModel] = React.useState("");
    let [profile, setProfile] = React.useState("");
    let [diameter, setDiameter] = React.useState("");
    let [width, setWidth] = React.useState("");
    let [index, setIndex] = React.useState("")
    let [description, setDescription] = React.useState("");
    let [season, setSeason] = React.useState(seasonEnums.summer);
    const [year, setYear] = React.useState('')
    const [yearModal, setYearModal] = useState(false);
    // const [year1, setYear] = useState('');

    const [brandModal, setBrandModal] = useState(false);
    const [modelModal, setModelModal] = useState(false);

    const sendForm = async ()=> {
        console.log(status.status);
        const key = await AsyncStorage.getItem('key')
        let data = await NomenclatureService.post(key,{
            brand: brand,
            model: model,
            profile: Number(profile),
            diameter: Number(diameter),
            width: Number(width),
            index: index,
            description: description,
            year: Number(year),
            status: status.status,
            type: "tires",
            season: season,
        })
    }
    return(
    <View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center', marginTop: 20}}>
            {/*<TouchableOpacity onPress={()=>setSeason(seasonEnums.summer)}>*/}
            {/*<Feather style={styles.icon} name="sun" size={24} color="black" />*/}
            {/*</TouchableOpacity>*/}

            <TouchableOpacity onPress={()=>setSeason(seasonEnums.summer)}>
                <Feather style={styles.icon} name="sun" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setSeason(seasonEnums.winter)}>
            <FontAwesome5 style={styles.icon} name="snowflake" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> setSeason(seasonEnums.studded)}>
            <Image
                style={styles.tinyLogo}
                source={
                    require('../../../assets/studded.jpeg')
                }
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> setSeason(seasonEnums.norwegian)}>
            <Image
                style={styles.tinyLogo}
                source={
                    require('../../../assets/norwegian.jpg')
                }
            />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.name}>Бренд</Text>
            <TouchableOpacity style={styles.form}
                              onPress={()=>setBrandModal(!brandModal)}
            >
                <Text>{brand}</Text>
            </TouchableOpacity>
            <CustomPicker
                modalOpen ={brandModal}
                setModalOpen={setBrandModal}
                value={brand}
                setValue={setBrand}
                items={dataBrands}
            />
            <Text style={styles.name}>Модель</Text>
            <TouchableOpacity style={styles.form}
                              onPress={()=>setModelModal(!modelModal)}
            >
                <Text>{model}</Text>
            </TouchableOpacity>
            <CustomPicker
                modalOpen ={modelModal}
                setModalOpen={setModelModal}
                value={model}
                setValue={setModel}
                items={dataModels}
            />

        </View>
        <View>
        <Text style={styles.name}>Ширина</Text>
        <TextInput
            onChangeText={setWidth}
            style={styles.form}
        />
        <Text style={styles.name}>Профиль</Text>
        <TextInput
            onChangeText={setProfile}
            style={styles.form}
        />
        <Text style={styles.name}>Диаметр</Text>
        <TextInput
            onChangeText={setDiameter}
            style={styles.form}
        />
        <Text style={styles.name}>Индекс</Text>
        <TextInput
            onChangeText={setIndex}
            style={styles.form}
        />
        <Text style={styles.name}>Год</Text>
        <TouchableOpacity style={styles.form}
               onPress={()=>setYearModal(!yearModal)}
        >
            <Text>{year}</Text>
        </TouchableOpacity>
        <CustomPicker
            modalOpen ={yearModal}
            setModalOpen={setYearModal}
            value={year}
            setValue={setYear}
            items={dataYear}
        />
        <Text style={styles.name}>Описание</Text>
        <TextInput
            onChangeText={setDescription}
            style={styles.formarea}
            multiline={true}
            numberOfLines={2}
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={sendForm}>
            <Text style={styles.text}>Добавить</Text>
        </TouchableOpacity>
    </View>

 )
}

const styles = StyleSheet.create({
    form: {
        height: 40,
        margin: '3%',
        borderWidth: 1,
        borderColor:'#804EA7',
        padding: 10,
        // marginTop:'15%',
    },
    formarea: {
        height: 80,
        margin: '3%',
        borderWidth: 1,
        borderColor:"#804EA7",
        padding: 10,
        // marginTop:'15%',
    },
    text: {
        alignSelf: "center"
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor:'#804EA7',
        margin: "3%",
        marginTop: "2%",
    },
    name: {
        marginTop: 20,
        marginLeft: '3%'
    },
    icon:{
        marginLeft: 20,
        marginRight: 20,
    },
    tinyLogo:{
        width: 30,
        height: 30,
        marginLeft: 20,
        marginRight: 20,
    }
})

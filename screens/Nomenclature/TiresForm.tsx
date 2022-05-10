import React, {useState} from "react";
import {Pressable, StyleSheet, Text, TextInput, View, Modal, TouchableOpacity} from "react-native";
import NomenclatureRepository from "../../Repositories/NomenclatureRepository";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import {CustomPicker} from "../../components/CustomPicker";
import {year as dataYear} from "../../components/data"


export default function TiresForm( status: Record<any, any>) {
    let [BrandValue, brand] = React.useState("");
    let [ModelValue, model] = React.useState("");
    let [ProfileValue, profile] = React.useState("");
    let [DiameterValue, diameter] = React.useState("");
    let [WidthValue, width] = React.useState("");
    let [IndexValue, index] = React.useState("")
    let [DescriptionValue, description] = React.useState("");
    const [year, setYear] = React.useState('')
    const [yearModal, setYearModal] = useState(false);
    // const [year1, setYear] = useState('');


    const sendForm = async ()=> {
        let data = await NomenclatureRepository.post({
            brand: BrandValue,
            model: ModelValue,
            profile: ProfileValue,
            diameter: Number(DiameterValue),
            width: Number(WidthValue),
            index: IndexValue,
            description: DescriptionValue,
            year: Number(year),
            status: status['status'],
            type: "tires",
            season: "summer",
        })
    }
    return(
    <View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'center', marginTop: 20}}>
            <Feather style={styles.icon} name="sun" size={24} color="black" />
            <FontAwesome5 style={styles.icon} name="snowflake" size={24} color="black" />
            <MaterialCommunityIcons style={styles.icon} name="nail" size={24} color="black" />
            <FontAwesome style={styles.icon} name="wheelchair" size={24} color="black" />
        </View>
        <View>
            <Text style={styles.name}>Бренд</Text>
            <TextInput
                onChangeText={brand}
                style={styles.form}
            />
            <Text style={styles.name}>Модель</Text>
            <TextInput
                onChangeText={model}
                style={styles.form}
            />
        </View>
        <View>
        <Text style={styles.name}>Ширина</Text>
        <TextInput
            onChangeText={width}
            style={styles.form}
        />
        <Text style={styles.name}>Профиль</Text>
        <TextInput
            onChangeText={profile}
            style={styles.form}
        />
        <Text style={styles.name}>Диаметр</Text>
        <TextInput
            onChangeText={diameter}
            style={styles.form}
        />
        <Text style={styles.name}>Индекс</Text>
        <TextInput
            onChangeText={index}
            style={styles.form}
        />
        <Text style={styles.name}>Год</Text>
        {/*<TextInput*/}
        {/*    onChangeText={year}*/}
        {/*    style={styles.form}*/}
        {/*/>*/}
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
            onChangeText={description}
            style={styles.formarea}
            multiline={true}
            numberOfLines={2}
        />
        </View>
        <Pressable style={styles.button} onPress={sendForm}>
            <Text style={styles.text}>Добавить</Text>
        </Pressable>
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
    }
})

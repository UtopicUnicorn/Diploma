import React from "react";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import NomenclatureRepository from "../Repositories/NomenclatureRepository";
import TiresForm from "./Nomenclature/TiresForm";
import WheelDiskForm from "./Nomenclature/WheelDiskForm";
import CapsForm from "./Nomenclature/CapsForm";
import SensorsForm from "./Nomenclature/SensorsForm";
import TireChamberForm from "./Nomenclature/TireChamberForm";



export default function AddNomenclature ({navigation}: any){
    // let [BrandValue, brand] = React.useState("");
    // let [ModelValue, model] = React.useState("");
    // let [ProfileValue, profile] = React.useState("");
    // let [DiameterValue, diameter] = React.useState("");
    // let [WidthValue, width] = React.useState("");
    // let [IndexValue, index] = React.useState("")
    // let [DescriptionValue, description] = React.useState("");
    // let [YearValue, year] = React.useState("");

    let [item, setItem] = React.useState("tires");
    let [status, setStatus] = React.useState("new");


    // const sendForm = async ()=> {
    //     let data = await NomenclatureRepository.post({
    //                 brand: BrandValue,
    //                 model: ModelValue,
    //                 profile: ProfileValue,
    //                 diameter: Number(DiameterValue),
    //                 width: Number(WidthValue),
    //                 index: IndexValue,
    //                 description: DescriptionValue,
    //                 year: Number(YearValue)
    //     })
    // }


    const Choose =()=>{
        switch (item){
            case("tires"):{
                return <TiresForm status={status}/>;
            }
            case("disks"):{
                return <WheelDiskForm status={status}/>;
            }
            case ("caps"):{
                return <CapsForm status={status}/>;
            }
            case ("sensors"):{
                return <SensorsForm status={status}/>;
            }
            case ("chamber"):{
                return <TireChamberForm status={status}/>;
            }
            default:{
                return <TiresForm status={status}/>;
            }
        }
    }


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Title area*/}
                <View style={styles.center} >
                    <Text style={styles.title}>Каталог номенклатуры</Text>
                </View>
                {/* Buttons area*/}
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{setItem('tires')}}>
                        <Text style={styles.text}>Шины</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{setItem('disks')}} >
                        <Text style={styles.text}>Диски</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.text}>Услуги</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{setItem('caps')}}>
                        <Text style={styles.text}>Колпаки</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{setItem('chamber')}}>
                        <Text style={styles.text}>Камеры</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{setItem('sensors')} }>
                        <Text style={styles.text}>Датчики</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Крепеж</Text>
                    </TouchableOpacity>
                </View>

                {/*NEW/Old buttons*/}
                <View style={styles.oldnew}>
                    <TouchableOpacity style={styles.button} onPress={()=>{setStatus("new")}}>
                        <Text style={styles.text}>NEW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{setStatus("old")}}>
                        <Text style={styles.text}>Б/У</Text>
                    </TouchableOpacity>
                </View>
                {Choose()}
                {/*<TiresForm/>*/}
            </ScrollView>


        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center:{
        alignItems:'center',
    },
    title:{
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        marginBottom: '7%'
    },
    form:{
        height:40,
        margin:'3%',
        borderWidth: 1,
        padding: 10,
        // marginTop:'15%',
    },
    formarea:{
        height:80,
        margin:'3%',
        borderWidth: 1,
        padding: 10,
        // marginTop:'15%',
    },
    text:{
        alignSelf: "center"
    },
    button:{
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor:'#804EA7',
        margin:"3%",
        marginTop:"2%",
    },
    oldnew:{
        marginTop:'5%',
    },
    name:{
        marginTop:20,
        marginLeft:'3%'
    },

});

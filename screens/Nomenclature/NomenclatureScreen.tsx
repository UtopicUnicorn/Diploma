import React, {useEffect, useState} from "react";
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput, Pressable, ScrollView, ActivityIndicator, FlatList, LogBox,
} from "react-native";
import {EvilIcons, FontAwesome} from '@expo/vector-icons';
import NomenclatureService from "../../services/NomenclatureService";
import {nomenclatureEnum, seasonEnums} from "../../components/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";



const switchSeason = (item: any)=>{
    switch (item.season) {
        case (seasonEnums.summer):{
            return(
                    <Text style={[styles.itemText]}>{seasonEnums.summer}</Text>
            )
        }

        case (seasonEnums.winter):{
            return(
                <Text style={[styles.itemText]}>{seasonEnums.winter}</Text>
            )
        }
        case (seasonEnums.studded):
            return(
                <Text style={[styles.itemText]}>{seasonEnums.studded}</Text>
            )
        case (seasonEnums.norwegian):{
            return(
                <Text style={[styles.itemText]}>{seasonEnums.norwegian}</Text>
            )
        }
    }
}


//displayed item
const Item = ({item} : any) => (
    <View style={[styles.item]}>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Брэнд</Text>
            <Text style={[styles.itemText]}>{item.brand}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Модель</Text>
            <Text style={[styles.itemText]}>{item.model}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Размеры</Text>
            <Text style={[styles.itemText]}>{item.width}/{item.profile} R{item.diameter} {item.index}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Год</Text>
            <Text style={[styles.itemText]}>{item.year}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Тип</Text>
            <Text style={[styles.itemText]}>{nomenclatureEnum.tire}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Сезон</Text>
            {switchSeason(item)}
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Описание</Text>
            <Text style={[styles.itemText]}>{item.description}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Состояние</Text>
            <Text style={[styles.itemText]}>{item.status}</Text>
        </View>
        <TouchableOpacity style={styles.itemOps} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </View>
);

//delete selected item
function deleteItem(id: string) : void{
    NomenclatureService.delete(id).then(r=>console.log('ok'));
}

export default function Nomenclature (){
    const [SearchValue, search] = React.useState("Поиск");
    const [selectedId, setSelectedId] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    //get request
    const getNomenclature = async ()=>{
        const key = await AsyncStorage.getItem('key');
        await NomenclatureService.get(key).then(resp=>{setData(resp.data)}).
            catch(e=>{console.log(e)}).finally(()=>setLoading(false));

    }

    //function to render item
    const renderItem = ({item} : any)=> {
        return (
            <Item
                item={item}
                onDelete={()=> setSelectedId(item.id)}
            />
        );
    }



    //firstOpen get request
    useEffect(()=>{ setInterval(()=>  getNomenclature(),5000); LogBox.ignoreLogs(['VirtualizedLists should never be nested'])}, [])


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Title area*/}
                <View style={styles.center} >
                    <Text style={styles.title}>Каталог номенклатуры</Text>
                </View>
                {/* Buttons area*/}
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Шины</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Диски</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Услуги</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Колпаки</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Камеры</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Датчики</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Крепеж</Text>
                    </TouchableOpacity>
                </View>
                {/*Search area*/}
                <View>
                    <TextInput
                        onChangeText={search}
                        value={SearchValue}
                        style={styles.form}
                    />
                </View>

                {/*NEW/Old buttons*/}
                <View style={styles.oldnew}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>NEW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Б/У</Text>
                    </TouchableOpacity>
                </View>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList nestedScrollEnabled={true}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={({ id }, index) => id}
                        extraData={selectedId}
                    />)}
            </ScrollView>
            {/*Child Components with the rest layout*/}
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
        borderColor:'#804EA7',
        padding: 10,
        marginTop:'15%',
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
        margin:"3%",
        marginTop:"2%",
        borderColor:'#804EA7',

    },
    oldnew:{
        marginTop:'5%',
    },
    item: {
        // padding: 20,
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    itemText:{
        alignItems:'center',
        // color:'#fff',
        // borderWidth:1,
        // borderColor: '#804EA7',
        padding: 10,
    },
    itemOps:{
        alignItems:'center',
        color:'#fff',
        borderWidth:1,
        borderColor: '#804EA7',
        padding: 10,
    },
    itemView:{
        borderWidth:1,
        borderColor:'#804EA7',
        flexDirection:'row',
        justifyContent:'space-between'
    },

});

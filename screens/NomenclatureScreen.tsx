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
import NomenclatureRepository from "../Repositories/NomenclatureRepository";


//displayed item
const Item = ({item, onPress, backgroundColor, textColor} : any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.itemText, textColor]}>Брэнд {item.brand}</Text>
        <Text style={[styles.itemText, textColor]}>Модель {item.model}</Text>
        <Text style={[styles.itemText, textColor]}>Ширина {item.width}</Text>
        <Text style={[styles.itemText, textColor]}>Профиль {item.profile}</Text>
        <Text style={[styles.itemText, textColor]}>Диаметр {item.diameter}</Text>
        <Text style={[styles.itemText, textColor]}>Индекс {item.index}</Text>
        <Text style={[styles.itemText, textColor]}>Год {item.year}</Text>
        <Text style={[styles.itemText, textColor]}>Тип {item.type}</Text>
        <Text style={[styles.itemText, textColor]}>Сезон {item.season}</Text>
        <Text style={[styles.itemText, textColor]}>Состояние {item.status}</Text>
        <Text style={[styles.itemText, textColor]}>Описание {item.description}</Text>
        <TouchableOpacity style={styles.itemText} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </TouchableOpacity>
);

//delete selected item
function deleteItem(id: string) : void{
    NomenclatureRepository.delete(id).then(r=>console.log('ok'));
}

export default function Nomenclature (){
    const [SearchValue, search] = React.useState("Поиск");
    const [selectedId, setSelectedId] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    //get request
    const getNomenclature = async ()=>{
        await NomenclatureRepository.get().then(resp=>{setData(resp.data)}).
            catch(e=>{console.log(e)}).finally(()=>setLoading(false));

    }

    //function to render item
    const renderItem = ({item} : any)=> {
        const backgroundColor = item.id === selectedId ? "#808080" : "#fff";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                onDelete={()=> setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
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
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Шины</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Диски</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Услуги</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Колпаки</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Камеры</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Датчики</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Крепеж</Text>
                    </Pressable>
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
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>NEW</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Б/У</Text>
                    </Pressable>
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
        color:'#fff',
        borderWidth:1,
        borderColor: '#804EA7',
        padding: 10,
    },
    itemOps:{
        alignItems:'center',
        color:'#fff',
        borderWidth:1,
        borderColor: '#f00',
        padding: 10,
    }

});

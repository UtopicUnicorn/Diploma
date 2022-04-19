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
    TextInput, Pressable, ScrollView, ActivityIndicator, FlatList,
} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

//displayed item
const Item = ({item, onPress, backgroundColor, textColor } : any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.itemText, textColor]}>Имя {item.name}</Text>
        <Text style={[styles.itemText, textColor]}>Фамилия {item.surname}</Text>
        <Text style={[styles.itemText, textColor]}>Отчество {item.parentname}</Text>
        <Text style={[styles.itemText, textColor]}>Телефон {item.phone}</Text>
        <Text style={[styles.itemText, textColor]}>Почта {item.mail}</Text>
        <Text style={[styles.itemText, textColor]}>Ценовое Правило {item.price}</Text>
        <Text style={[styles.itemText, textColor]}>ИНН {item.inn}</Text>
        <Text style={[styles.itemText, textColor]}>Банк {item.bank}</Text>
        <Text style={[styles.itemText, textColor]}>Номер счета {item.paynumber}</Text>
        <Text style={[styles.itemText, textColor]}>БИК {item.bik}</Text>
        <Text style={[styles.itemText, textColor]}>КПП {item.kpp}</Text>
        <Text style={[styles.itemText, textColor]}>Партнер типа {item.type}</Text>
        <TouchableOpacity style={styles.itemText} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </TouchableOpacity>
);

function deleteItem(id: string) : void{
    console.log(id);
    fetch('http://localhost:3000/partners' + `/${id}`, { method: 'DELETE' })
}



export default function PartnersScreen ({navigation}: any){

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const getPartners = async ()=>{
        try {
            const response = await fetch('http://localhost:3000/partners');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        setInterval(()=>getPartners(),5000);
    }, [])

    //function to render item
    const renderItem = ({item} : any)=> {
        const backgroundColor = item.id === selectedId ? "#808080" : "#fff";
        const color = item.id === selectedId ? 'white' : 'black';
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    }



    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Контрагенты</Text>
            </View>
            <View style={styles.buttonsView}>
                <ImageBackground
                    resizeMode={"cover"}
                    style={styles.img}
                    source={
                        require('../assets/button-bg.png')
                    }
                >
                    <Pressable style={styles.button} onPress={()=>navigation.navigate('Добавить контрагентов')}>
                        <Text style={styles.text}>Добавить</Text>
                    </Pressable>
                </ImageBackground>
            </View>
            {/*Temp get request UI*/}
            {isLoading ? <ActivityIndicator/> : (
                <FlatList nestedScrollEnabled={true}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={({ id }, index) => id}
                    extraData={selectedId}
                />)}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#FFF'
    },
    titleView:{
        marginTop:20,
        alignItems:'flex-start',
        marginLeft: 20,
    },
    title:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    button:{
        flexDirection:'row',
        elevation: 2,
        // borderWidth: 1,
        height:30,
        width: 80,
        alignItems:'center',
        justifyContent: 'center',
        // borderColor:'#804EA7',
    },
    text:{
        alignItems:'center',
        color:'#fff'
    },
    buttonsView:{
        marginTop:20,
        alignItems:'flex-start',
        marginLeft:20,

    },
    img:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:90,
        height:30,
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
})

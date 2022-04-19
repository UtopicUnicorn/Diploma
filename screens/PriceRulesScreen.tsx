import React, {useEffect, useState} from "react";
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    ActivityIndicator,
    FlatList, TouchableOpacity, ScrollView
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {PriceRulesInterface} from "../model/priceRulesInterface";

//import {LinearGradient} from "expo-linear-gradient";
import {AntDesign} from "@expo/vector-icons";


//displayed item
const Item = ({item, onPress, backgroundColor, textColor } : any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.itemText, textColor]}>{item.name}</Text>
        <Text style={[styles.itemText, textColor]}>Процент {item.percent}%</Text>
        <Text style={[styles.itemText, textColor]}>Не меньше {item.min}</Text>
        <Text style={[styles.itemText, textColor]}>Не больше {item.max}</Text>
        <TouchableOpacity style={styles.itemText} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
    </TouchableOpacity>
);

function deleteItem(id: string) : void{
    console.log(id);

    fetch('http://localhost:3000/price-rules' + `/${id}`, { method: 'DELETE' })
}

//main function screen
export default function PriceRules ({navigation}:any){
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    //get request
    const getRules = async ()=>{
        try {
         const response = await fetch('http://localhost:3000/price-rules');
         const json = await response.json();
         setData(json);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

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


    //firstOpen get request
    useEffect(()=>{
        setInterval(()=>getRules(), 5000);
    }, [])


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Ценовые правила</Text>
            </View>
            <View style={styles.buttonsView}>
                <ImageBackground
                    resizeMode={"cover"}
                    style={styles.img}
                    source={
                        require('../assets/button-bg.png')
                    }
                >
                    <Pressable style={styles.button} onPress={()=> navigation.navigate('Добавить ценовое правило')}>
                        {/*<AntDesign name={'pluscircleo'} size={24} color={'black'}/>*/}
                        <Text style={styles.text}>Добавить</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        {/*table*/}
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
      flex: 1,
      backgroundColor: '#FFF',
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
    title:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    text:{
        alignItems:'center',
        color:'#fff'
    },
    buttonsView:{
        marginTop:20,
        alignItems:'flex-start',
        marginLeft:20,
        marginBottom:20,
    },
    titleView:{
        marginTop:20,
        alignItems:'flex-start',
        marginLeft: 20,
    },
    img:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:90,
        height:30,
    },
    tableView:{
        marginTop: 30,
        marginLeft: 20,
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

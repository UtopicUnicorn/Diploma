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
import PriceService from "../../services/PriceService";
import {PriceRulesInterface} from "../../model/priceRulesInterface";
import {priceRulesConstants} from "../../components/constants";
import {navigationEnums} from "../../components/navigationEnums";
import AsyncStorage from "@react-native-async-storage/async-storage";

//displayed item
const Item = ({item, navigation} : any) => (
    <View style={[styles.item]}>
        <View style={styles.itemViewName}>
        <Text style={[styles.itemTextName]}>{item.name}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{priceRulesConstants.percent}</Text>
            <Text style={[styles.itemText]}>{item.percent}%</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{priceRulesConstants.min}</Text>
            <Text style={[styles.itemText]}>{item.min}₽</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{priceRulesConstants.max}</Text>
            <Text style={[styles.itemText]}>{item.max}₽</Text>
        </View>
        <View style={styles.itemButtonsView}>
        <TouchableOpacity style={styles.chooseButtons} onPress={()=>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chooseButtons} onPress={()=>navigation.navigate(navigationEnums.addRule, item)}>
            <FontAwesome name="edit" size={24} color="black" />
        </TouchableOpacity>
        </View>
    </View>
);

 function deleteItem(id: string) : void{
    console.log(id);
     PriceService.delete(id).then(r =>console.log('ok'));
}


//main function screen
export default function PriceRules ({navigation}:any){
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);


    //get request
    const getRules = async ()=>{
        const key = await AsyncStorage.getItem('key');
        await PriceService.get(key).then(resp=>{setData(resp.data)}).
            catch(error=>{console.log(error)}).
                finally(()=>setLoading(false))
    }

    //function to render item
    const renderItem = ({item} : any)=> {
        return (
            <Item
                item={item}
                navigation={navigation}
            />
        );
    }


    //firstOpen get request
    useEffect(()=>{
        setInterval(()=>getRules(), 5000);
    }, [])


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonsView}>
                <ImageBackground
                    resizeMode={"cover"}
                    style={styles.img}
                    source={
                        require('../../assets/button-bg.png')
                    }
                >
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate(navigationEnums.addRule)}>
                        <Text style={styles.text}>{priceRulesConstants.add}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
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
        borderWidth: 1,
        height:30,
        width: 150,
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#804EA7',
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
        alignItems:'center',
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
        width:150,
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
        color:'#000',
        padding: 10,
    },
    itemTextName:{
        alignItems:'center',
        justifyContent:'center',
        color:'#000',
        // borderWidth:1,
        // borderColor: '#804EA7',
        padding: 10,
    },
    itemOps:{
        alignItems:'center',
        color:'#fff',
        borderWidth:1,
        borderColor: '#f00',
        padding: 10,
    },
    chooseButtons:{
        borderWidth: 1,
        height:30,
        width: 167,
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#804EA7',
    },
    itemView:{
        borderWidth:1,
        borderColor:'#804EA7',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemViewName:{
        borderWidth:1,
        borderColor:'#804EA7',
        justifyContent:'center',
        alignItems: 'center'
    },
    itemButtonsView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})

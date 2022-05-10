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
import PartnersRepository from "../Repositories/PartnersRepository";
import {navigationEnums} from "../components/navigationEnums";
import {partnersEnum} from "../components/constants";

//displayed item
const Item = ({item, navigation } : any) => (
    <View style={[styles.item]}>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.name}</Text>
            <Text style={[styles.itemText]}>{item.name}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.surname}</Text>
            <Text style={[styles.itemText]}>{item.surname}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.parentname}</Text>
            <Text style={[styles.itemText]}>{item.parentname}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.type}</Text>
            <Text style={[styles.itemText]}>{item.type}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.phone}</Text>
            <Text style={[styles.itemText]}>{item.phone}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.email}</Text>
            <Text style={[styles.itemText]}>{item.mail}</Text>
        </View>
        {/*<Text style={[styles.itemText, textColor]}>Ценовое Правило {item.price}</Text>*/}
        {/*<Text style={[styles.itemText, textColor]}>ИНН {item.inn}</Text>*/}
        {/*<Text style={[styles.itemText, textColor]}>Банк {item.bank}</Text>*/}
        {/*<Text style={[styles.itemText, textColor]}>Номер счета {item.paynumber}</Text>*/}
        {/*<Text style={[styles.itemText, textColor]}>БИК {item.bik}</Text>*/}
        {/*<Text style={[styles.itemText, textColor]}>КПП {item.kpp}</Text>*/}
        <View style={styles.itemButtonsView}>
        <TouchableOpacity style={styles.chooseButtons} onPress={() =>deleteItem(item.id)}>
            <FontAwesome name="trash-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chooseButtons} onPress={()=>navigation.navigate(navigationEnums.addPartner,item)}>
            <FontAwesome name="edit" size={24} color="black" />
        </TouchableOpacity>
        </View>
    </View>
);

function deleteItem(id: string) : void{
    PartnersRepository.delete(id).then(r=>console.log('ok'));
}



export default function PartnersScreen ({navigation}: any){

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const getPartners = async ()=>{
        await PartnersRepository.get().then(resp=>{setData(resp.data)}).
            catch(e=>{console.log(e)}).
                finally(()=>setLoading(false));
    }

    useEffect(()=>{
        setInterval(()=>getPartners(),5000);
    }, [])

    //function to render item
    const renderItem = ({item} : any)=> {
        return (
            <Item
                item={item}
                navigation={navigation}
            />
        );
    }



    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonsView}>
                <ImageBackground
                    resizeMode={"cover"}
                    style={styles.img}
                    source={
                        require('../assets/button-bg.png')
                    }
                >
                    <Pressable style={styles.button} onPress={()=>navigation.navigate(navigationEnums.addPartner)}>
                        <Text style={styles.text}>{partnersEnum.add}</Text>
                    </Pressable>
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
        height:30,
        width: 150,
        alignItems:'center',
        justifyContent: 'center',
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
    img:{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:30,
    },
    item: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    itemText:{
        alignItems:'center',
        color:'#000',
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
    itemButtonsView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})

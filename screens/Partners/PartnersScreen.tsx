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
import PartnersService from "../../services/PartnersService";
import {navigationEnums} from "../../components/navigationEnums";
import {partnersEnum} from "../../components/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";



const PriceRuleItem = ({rule} : any) =>(
    <View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Ценовое правило</Text>
            <Text style={[styles.itemText]}>{rule.name}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Процент</Text>
            <Text style={[styles.itemText]}>{rule.percent}%</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Не меньше</Text>
            <Text style={[styles.itemText]}>{rule.min}₽</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>Не больше</Text>
            <Text style={[styles.itemText]}>{rule.max}₽</Text>
        </View>
    </View>
)

//displayed item
const ItemPhys = ({item, navigation } : any) => (
    <View style={[styles.item]}>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.FIO}</Text>
            <Text style={[styles.itemText]}>{item.surname} {item.name} {item.parentname}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.type}</Text>
            <Text style={[styles.itemText]}>{partnersEnum.phys}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.phone}</Text>
            <Text style={[styles.itemText]}>{item.phone}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.email}</Text>
            <Text style={[styles.itemText]}>{item.mail}</Text>
        </View>
        <PriceRuleItem
            rule = {item.pricerule}
        />
        {/*<PriceRuleItem/>*/}
        {/*<View style={styles.itemView}>*/}
        {/*    <Text style={[styles.itemText]}>{partnersEnum.priceRule}</Text>*/}
        {/*    <Text style={[styles.itemText]}>{item.pricerule}</Text>*/}
        {/*</View>*/}
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


const ItemLaw = ({item, navigation } : any) => (
    <View style={[styles.item]}>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.organization}</Text>
            <Text style={[styles.itemText]}>{item.organization}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.type}</Text>
            <Text style={[styles.itemText]}>{partnersEnum.law}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.phone}</Text>
            <Text style={[styles.itemText]}>{item.phone}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.email}</Text>
            <Text style={[styles.itemText]}>{item.mail}</Text>
        </View>
        {/*<View style={styles.itemView}>*/}
        {/*    <Text style={[styles.itemText]}>{partnersEnum.priceRule}</Text>*/}
        {/*    <Text style={[styles.itemText]}>{item.pricerule}</Text>*/}
        {/*</View>*/}
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.inn}</Text>
            <Text style={[styles.itemText]}>{item.inn}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.bank}</Text>
            <Text style={[styles.itemText]}>{item.bank}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.payNumber}</Text>
            <Text style={[styles.itemText]}>{item.paynumber}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.bik}</Text>
            <Text style={[styles.itemText]}>{item.bik}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.kpp}</Text>
            <Text style={[styles.itemText]}>{item.kpp}</Text>
        </View>
        <PriceRuleItem
            rule = {item.pricerule}
        />
        {/*<PriceRuleItem/>*/}
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

const ItemIP = ({item, navigation } : any) => (
    <View style={[styles.item]}>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.organization}</Text>
            <Text style={[styles.itemText]}>{item.organization}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.type}</Text>
            <Text style={[styles.itemText]}>{partnersEnum.ip}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.phone}</Text>
            <Text style={[styles.itemText]}>{item.phone}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.email}</Text>
            <Text style={[styles.itemText]}>{item.mail}</Text>
        </View>
        {/*<View style={styles.itemView}>*/}
        {/*    <Text style={[styles.itemText]}>{partnersEnum.priceRule}</Text>*/}
        {/*    <Text style={[styles.itemText]}>{item.pricerule}</Text>*/}
        {/*</View>*/}
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.inn}</Text>
            <Text style={[styles.itemText]}>{item.inn}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.bank}</Text>
            <Text style={[styles.itemText]}>{item.bank}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.payNumber}</Text>
            <Text style={[styles.itemText]}>{item.paynumber}</Text>
        </View>
        <View style={styles.itemView}>
            <Text style={[styles.itemText]}>{partnersEnum.bik}</Text>
            <Text style={[styles.itemText]}>{item.bik}</Text>
        </View>
        <PriceRuleItem
            rule = {item.pricerule}
        />
        {/*<PriceRuleItem/>*/}
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
    PartnersService.delete(id).then(r=>console.log('ok'));
}



export default function PartnersScreen ({navigation}: any){

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const getPartners = async ()=>{
        const key = await AsyncStorage.getItem('key')
        await PartnersService.get(key).then(resp=>{setData(resp.data)}).
            catch(e=>{console.log(e)}).
                finally(()=>setLoading(false));
    }

    useEffect(()=>{
        setInterval(()=>getPartners(),5000);
    }, [])

    //function to render item
    const renderItem = ({item} : any)=> {
        switch (item['type']) {
            case('phys'):{
                return (
                    <ItemPhys
                        item={item}
                        navigation={navigation}
                    />
                );
            }
            case('law'):{
                return (
                    <ItemLaw
                        item={item}
                        navigation={navigation}
                    />
                );
            }
            case ('ip'):{
                return (
                    <ItemIP
                        item={item}
                        navigation={navigation}
                    />
                );
            } default:
            {
                return (
                    <ItemPhys
                        item={item}
                        navigation={navigation}
                    />
                );
            }
        }

    }



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

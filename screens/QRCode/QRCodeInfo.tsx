import React, {useState} from "react";
import {View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import {navigationEnums} from "../../components/navigationEnums";





export default function QRCodeInfo ({route, navigation} : any){

    let [type, setType] = React.useState(route.params['type']);

    const Tires = ()=> {
        return (
        <View>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Шина</Text>
            </View>
            <View style={styles.tableView}>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Брэнд</Text>
                    <Text style={styles.tableText}>{route.params['brand']}</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Модель</Text>
                    <Text style={styles.tableText}>{route.params['model']}</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Ширина</Text>
                    <Text style={styles.tableText}>{route.params['width']}</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Профиль</Text>
                    <Text style={styles.tableText}>{route.params['profile']}</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Диаметр</Text>
                    <Text style={styles.tableText}>{route.params['diameter']}</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Индекс</Text>
                    <Text style={styles.tableText}>{route.params['index']}</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Год</Text>
                    <Text style={styles.tableText}>{route.params['year']}</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Описание</Text>
                    <Text style={styles.tableText}>{route.params['description']}</Text>
                </View>
                <View style={styles.itemView}>
                    <Text style={styles.tableText}>Стеллаж</Text>
                    <Text style={styles.tableText}>A1</Text>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.tableText}>Забрать со склада</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate(navigationEnums.addDeals, route.params)}>
                        <Text style={styles.tableText}>В сделку</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }


    const WheelDisk = () => {
        return (
            <View>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Диски</Text>
                </View>
                <View style={styles.tableView}>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Брэнд</Text>
                        <Text style={styles.tableText}>{route.params['brand']}</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Модель</Text>
                        <Text style={styles.tableText}>{route.params['model']}</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Ширина</Text>
                        <Text style={styles.tableText}>{route.params['width']}</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Профиль</Text>
                        <Text style={styles.tableText}>{route.params['pcd']}</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Диаметр</Text>
                        <Text style={styles.tableText}>{route.params['diameter']}</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Индекс</Text>
                        <Text style={styles.tableText}>{route.params['index']}</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Год</Text>
                        <Text style={styles.tableText}>{route.params['year']}</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Описание</Text>
                        <Text style={styles.tableText}>{route.params['description']}</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.tableText}>Полка</Text>
                        <Text style={styles.tableText}>A1</Text>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity>
                            <Text style={styles.tableText}>Забрать со склада</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.tableText}>В сделку</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }


    const Choose = () =>{
        switch (type) {
            case("tires"):{
                return Tires();
            }
        }
    }



    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Информация о товаре</Text>
            </View>
            {Choose()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#FFF'
    },
    titleView:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:20,
        marginLeft: 20,
    },
    titleText:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    tableView:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        // alignItems:'center',
    },
    tableText:{
        color:'#000',
        padding: 10,
        // borderWidth:1,
        // borderColor:'#804EA7',
    },
    itemView:{
        borderWidth:1,
        borderColor:'#804EA7',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonsView:{
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center'
    },
    buttons: {
        borderWidth: 1,
        height:40,
        width: 167.5,
        alignItems:'center',
        // justifyContent: 'center',
        borderColor:'#804EA7',

    }
})

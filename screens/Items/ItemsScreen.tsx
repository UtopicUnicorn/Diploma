import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View, LogBox
} from "react-native";

import TiresFormItem from "./Forms/TiresFormItem";
import {itemStyles as styles} from "./itemStyles";
import WheelDiskFormItem from "./Forms/WheelDiskFormItem";
import CapsFormItem from "./Forms/CapsFormItem";
import SensorsItemForm from "./Forms/SensorsItemForm";



export default function ItemsScreen(){

    let [item, setItem] = React.useState("")

    const Choose= ()=> {
        switch (item){
            case ('tires') :{
                return <TiresFormItem/>;
            }
            case ('wheelDisk') :{
                return <WheelDiskFormItem/>
            }
            case ('caps'):{
                return <CapsFormItem/>
            }
            case ('sensors'):{
                return <SensorsItemForm/>
            }
            default:{
                return <TiresFormItem/>;
            }
        }
    }


    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.chooseItemView}>
                    <View style={styles.chooseItemViewTop}>
                        <TouchableOpacity style={styles.chooseItemTypeButton} onPress={()=>setItem('tires')}>
                            <Text style={styles.chooseItemTypeButtonText}>Шины</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseItemTypeButton} onPress={()=>setItem('wheelDisk')}>
                            <Text style={styles.chooseItemTypeButtonText}>Диски</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseItemTypeButton}>
                            <Text style={styles.chooseItemTypeButtonText}>Услуги</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseItemTypeButton} onPress={()=>setItem('caps')}>
                            <Text style={styles.chooseItemTypeButtonText}>Колпаки</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.chooseItemViewBottom}>
                        <TouchableOpacity style={styles.chooseItemTypeButton} onPress={()=>setItem('tireChamber')}>
                            <Text style={styles.chooseItemTypeButtonText}>Камеры</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseItemTypeButton} onPress={()=>setItem('sensors')}>
                            <Text style={styles.chooseItemTypeButtonText}>Датчики</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chooseItemTypeButton}>
                            <Text style={styles.chooseItemTypeButtonText}>Крепеж</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {Choose()}
            </ScrollView>
        </SafeAreaView>
    )
}

import React from "react";
import {Alert, Modal, TouchableOpacity, View, Text} from "react-native";
import {Picker} from "@react-native-picker/picker";

export const PriceRulePicker = ({
                                 modalOpen,
                                 setModalOpen,
                                 value,
                                 setValue,
                                 items,
                                 setRuleId,
                             }: any) =>{
    const pickerData = (data: any) => {
        return (data?.length > 0)&&(
            data.map((val:any, index:any) => <Picker.Item label={val.name} value={val.name} key={index}/>)
        );
    };
    return(
        <Modal
            animationType={"slide"}
            transparent={true}
            visible={modalOpen}
            onRequestClose={()=>{
                Alert.alert('Modal has been closed!');
            }}
        >
            <View style={{flex:1}}>
                <View style={{
                    backgroundColor:'#fff',
                    width:'100%',
                    height:'40%',
                    position:'absolute',
                    bottom:0,
                }}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems:'center'
                        }}
                        onPress={()=>setModalOpen(!modalOpen)}
                    >
                        <Text>Закрыть</Text>
                    </TouchableOpacity>
                    <Picker
                        selectedValue={value}
                        style={{height: 50, width:'100%'}}
                        onValueChange={(itemValue, itemIndex) =>
                        {
                            setValue(itemValue);
                            setRuleId(items[itemIndex]['id']);
                        }
                        }>
                        {pickerData(items)}
                    </Picker>
                </View>
            </View>
        </Modal>
    )
}

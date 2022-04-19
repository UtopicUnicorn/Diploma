import React from "react";
import {SafeAreaView, StyleSheet, View, Text, ScrollView, Pressable, TextInput} from "react-native";

export default function AddPartnersScreen({navigation}:any){

    const [SurnameValue, surname] = React.useState("Фамилия");
    const [NameValue, name] = React.useState("Имя");
    const [ParentNameValue, parentname] = React.useState("Отчество");

    const [PhoneValue, phone] = React.useState("");
    const [MailValue, mail] = React.useState("");
    const [PriceRuleValue, priceRule] = React.useState("");

    const [AddressValue, address] = React.useState("");
    const [INNValue, inn] = React.useState("");
    const [BankValue, bank] = React.useState("");

    const [PayNumberValue, payNumber] = React.useState("");
    const [BIKValue, bik] = React.useState("");
    const [KPPValue, kpp] = React.useState("");

    let phis = true;
    let ip = false;
    let legEnt = false;



    let type = "ip";

    const sendForm =()=> {
        fetch('http://localhost:3000/partners', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: NameValue,
                surname: SurnameValue,
                parentname: ParentNameValue,
                phone: PhoneValue,
                mail: MailValue,
                pricerule: PriceRuleValue,
                address: AddressValue,
                inn: INNValue,
                bank: BankValue,
                paynumber: PayNumberValue,
                bik: BIKValue,
                kpp: KPPValue,
                type: type,
            })
        });
    }



    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/*Title*/}
                <View style={styles.titleView}>
                    <Text style={styles.title}>Создание Контрагента</Text>
                </View>
                {/*Add buttons*/}
                <View style={styles.closeButtonsView}>
                    <Pressable style={styles.closeButtons} onPress={sendForm}>
                        <Text>Записать</Text>
                    </Pressable>
                    <Pressable style={styles.closeButtons} onPress={()=> navigation.navigate('Контрагенты')}>
                        <Text>Записать и закрыть</Text>
                    </Pressable>
                </View>
                {/*Choose buttons*/}
                <View style={styles.chooseButtonsView}>
                    <Pressable style={styles.chooseButtons}>
                        <Text>Физ.лицо</Text>
                    </Pressable>
                    <Pressable style={styles.chooseButtons}>
                        <Text>ИП</Text>
                    </Pressable>
                    <Pressable style={styles.chooseButtons}>
                        <Text>Юр.лицо</Text>
                    </Pressable>
                </View>
                {/*Form FIO*/}
                <View style={styles.formView}>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={surname}
                        placeholder={"Фамилия"}
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={name}
                        placeholder={"Имя"}
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={parentname}
                        placeholder={"Отчество"}
                    />
                </View>
                {/*Form contact*/}
                <View style={styles.formView}>
                    <Text style={styles.text}>Телефон</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={phone}
                        placeholder={'+7(999)-999-99-99'}
                    />
                    <Text style={styles.text}>Почта</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={mail}
                    />
                    {/*поменять на FlatList*/}
                    <Text style={styles.text}>Ценовое правило</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={priceRule}
                    />
                </View >
                {/*Form for IP and legal entity */}
                <View style={styles.formView}>
                    {/*address, bank and INN fields*/}
                    <Text style={styles.text}>Адрес</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={address}
                    />
                    <Text style={styles.text}>ИНН</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={inn}
                    />
                    <Text style={styles.text}>Банк</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={bank}
                    />
                </View>
                <View style={styles.formView}>
                    <Text style={styles.text}>БИК</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={bik}
                    />
                    <Text style={styles.text}>Номер расчетного счета</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={payNumber}
                    />
                    {/*Hide for IP and Phys*/}
                    <Text style={styles.text}>КПП</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={kpp}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create(
    {
        container:{
          flex:1,
          backgroundColor: '#FFF',
        },
        titleView:{
            alignItems:'flex-start',
            marginTop:20,
        },
        title:{
            fontSize: 20,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            marginLeft:20,
        },
        closeButtonsView:{
            flexDirection:"row",
            justifyContent:"center",
            margin:10,
        },
        closeButtons:{
            borderWidth:1,
            height:40,
            width:150,
            margin:10,
            justifyContent:"center",
            alignItems:"center",
            borderColor: '#804EA7',

        },
        text:{
            marginTop:10,
        },
        chooseButtonsView:{

        },
        chooseButtons:{
            alignItems:"center",
            justifyContent:'center',
            margin:10,
            borderWidth:1,
            height:40,
            borderColor: '#804EA7',

        },
        formView:{
            marginTop:30,
            marginLeft:10,
            marginRight:10,
        },
        formInput:{
            alignItems:'center',
            height:40,
            marginTop:10,
            justifyContent: "center",
            borderWidth:1,
            padding:10,
            borderColor: '#804EA7',
        },
        activeButton:{
            backgroundColor: '#566995',
        }

    }
)

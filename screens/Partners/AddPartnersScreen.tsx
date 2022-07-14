import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity, ImageBackground
} from "react-native";
import PartnersService from "../../services/PartnersService";
import {partnersEnum} from "../../components/constants";
import {CustomPicker} from "../../components/CustomPicker";
import {navigationEnums} from "../../components/navigationEnums";
import PriceService from "../../services/PriceService";
import {PriceRulePicker} from "../../components/PriceRulePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AddPartnersScreen({navigation, route}:any){

    let [surname, setSurname] = React.useState("");
    let [name, setName] = React.useState("");
    let [parentName, setParentname] = React.useState("");

    let [phone, setPhone] = React.useState("");
    let [mail, setMail] = React.useState("");
    let [priceRule, setPriceRule] = React.useState("");

    let [organization, setOrganization] = React.useState("");
    let [address, setAddress] = React.useState("");
    let [inn, setINN] = React.useState("");
    let [bank, setBank] = React.useState("");

    let [payNumber, setPayNumber] = React.useState("");
    let [bik, setBIK] = React.useState("");
    let [kpp, setKPP] = React.useState("");

    let [type, setType] = React.useState("phys");
    let [title, setTitle] = React.useState("Создание контрагента");
    let [id, setId] = React.useState("");
    let [ruleId, setRuleId] = React.useState();
    let update = false;
    // const [data, setData] = useState([]);

    let [rules, setRules] = React.useState([]);

    const [ruleModal, setRuleModal] = useState(false);

    const [tempD, setTempD] = useState([]);

    // let tempData = [
    //     'Розница',
    //     'Выкуп',
    //     'uQj_aAvvYb',
    //     'olFYimF4KA',
    // ];

    // useEffect(()=>{
    //     setInterval(()=>getRules(),5000);
    // }, [])


    const OpenPicker = async ()=>{
       const key = await AsyncStorage.getItem('key');
       await PriceService.get(key).then(resp=>setTempD(resp.data));
       // console.log(tempData);
       setRuleModal(!ruleModal);
    }


    const FormPhys = () =>(
      <View>
          <View style={styles.formView}>
              <TextInput
                  style={styles.formInput}
                  value={surname}
                  onChangeText={setSurname}
                  placeholder={partnersEnum.surname}
              />
              <TextInput
                  style={styles.formInput}
                  onChangeText={setName}
                  value={name}
                  placeholder={partnersEnum.name}
              />
              <TextInput
                  style={styles.formInput}
                  value={parentName}
                  onChangeText={setParentname}
                  placeholder={partnersEnum.parentname}
              />
          </View>
          {/*Form contact*/}
          <View style={styles.formView}>
              <Text style={styles.text}>{partnersEnum.phone}</Text>
              <TextInput
                  style={styles.formInput}
                  onChangeText={setPhone}
                  value={phone}
                  keyboardType={"phone-pad"}
                  placeholder={partnersEnum.phonePlaceholder}
              />
              <Text style={styles.text}>{partnersEnum.email}</Text>
              <TextInput
                  value={mail}
                  keyboardType={"email-address"}
                  style={styles.formInput}
                  onChangeText={setMail}
              />
              <Text style={styles.text}>{partnersEnum.priceRule}</Text>
              <TouchableOpacity
                  onPress={OpenPicker}>
                  {/*// onPress={()=>setRuleModal(!ruleModal)}>*/}
                  <Text style={styles.formInput}>{priceRule}</Text>
              </TouchableOpacity>
              <PriceRulePicker
                  modalOpen = {ruleModal}
                  setModalOpen = {setRuleModal}
                  value = {priceRule}
                  setValue = {setPriceRule}
                  items={tempD}
                  setRuleId={setRuleId}
              />
          </View >
      </View>
    );

    const FormIp = () =>(
        <View>
                <View style={styles.formView}>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setSurname}
                        value={surname}
                        placeholder={partnersEnum.surname}
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setName}
                        value={name}
                        placeholder={partnersEnum.name}
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setParentname}
                        value={parentName}
                        placeholder={partnersEnum.parentname}
                    />
                </View>
                {/*Form contact*/}
                <View style={styles.formView}>
                    <Text style={styles.text}>{partnersEnum.phone}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setPhone}
                        dataDetectorTypes={'phoneNumber'}
                        keyboardType={"phone-pad"}
                        value={phone}
                        placeholder={partnersEnum.phonePlaceholder}
                    />
                    <Text style={styles.text}>{partnersEnum.email}</Text>
                    <TextInput
                        style={styles.formInput}
                        value={mail}
                        onChangeText={setMail}
                        keyboardType={"email-address"}
                    />
                    {/*поменять на FlatList*/}
                    <Text style={styles.text}>{partnersEnum.priceRule}</Text>
                    <TouchableOpacity
                        onPress={OpenPicker}>
                        <Text style={styles.formInput}>{priceRule}</Text>
                    </TouchableOpacity>
                    <PriceRulePicker
                        modalOpen = {ruleModal}
                        setModalOpen = {setRuleModal}
                        value = {priceRule}
                        setValue = {setPriceRule}
                        items={tempD}
                        setRuleId={setRuleId}
                    />
                    {/*<TextInput*/}
                    {/*    value={PriceRuleValue}*/}
                    {/*    style={styles.formInput}*/}
                    {/*    onChangeText={priceRule}*/}
                    {/*/>*/}
                </View >
                <View style={styles.formView}>
                    <Text style={styles.text}>{partnersEnum.organization}</Text>
                    <TextInput
                        value={organization}
                        style={styles.formInput}
                        onChangeText={setOrganization}
                    />
                    {/*address, bank and INN fields*/}
                    <Text style={styles.text}>{partnersEnum.address}</Text>
                    <TextInput
                        value={address}
                        style={styles.formInput}
                        onChangeText={setAddress}
                    />
                    <Text style={styles.text}>{partnersEnum.inn}</Text>
                    <TextInput
                        value={inn}
                        style={styles.formInput}
                        onChangeText={setINN}
                    />
                    <Text style={styles.text}>{partnersEnum.bank}</Text>
                    <TextInput
                        value={bank}
                        style={styles.formInput}
                        onChangeText={setBank}
                    />
                </View>
                <View style={styles.formView}>
                    <Text style={styles.text}>{partnersEnum.bik}</Text>
                    <TextInput
                        value={bik}
                        style={styles.formInput}
                        onChangeText={setBIK}
                    />
                    <Text style={styles.text}>{partnersEnum.payNumber}</Text>
                    <TextInput
                        value={payNumber}
                        style={styles.formInput}
                        onChangeText={setPayNumber}
                    />
                </View>
        </View>
    )


    const FormLaw = () =>(
        <View>
            <View style={styles.formView}>
                <TextInput
                    value={surname}
                    style={styles.formInput}
                    onChangeText={setSurname}
                    placeholder={partnersEnum.surname}
                />
                <TextInput
                    value={name}
                    style={styles.formInput}
                    onChangeText={setName}
                    placeholder={partnersEnum.name}
                />
                <TextInput
                    value={parentName}
                    style={styles.formInput}
                    onChangeText={setParentname}
                    placeholder={partnersEnum.parentname}
                />
            </View>
            {/*Form contact*/}
            <View style={styles.formView}>
                <Text style={styles.text}>{partnersEnum.phone}</Text>
                <TextInput
                    value={phone}
                    style={styles.formInput}
                    onChangeText={setPhone}
                    keyboardType={"phone-pad"}
                    placeholder={partnersEnum.phonePlaceholder}
                />
                <Text style={styles.text}>{partnersEnum.email}</Text>
                <TextInput
                    value={mail}
                    style={styles.formInput}
                    onChangeText={setMail}
                    keyboardType={"email-address"}
                />
                {/*поменять на FlatList*/}
                <Text style={styles.text}>{partnersEnum.priceRule}</Text>
                <TouchableOpacity
                    onPress={OpenPicker}>
                    <Text style={styles.formInput}>{priceRule}</Text>
                </TouchableOpacity>
                <PriceRulePicker
                    modalOpen = {ruleModal}
                    setModalOpen = {setRuleModal}
                    value = {priceRule}
                    setValue = {setPriceRule}
                    items={tempD}
                    setRuleId={setRuleId}
                />
            </View >
            <View style={styles.formView}>
                <Text style={styles.text}>{partnersEnum.organization}</Text>
                <TextInput
                    value={organization}
                    style={styles.formInput}
                    onChangeText={setOrganization}
                />
                <Text style={styles.text}>{partnersEnum.address}</Text>
                <TextInput
                    value={address}
                    style={styles.formInput}
                    onChangeText={setAddress}
                />
                <Text style={styles.text}>{partnersEnum.inn}</Text>
                <TextInput
                    value={inn}
                    style={styles.formInput}
                    onChangeText={setINN}
                />
                <Text style={styles.text}>{partnersEnum.bank}</Text>
                <TextInput
                    value={bank}
                    style={styles.formInput}
                    onChangeText={setBank}
                />
            </View>
            <View style={styles.formView}>
                <Text style={styles.text}>{partnersEnum.bik}</Text>
                <TextInput
                    value={bik}
                    style={styles.formInput}
                    onChangeText={setBIK}
                />
                <Text style={styles.text}>{partnersEnum.payNumber}</Text>
                <TextInput
                    value={payNumber}
                    style={styles.formInput}
                    onChangeText={setPayNumber}
                />
                <Text style={styles.text}>{partnersEnum.kpp}</Text>
                <TextInput
                    value={kpp}
                    style={styles.formInput}
                    onChangeText={setKPP}
                />
            </View>
        </View>
    )


    // const getRules = async ()=>{
    //     await PriceService.get().then(resp=>{setData(resp.data)}).
    //     catch(error=>{console.log(error)});
    //     // if(data!=undefined)
    //     // tempData = data[0]['name'];
    // }
    //

    const Choose = () => {
        switch (type){
            case ("phys"):{
                return (FormPhys());
            }
            case ("ip"):{
                return (FormIp())
            }
            case ("law"):{
                return (FormLaw())
            }
            default:{
                return (FormPhys())
            }
        }
        // return <PhysForm/>
    }

    if(route.params!=undefined){
        [title, setTitle] = React.useState("Редактирование");
        [surname, setSurname] = React.useState(route.params['surname']);
        [name, setName] = React.useState(route.params['name']);
        [parentName, setParentname] = React.useState(route.params['parentname']);

        [phone, setPhone] = React.useState(route.params['phone']);
        [mail, setMail] = React.useState(route.params['mail']);
        [priceRule, setPriceRule] = React.useState(route.params['pricerule']['name']);
        [id, setId] = React.useState(route.params['id']);

        [ruleId, setRuleId] = React.useState(route.params['pricerule']['id']);
        update = true;
        switch (route.params['type']){
            case ("phys"):{
                [type, setType] = React.useState("phys");
                Choose();
                break;
            }
            case ("law"):{
                [type, setType] = React.useState("law");

                [address, setAddress] = React.useState(route.params['address']);
                [inn, setINN] = React.useState(route.params['inn']);
                [bank, setBank] = React.useState(route.params['bank']);
                [organization, setOrganization] = React.useState(route.params['organization']);
                [payNumber, setPayNumber] = React.useState(route.params['paynumber']);
                [bik, setBIK] = React.useState(route.params['bik']);
                [kpp, setKPP] = React.useState(route.params['kpp']);
                Choose();
                break;
            }
            case ("ip"):{
                [type, setType] = React.useState("ip");

                [organization, setOrganization] = React.useState(route.params['organization']);
                [address, setAddress] = React.useState(route.params['address']);
                [inn, setINN] = React.useState(route.params['inn']);
                [bank, setBank] = React.useState(route.params['bank']);
                [organization, setOrganization] = React.useState(route.params['organization']);
                [payNumber, setPayNumber] = React.useState(route.params['paynumber']);
                [bik, setBIK] = React.useState(route.params['bik']);
                Choose();
                break;
            }
        }
    }

    const sendForm = async (close: boolean)=> {
        const body = {
            name: name,
            surname: surname,
            parentname: parentName,
            phone: phone,
            mail: mail,
            pricerule: ruleId,
            organization: organization,
            address: address,
            inn: inn,
            bank: bank,
            paynumber: payNumber,
            bik: bik,
            kpp: kpp,
            type: type,
        };

        const key = await AsyncStorage.getItem('key');
        if(!close) {
            if (update) {
                let data = await PartnersService.update(id, body)
            } else {
                let data = await PartnersService.post(body, key);
            }
        }else{
            if (update) {
                let data = await PartnersService.update(id, body).then(()=>navigation.navigate(navigationEnums.partners))
            } else {
                let data = await PartnersService.post(body, key).then(()=>navigation.navigate(navigationEnums.partners));
            }
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps={"handled"}>
                {/*Title*/}
                <View style={styles.titleView}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {/*Add buttons*/}
                <View style={styles.closeButtonsView}>
                    <ImageBackground
                        resizeMode={"cover"}
                        style={styles.img}
                        source={require('../../assets/button-bg.png')}
                    >
                        <TouchableOpacity style={styles.closeButtons} onPress={()=>sendForm(false)}>
                            <Text style={styles.closeButtonsText}>Записать</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                    <ImageBackground
                        resizeMode={"cover"}
                        style={styles.img}
                        source={require('../../assets/button-bg.png')}
                    >
                        <TouchableOpacity style={styles.closeButtons} onPress={()=>sendForm(true)}>
                            <Text style={styles.closeButtonsText}>Записать и закрыть</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                {/*Choose buttons*/}
                <View style={styles.chooseButtonsView}>
                    <TouchableOpacity style={styles.chooseButtons} onPress={()=>setType("phys")}>
                        <Text>Физ.лицо</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseButtons} onPress={()=>setType("ip")}>
                        <Text>ИП</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseButtons} onPress={()=>setType("law")}>
                        <Text>Юр.лицо</Text>
                    </TouchableOpacity>
                </View>
                {Choose()}
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
            alignItems:'center',
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
            // flexDirection:"row",
            justifyContent:"center",
            alignItems: 'center',
            margin:10,
        },
        closeButtons:{
            borderWidth:1,
            height:40,
            width:150,
            // margin:10,
            justifyContent:"center",
            alignItems:"center",
            borderColor: '#804EA7',

        },
        closeButtonsText:{
          color:'#fff'
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
        },
        img:{
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            width:150,
            height:40,
            margin: 10,
        },

    }
)

import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TextInput,
    Animated,
    TouchableWithoutFeedback, TouchableOpacity
} from "react-native";
import PartnersRepository from "../Repositories/PartnersRepository";
import {onPressIn,onPressOut,animatedScaleStyle} from '../mixins/buttonAnimation';
import {partnersEnum} from "../components/constants";


export default function AddPartnersScreen({navigation, route}:any){

    let [SurnameValue, surname] = React.useState("Фамилия");
    let [NameValue, name] = React.useState("Имя");
    let [ParentNameValue, parentname] = React.useState("Отчество");

    let [PhoneValue, phone] = React.useState("");
    let [MailValue, mail] = React.useState("");
    let [PriceRuleValue, priceRule] = React.useState("");

    let [AddressValue, address] = React.useState("");
    let [INNValue, inn] = React.useState("");
    let [BankValue, bank] = React.useState("");

    let [PayNumberValue, payNumber] = React.useState("");
    let [BIKValue, bik] = React.useState("");
    let [KPPValue, kpp] = React.useState("");

    let [type, typeS] = React.useState("phys");
    let [title, setTitle] = React.useState("Создание контрагента");
    let [idValue, id] = React.useState("");
    let update = false;


    const FormPhys = () =>(
      <View>
          <View style={styles.formView}>
              <TextInput
                  style={styles.formInput}
                  value={SurnameValue}
                  onChangeText={surname}
                  placeholder={partnersEnum.surname}
              />
              <TextInput
                  style={styles.formInput}
                  onChangeText={name}
                  value={NameValue}
                  placeholder={partnersEnum.name}
              />
              <TextInput
                  style={styles.formInput}
                  value={ParentNameValue}
                  onChangeText={parentname}
                  placeholder={partnersEnum.parentname}
              />
          </View>
          {/*Form contact*/}
          <View style={styles.formView}>
              <Text style={styles.text}>{partnersEnum.phone}</Text>
              <TextInput
                  style={styles.formInput}
                  onChangeText={phone}
                  value={PhoneValue}
                  placeholder={partnersEnum.phonePlaceholder}
              />
              <Text style={styles.text}>{partnersEnum.email}</Text>
              <TextInput
                  value={MailValue}
                  style={styles.formInput}
                  onChangeText={mail}
              />
              <Text style={styles.text}>{partnersEnum.priceRule}</Text>
              <TextInput
                  value={PriceRuleValue}
                  style={styles.formInput}
                  onChangeText={priceRule}
              />
          </View >
      </View>
    );

    const FormIp = () =>(
        <View>
                <View style={styles.formView}>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={surname}
                        value={SurnameValue}
                        placeholder={partnersEnum.surname}
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={name}
                        value={NameValue}
                        placeholder={partnersEnum.name}
                    />
                    <TextInput
                        style={styles.formInput}
                        onChangeText={parentname}
                        value={ParentNameValue}
                        placeholder={partnersEnum.parentname}
                    />
                </View>
                {/*Form contact*/}
                <View style={styles.formView}>
                    <Text style={styles.text}>{partnersEnum.phone}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={phone}
                        value={PhoneValue}
                        placeholder={partnersEnum.phonePlaceholder}
                    />
                    <Text style={styles.text}>{partnersEnum.email}</Text>
                    <TextInput
                        style={styles.formInput}
                        value={MailValue}
                        onChangeText={mail}
                    />
                    {/*поменять на FlatList*/}
                    <Text style={styles.text}>{partnersEnum.priceRule}</Text>
                    <TextInput
                        value={PriceRuleValue}
                        style={styles.formInput}
                        onChangeText={priceRule}
                    />
                </View >
                <View style={styles.formView}>
                    {/*address, bank and INN fields*/}
                    <Text style={styles.text}>{partnersEnum.address}</Text>
                    <TextInput
                        value={AddressValue}
                        style={styles.formInput}
                        onChangeText={address}
                    />
                    <Text style={styles.text}>{partnersEnum.inn}</Text>
                    <TextInput
                        value={INNValue}
                        style={styles.formInput}
                        onChangeText={inn}
                    />
                    <Text style={styles.text}>{partnersEnum.bank}</Text>
                    <TextInput
                        value={BankValue}
                        style={styles.formInput}
                        onChangeText={bank}
                    />
                </View>
                <View style={styles.formView}>
                    <Text style={styles.text}>{partnersEnum.bik}</Text>
                    <TextInput
                        value={BIKValue}
                        style={styles.formInput}
                        onChangeText={bik}
                    />
                    <Text style={styles.text}>{partnersEnum.payNumber}</Text>
                    <TextInput
                        value={PayNumberValue}
                        style={styles.formInput}
                        onChangeText={payNumber}
                    />
                </View>
        </View>
    )


    const FormLaw = () =>(
        <View>
            <View style={styles.formView}>
                <TextInput
                    value={SurnameValue}
                    style={styles.formInput}
                    onChangeText={surname}
                    placeholder={partnersEnum.surname}
                />
                <TextInput
                    value={NameValue}
                    style={styles.formInput}
                    onChangeText={name}
                    placeholder={partnersEnum.name}
                />
                <TextInput
                    value={ParentNameValue}
                    style={styles.formInput}
                    onChangeText={parentname}
                    placeholder={partnersEnum.parentname}
                />
            </View>
            {/*Form contact*/}
            <View style={styles.formView}>
                <Text style={styles.text}>{partnersEnum.phone}</Text>
                <TextInput
                    value={PhoneValue}
                    style={styles.formInput}
                    onChangeText={phone}
                    placeholder={partnersEnum.phonePlaceholder}
                />
                <Text style={styles.text}>{partnersEnum.email}</Text>
                <TextInput
                    value={MailValue}
                    style={styles.formInput}
                    onChangeText={mail}
                />
                {/*поменять на FlatList*/}
                <Text style={styles.text}>{partnersEnum.priceRule}</Text>
                <TextInput
                    value={PriceRuleValue}
                    style={styles.formInput}
                    onChangeText={priceRule}
                />
            </View >
            <View style={styles.formView}>
                <Text style={styles.text}>{partnersEnum.address}</Text>
                <TextInput
                    value={AddressValue}
                    style={styles.formInput}
                    onChangeText={address}
                />
                <Text style={styles.text}>{partnersEnum.inn}</Text>
                <TextInput
                    value={INNValue}
                    style={styles.formInput}
                    onChangeText={inn}
                />
                <Text style={styles.text}>{partnersEnum.bank}</Text>
                <TextInput
                    value={BankValue}
                    style={styles.formInput}
                    onChangeText={bank}
                />
            </View>
            <View style={styles.formView}>
                <Text style={styles.text}>{partnersEnum.bik}</Text>
                <TextInput
                    value={BIKValue}
                    style={styles.formInput}
                    onChangeText={bik}
                />
                <Text style={styles.text}>{partnersEnum.payNumber}</Text>
                <TextInput
                    value={PayNumberValue}
                    style={styles.formInput}
                    onChangeText={payNumber}
                />
                <Text style={styles.text}>{partnersEnum.kpp}</Text>
                <TextInput
                    value={KPPValue}
                    style={styles.formInput}
                    onChangeText={kpp}
                />
            </View>
        </View>
    )


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
        [SurnameValue, surname] = React.useState(route.params['surname']);
        [NameValue, name] = React.useState(route.params['name']);
        [ParentNameValue, parentname] = React.useState(route.params['parentname']);

        [PhoneValue, phone] = React.useState(route.params['phone']);
        [MailValue, mail] = React.useState(route.params['mail']);
        [PriceRuleValue, priceRule] = React.useState(route.params['pricerule']);
        [idValue, id] = React.useState(route.params['id']);
        update = true;
        switch (route.params['type']){
            case ("phys"):{
                [type, typeS] = React.useState("phys");
                Choose();
                break;
            }
            case ("law"):{
                [type, typeS] = React.useState("law");

                [AddressValue, address] = React.useState(route.params['address']);
                [INNValue, inn] = React.useState(route.params['inn']);
                [BankValue, bank] = React.useState(route.params['bank']);

                [PayNumberValue, payNumber] = React.useState(route.params['paynumber']);
                [BIKValue, bik] = React.useState(route.params['bik']);
                [KPPValue, kpp] = React.useState(route.params['kpp']);
                Choose();
                break;
            }
            case ("ip"):{
                [type, typeS] = React.useState("ip");

                [AddressValue, address] = React.useState(route.params['address']);
                [INNValue, inn] = React.useState(route.params['inn']);
                [BankValue, bank] = React.useState(route.params['bank']);

                [PayNumberValue, payNumber] = React.useState(route.params['paynumber']);
                [BIKValue, bik] = React.useState(route.params['bik']);
                Choose();
                break;
            }
        }
    }

    // useEffect(()=>{Choose()})

    const sendForm = async ()=> {

        const body = {
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
        };

        if(update){
            let data = await PartnersRepository.update(idValue, body)
        }else{
            let data = await PartnersRepository.post(body);

        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/*Title*/}
                <View style={styles.titleView}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {/*Add buttons*/}
                <View style={styles.closeButtonsView}>
                    {/*<Pressable style={styles.closeButtons} onPress={sendForm}>*/}
                    {/*    <Text>Записать</Text>*/}
                    {/*</Pressable>*/}
                    <TouchableWithoutFeedback onPress={sendForm} onPressIn={onPressIn} onPressOut={onPressOut}>
                        <Animated.View style={[styles.closeButtons, animatedScaleStyle]}>
                            <Text>Сохранить</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={styles.closeButtons} onPressIn={onPressIn} onPressOut={onPressOut} onPress={sendForm}>
                        <Animated.View style={[styles.closeButtons, animatedScaleStyle]}>
                            <Text>Сохранить и закрыть</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
                {/*Choose buttons*/}
                <View style={styles.chooseButtonsView}>
                    <TouchableOpacity style={styles.chooseButtons} onPress={()=>typeS("phys")}>
                        <Text>Физ.лицо</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseButtons} onPress={()=>typeS("ip")}>
                        <Text>ИП</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chooseButtons} onPress={()=>typeS("law")}>
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
            // flexDirection:"row",
            justifyContent:"center",
            alignItems: 'center',
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

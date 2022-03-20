import React from "react";
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput, Pressable, ScrollView,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
// import LinearGradient from "react-native-linear-gradient";
// import {Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';

export default function Purchases (){
    const [OrganizationValue, organization] = React.useState("");
    const [SupplierValue, supplier] = React.useState("");
    const [StorageValue, storage] = React.useState("");
    const [IntervalValue, interval] = React.useState("");

    // const object =
    //    [
    //        {
    //            "number" : 1,
    //            "date" : "24.02.2022",
    //            "document": "test",
    //            "sum": 8100,
    //            "contrAgent" : "ШИНТОРГ ТД ООО",
    //            "organization" : "Прайм-Авто ООО",
    //            "stock": "Транзит ООО"
    //        },
    //        {
    //            "number" : 2,
    //            "date" : "25.02.2022",
    //            "document": "test",
    //            "sum": 8100,
    //            "contrAgent" : "ШИНТОРГ ТД ООО",
    //            "organization" : "Прайм-Авто ООО",
    //            "stock": "Транзит ООО"
    //        },
    //    ]
    const object =
        [
            {
                "number" : 1,
                "date" : "24.02.2022",
                "document": "test",
                "sum": 8100,
                "contrAgent" : "ШИНТОРГ ТД ООО",
                "organization" : "Прайм-Авто ООО",
                "stock": "Транзит ООО"
            },
            {
                "number" : 2,
                "date" : "25.02.2022",
                "document": "test",
                "sum": 8100,
                "contrAgent" : "ШИНТОРГ ТД ООО",
                "organization" : "Прайм-Авто ООО",
                "stock": "Транзит ООО"
            },
        ]
    const CONTENT = {
        tableTitle:['number','date','document', 'sum', 'contrAgent', 'organization', 'stock'],
        tableData:[
            [1,'24.02.2022','test',8100,'ШИНТОРГ ТД ООО','Прайм-Авто ООО','Транзит ООО'],
            [2,'25.02.2022','test1',8500,'ШИНТОРГ ТД ООО','Прайм-Авто ООО','Транзит ООО'],
            [3,'26.02.2022','test2',8100,'ШИНТОРГ ТД ООО','Прайм-Авто ООО','Транзит ООО'],
        ]
    }
    // let res = object.map(function (item){
    //     return <tr key={item.number}>
    //         <td>{item.number}</td>
    //         <td>{item.date}</td>
    //         <td>{item.document}</td>
    //         <td>{item.sum}</td>
    //         <td>{item.contrAgent}</td>
    //         <td>{item.organization}</td>
    //         <td>{item.stock}</td>
    //     </tr>
    //
    // })

    function getPurchase() : void{
        const obj = {

        }
    }
    return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.center} >
                        <Text style={styles.title}>Документы закупки</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>Организация</Text>
                        <TextInput
                            onChangeText={organization}
                            value={OrganizationValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>Поставщик</Text>
                        <TextInput
                            onChangeText={supplier}
                            value={SupplierValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>Склад</Text>
                        <TextInput
                            onChangeText={storage}
                            value={StorageValue}
                            style={styles.form}
                        />

                        <Text style={styles.text}>Интервал</Text>
                        <TextInput
                            onChangeText={interval}
                            value={IntervalValue}
                            style={styles.form}
                        />

                        <Pressable style={styles.button}>
                            <Text>Добавить</Text>
                        </Pressable>
                    </View>
                    {/*<View>*/}
                    {/*    <Table borderStyle={{ borderWidth: 1 }}>*/}
                    {/*        <Row data={CONTENT.tableTitle}*/}
                    {/*             flexArr={[1,2,2,2,2,2,2]}*/}
                    {/*             style={styles.head}*/}
                    {/*             textStyle={styles.textTable}*/}
                    {/*        />*/}
                    {/*        <TableWrapper style={styles.wrapper}>*/}
                    {/*            <Rows data={CONTENT.tableData}*/}
                    {/*                  flexArr={[1,2,2,2,2,2,2]}*/}
                    {/*                  style={styles.row}*/}
                    {/*                  textStyle={styles.textTable}*/}
                    {/*            />*/}

                    {/*        </TableWrapper>*/}
                    {/*    </Table>*/}
                    {/*</View>*/}
                </ScrollView>
            </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center:{
        alignItems:'center',
    },
    title:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    form:{
        height:40,
        marginLeft:20,
        marginRight:20,
        borderWidth: 1,
        padding: 10,
        borderColor:'#804EA7'
    },
    text:{
        marginTop:20,
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        marginLeft:20,
        letterSpacing: 0.25,
    },
    button:{
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderColor:'#804EA7',
        elevation: 3,
        borderWidth: 1,
        margin:"3%",
        marginTop:"15%",
        alignSelf:"center",
    },
    head: { height: 40},
    row: { height: 28 },
    textTable: { textAlign: 'center' },
    wrapper: { flexDirection: 'row' },

});

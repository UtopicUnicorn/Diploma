import React, {useEffect, useState} from "react";

import {BarCodeScanner} from "expo-barcode-scanner";
import {Button, StyleSheet, Text, View} from "react-native";
import {navigationEnums} from "../../components/navigationEnums";

export default function QRCodeScreen({navigation}: any){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } : any = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission( 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data } : any) => {
        setScanned(true);
        testInfo(data).then((resp)=>navigation.navigate(navigationEnums.qrInfo, resp));
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

     const testInfo = async (data: any) =>{
         // let {info} = fetch(
         //
         // )
            try{
                const resp = await fetch(
                    data
                );
                return await resp.json()
            }catch (e){
                console.log(e);
            }
     }

    if (hasPermission === null) {
        return <Text>Запрос на доступ к камере</Text>;
    }
    if (hasPermission === false) {
        return <Text>Нет доступа к камере</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Нажмите для новой попытки сканирования'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

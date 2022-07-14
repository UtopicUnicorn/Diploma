import WelComeScreen from "../screens/WelcomeScreen";
// import Login from "../screens/LoginScreen";
import Purchases from "../screens/Purchases/PurchasesScreen";
import Nomenclature from "../screens/Nomenclature/NomenclatureScreen";
import AddNomenclature from "../screens/Nomenclature/AddNomenclatureScreen";
import Deals from "../screens/Deals/Deals";
import PartnersScreen from "../screens/Partners/PartnersScreen";
import PriceRules from "../screens/PriceRules/PriceRulesScreen";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import AddPartnersScreen from "../screens/Partners/AddPartnersScreen";
import AddPriceRules from "../screens/PriceRules/AddPriceRules";
import ItemsScreen from "../screens/Items/ItemsScreen";
import {navigationEnums} from "./navigationEnums";
import QRCodeScreen from "../screens/QRCode/QRCodeScreen";
import QRCodeInfo from "../screens/QRCode/QRCodeInfo";
import AddPurchases from "../screens/Purchases/AddPurchasesScreen";
import EditPurchaseScreen from "../screens/Purchases/EditPurchaseScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import AddDeal from "../screens/Deals/AddDeal";


export function Root() {
    return(
        <Drawer.Navigator initialRouteName={navigationEnums.mainScreen} screenOptions={{headerShown:true}}>
            <Drawer.Screen name={navigationEnums.main} component={WelcomeScreen} />
            <Drawer.Screen name={navigationEnums.purchases} component={Purchases} />
            <Drawer.Screen name={navigationEnums.openNomenclature} component={Nomenclature}/>
            <Drawer.Screen name={navigationEnums.addNomenclature} component={AddNomenclature}/>
            <Drawer.Screen name={navigationEnums.itemWork} component={ItemsScreen}/>
            <Drawer.Screen name={navigationEnums.deals} component={Deals}/>
            <Drawer.Screen name={navigationEnums.partners} component={PartnersScreen} />
            <Drawer.Screen name={navigationEnums.priceRule} component={PriceRules} />
            <Drawer.Screen name={navigationEnums.qrScanner} component={QRCodeScreen}/>
        </Drawer.Navigator>
    )
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Navigation(){
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={navigationEnums.root} component={Root} options={{headerShown:false}} />
            <Stack.Screen name={navigationEnums.addPartner} component={AddPartnersScreen}/>
            <Stack.Screen name={navigationEnums.addRule} component={AddPriceRules}/>
            <Stack.Screen name={navigationEnums.qrInfo} component={QRCodeInfo}/>
            <Stack.Screen name={navigationEnums.addPurchases} component={AddPurchases}/>
            <Stack.Screen name={navigationEnums.editPurchases} component={EditPurchaseScreen}/>
            <Stack.Screen name={navigationEnums.addDeals} component={AddDeal}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

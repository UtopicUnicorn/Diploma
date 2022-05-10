import WelComeScreen from "../screens/WelcomeScreen";
// import Login from "../screens/LoginScreen";
import Purchases from "../screens/PurchasesScreen";
import Nomenclature from "../screens/NomenclatureScreen";
import AddNomenclature from "../screens/AddNomenclatureScreen";
import Deals from "../screens/Deals";
import PartnersScreen from "../screens/PartnersScreen";
import PriceRules from "../screens/PriceRulesScreen";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import AddPartnersScreen from "../screens/AddPartnersScreen";
import AddPriceRules from "../screens/AddPriceRules";
import ItemsScreen from "../screens/ItemsScreen";
import {navigationEnums} from "./navigationEnums";


export function Root() {
    return(
        <Drawer.Navigator initialRouteName={navigationEnums.mainScreen} screenOptions={{headerShown:true}}>
            <Drawer.Screen name={navigationEnums.main} component={WelComeScreen} />
            {/*<Drawer.Screen name="LoginScreen" component={Login} />*/}
            <Drawer.Screen name={navigationEnums.purchases} component={Purchases} />
            <Drawer.Screen name={navigationEnums.openNomenclature} component={Nomenclature}/>
            <Drawer.Screen name={navigationEnums.addNomenclature} component={AddNomenclature}/>
            <Drawer.Screen name={navigationEnums.itemWork} component={ItemsScreen}/>
            <Drawer.Screen name={navigationEnums.deals} component={Deals}/>
            <Drawer.Screen name={navigationEnums.partners} component={PartnersScreen} />
            <Drawer.Screen name={navigationEnums.priceRule} component={PriceRules} />
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
        </Stack.Navigator>
    </NavigationContainer>
    );
}

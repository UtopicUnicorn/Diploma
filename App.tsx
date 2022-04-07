import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelComeScreen from "./screens/WelcomeScreen";
import Login from "./screens/LoginScreen";
import PartnersScreen from "./screens/PartnersScreen";
import PriceRules from "./screens/PriceRulesScreen";
import Purchases from "./screens/PurchasesScreen";
import {createStackNavigator} from "@react-navigation/stack";
import AddPartnersScreen from "./screens/AddPartnersScreen";
import AddPriceRules from "./screens/AddPriceRules";
import Deals from "./screens/Deals";
import Nomenclature from "./screens/NomenclatureScreen";
import AddNomenclature from "./screens/AddNomenclatureScreen";


function Root() {
    return(
            <Drawer.Navigator initialRouteName="WelcomeScreen" screenOptions={{headerShown:true}}>
                <Drawer.Screen name="WelcomeScreen" component={WelComeScreen} />
                <Drawer.Screen name="LoginScreen" component={Login} />
                <Drawer.Screen name="PartnersScreen" component={PartnersScreen} />
                <Drawer.Screen name="PriceRulesScreen" component={PriceRules} />
                <Drawer.Screen name="Purchases" component={Purchases} />
                <Drawer.Screen name="Deals" component={Deals}/>
                <Drawer.Screen name="Nomenclature" component={Nomenclature}/>
                <Drawer.Screen name="Create Nomenclature" component={AddNomenclature}/>
            </Drawer.Navigator>
    )
}


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name={"Root"} component={Root} options={{headerShown:false}} />
                <Stack.Screen name={"AddPartners"} component={AddPartnersScreen}/>
                <Stack.Screen name={"AddPriceRules"} component={AddPriceRules}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

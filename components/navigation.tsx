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


export function Root() {
    return(
        <Drawer.Navigator initialRouteName="Главный экран" screenOptions={{headerShown:true}}>
            <Drawer.Screen name="Главная" component={WelComeScreen} />
            {/*<Drawer.Screen name="LoginScreen" component={Login} />*/}
            <Drawer.Screen name="Закупки" component={Purchases} />
            <Drawer.Screen name="Просмотр номенклатуры" component={Nomenclature}/>
            <Drawer.Screen name="Создание номенклатуры" component={AddNomenclature}/>
            <Drawer.Screen name="Работа с товаром" component={ItemsScreen}/>
            <Drawer.Screen name="Сделки с клиентами" component={Deals}/>
            <Drawer.Screen name="Контрагенты" component={PartnersScreen} />
            <Drawer.Screen name="Ценовые правила" component={PriceRules} />
        </Drawer.Navigator>
    )
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Navigation(){
    return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"Root"} component={Root} options={{headerShown:false}} />
            <Stack.Screen name={"Добавить контрагентов"} component={AddPartnersScreen}/>
            <Stack.Screen name={"Добавить ценовое правило"} component={AddPriceRules}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

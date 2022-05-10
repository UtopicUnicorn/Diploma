import 'react-native-gesture-handler';
import * as React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import WelComeScreen from "./screens/WelcomeScreen";
import Login from "./screens/LoginScreen";
// import PartnersScreen from "./screens/PartnersScreen";
// import PriceRules from "./screens/PriceRulesScreen";
// import Purchases from "./screens/PurchasesScreen";
// import {createStackNavigator} from "@react-navigation/stack";
// import AddPartnersScreen from "./screens/AddPartnersScreen";
// import AddPriceRules from "./screens/AddPriceRules";
// import Deals from "./screens/Deals";
// import Nomenclature from "./screens/NomenclatureScreen";
// import AddNomenclature from "./screens/AddNomenclatureScreen";
import {useState} from "react";
import Navigation from "./components/navigation";
// import {SafeAreaView, View} from "react-native";


// function Root() {
//     return(
//             <Drawer.Navigator initialRouteName="Главный экран" screenOptions={{headerShown:true}}>
//                 <Drawer.Screen name="Главная" component={WelComeScreen} />
//                 <Drawer.Screen name="LoginScreen" component={Login} />
//                 <Drawer.Screen name="Закупки" component={Purchases} />
//                 <Drawer.Screen name="Просмотр номенклатуры" component={Nomenclature}/>
//                 <Drawer.Screen name="Создание номенклатуры" component={AddNomenclature}/>
//                 <Drawer.Screen name="Сделки с клиентами" component={Deals}/>
//                 <Drawer.Screen name="Контрагенты" component={PartnersScreen} />
//                 <Drawer.Screen name="Ценовые правила" component={PriceRules} />
//             </Drawer.Navigator>
//     )
// }
//
//
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

export const AuthContext = React.createContext({
    isAuth: false,
    // @ts-ignore
    setIsAuth: auth => {},
});

export default function App() {

    const [isAuth, setIsAuth] = useState(false);


    return (
        // <AuthContext.Provider value={{isAuth, setIsAuth}}>
        //  {/*<NavigationContainer>*/}
        //  {/*    <Stack.Navigator screenOptions={{headerShown:false}}>*/}
        //  {/*        <Stack.Screen name={"Root"} component={Root} options={{headerShown:false}} />*/}
        //  {/*       <Stack.Screen name={"Добавить контрагентов"} component={AddPartnersScreen}/>*/}
        //  {/*        <Stack.Screen name={"Добавить ценовое правило"} component={AddPriceRules}/>*/}
        //  {/*    </Stack.Navigator>*/}
        //  {/*</NavigationContainer>*/}
        //     {!isAuth ? <Login/> : <Navigation/>}
        // </AuthContext.Provider>
        <Navigation/>
    );
}

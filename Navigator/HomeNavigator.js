import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsContainer from "../screens/products/ProductsContainer";
import SingelProduct from "../screens/products/SingelProduct";

const Stack = createStackNavigator();

function MyStack() {

    return(
        <Stack.Navigator
       
       >
            <Stack.Screen
            name='Home'
            component={ProductsContainer}
            options={{
                headerShown:false
            }}
            />     

          <Stack.Screen
            name='Product Detail'
            component={SingelProduct}
            options={{
                headerShown:false
            }}
            />  
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack/>
}
import React , {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native'
import HomeNavigator from './HomeNavigator';
import CartNavigation from './CartNavigation'
import UserNavigation from './UserNavigation';
import SingelProduct from '../screens/products/SingelProduct';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import Order from '../screens/admin/Order';
import CartIcon from '../shared/CartIcon';
const Tab =  createBottomTabNavigator();

const Main = () => {
  
    return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
            showLabel:false,
            activeTintColor: "#47A73E",
            keyboardHidesTabBar: true ,
           
        }}
        >
            <Tab.Screen
            name='Home'
            screenOptions={{ headerShown: false }}
            component={HomeNavigator}
            options={{
                tabBarIcon : ({color}) => (
                    <Icon
                    name ="home"
                    style={{position:'relative'}}
                    color={color}
                    size={30}
                    />
                ) 
            }}
            />

      

          <Tab.Screen
            name='Cart'
            component={CartNavigation}
            options={{
                tabBarIcon : ({color}) => (
                    <View>
                    <Icon
                    name ="shopping-cart"
                    style={{position:'relative'}}
                    color={color}
                    size={30}
                    />
                    <CartIcon/>
                    </View>
                ) 
            }}
            />

            
          <Tab.Screen
            name='Admin'
            component={Order}
            options={{
                tabBarIcon : ({color}) => (
                    <Icon
                    name ="cog"
                    style={{position:'relative'}}
                    color={color}
                    size={30}
                    />
                ) 
            }}
            />

            

        </Tab.Navigator>
    )

}

export default Main
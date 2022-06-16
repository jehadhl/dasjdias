import React from "react";
import { StyleSheet,Image ,SafeAreaView ,View ,Text} from "react-native";
import { H1 ,Left ,Right, Container } from "native-base";
import {useFonts} from 'expo-font'
import AppLoading from "expo-app-loading";
import { 
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic 
  } from '@expo-google-fonts/poppins'



const Header = () => {

    let [fontLoaded , error] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Font:Poppins_600SemiBold,
        Poppins_700Bold
    })
 
    
            if(!fontLoaded) {
                return <AppLoading/>
            }
            
    return(
         <View style={[{flexDirection:'row', alignItems:'center'}]}>
         <View style={[{flex:1,flexDirection:'row' , paddingLeft:10}]}>
         <Text style={styles.text}>Al Hair</Text>
         </View>
         <View style={[{justifyContent:'space-evenly', marginVertical:10,paddingRight:20}]}>
         <Image source={require('../assets/logo.png')}   resizeMode="contain" style={{height:62 ,width:66}} />
         </View>
         </View>
    )
}

const styles = StyleSheet.create({
    header : {
      position:'relative'
    
    },
    text : {
        fontSize:26,
        fontWeight:'bold',
        color:'#000',
        fontFamily:'Font',
    },
    textt: {
        color:'green',
        fontWeight:'bold',
        fontSize:20
    }
})


export default Header
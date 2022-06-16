import React from "react";
import { StyleSheet ,View ,Text  } from "react-native";


const Error = (props) => {
    return (
        <View style={styles.container}>
             <Text style={styles.text}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {   
        margin:10
    },
    text: {
        color:'red',
        textAlign:"center"
    }
})


export default Error;
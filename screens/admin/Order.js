import React from 'react'
import { StyleSheet, Button, View , Text} from 'react-native'




const Order = () => {
 
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30 ,fontWeight:'bold'}}>Order</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
       
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Order
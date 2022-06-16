import React from "react";
import { View , Dimensions , StyleSheet ,Image ,Text ,Button} from 'react-native'

var {width} = Dimensions.get('window');

import { connect } from 'react-redux';
import * as actions from '../../Redux/Action/cartActions'

const ProductsCart = (props) => {
    const {name , price ,image ,countInStock} = props;
    return (
      <View style={styles.container}>
          
          <Image resizeMode="contain" style={styles.image}
          source={{uri : image ? image : "https://m.media-amazon.com/images/I/31iUt+FGBhL._AC_.jpg"}}
          />
          <View style={styles.card}/>
          <Text style ={styles.title}>
            {
            name.length > 15 ? name.substring(0 , 15 - 3) 
              + '...' : name
            }
          </Text>
          <Text style={styles.price}>{price}dhs</Text>
          { countInStock > 0 ? (
              <View style ={{marginTop:10, width:'100%',borderRadius:20}}>
                 <Button title={'Add'} 
                 color={'green'}
                 onPress={()=> {
                     props.addItemToCart(props)
                 }}
                 />
              </View>
          ): <Text style={{marginTop:20}}>Currentely Unavaible</Text>
          }
      </View>
    )
}

const mapDispatchToProps =(dispatch) => {
    return {
        addItemToCart : (product) => 
        dispatch(actions.addToCart({quantity:1 ,product}))

    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 -20,
        height:width /1.8,
        padding:10,
        borderRadius:10,
        marginTop:30,
        marginBottom:5,
        marginLeft:10,
        alignItems:'center',
        elevation:8,
        backgroundColor:'#f7f7f7'
    },

    image : {
        width: width / 2 - 20 - 5,
        height: width / 2 - 20 - 30,
        backgroundColor:'transparent',
        position:'absolute',
        top:-20,
        borderRadius:10  
    },

    card : {
        marginBottom:20,
        height:width /2 - 20 - 90,
        backgroundColor:'transparent',
        width: width /2 - 20 - 10,
    }, 

    title : {
        fontSize:18,
        fontWeight:"bold",
        textAlign:'left',
        marginTop:2
    },

    price: {
        fontSize:14,
        fontWeight:"bold",
        color:'#a0a0a0',
        marginTop:5
    },
  
})

export default connect(null ,mapDispatchToProps)(ProductsCart)
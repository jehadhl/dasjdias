import React , {useState , useEffect} from "react";
import { View , ScrollView ,Button , Text ,Image , StyleSheet ,Alert, Dimensions} from 'react-native'
import { H1 ,Left ,Right, Container } from "native-base";

import { connect } from 'react-redux';
import * as actions from '../../Redux/Action/cartActions'
var {height} =Dimensions.get('window')

const SingelProduct =(props) => {

    const [item , setItem]= useState(props.route.params.item);
    const [availability , setAvailability] = useState('');


    return (
        <Container style={styles.container}>
           <ScrollView style={{marginBottom:80 , padding:5 }}>
                <View>
                   <Image
                    source={{
                        uri : item.image ? item.image :
                        "https://m.media-amazon.com/images/I/31iUt+FGBhL._AC_.jpg"
                    }}
                    resizeMode="contain"
                    style={styles.image}
                   />
                </View>
                <View style={styles.contentContainer}>
                     <H1 style={styles.contentHeader}>{item.name}</H1>
                     <Text style={styles.contantText}>{item.brand}</Text>
                    
                </View>
                <View style={styles.contentContainer}>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
           </ScrollView>
           <View style={styles.bottomContainer}>
              <Left>
                <Text style={styles.price}>{item.price}Dhs</Text>
              </Left>
              <Right>
                  <View style={styles.button}>
                  <Button title="Add To Card"  color={"#47A73E"}
                    onPress={()=> {
                        props.addItemToCart(item)
                    }}
                  />
                  </View>
              </Right>
           </View>
        </Container>

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
        position:"relative",
       
    },
    imageContainer: {
        backgroundColor:'white',
        padding:0
    },
    image:{
        width:'100%',
        height:250
    },
    contentContainer:{
          marginTop:20,
          width:'100%'
    },
    contentHeader:{
        marginBottom:5,
        fontWeight:'bold',
        paddingLeft:10
    },
    contantText:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:20,
        color:"#a0a0a0",
        paddingLeft:10
      
    },
    description:{
        marginBottom:5,
        fontWeight:'bold',
        paddingLeft:10,
        fontSize:17,  
    },

    bottomContainer: {
          flexDirection:'row',
          position:'absolute',
          bottom:10,
          left:0,
          backgroundColor:'white'
    },
    price: {
        color:"#000",
        fontSize:24,
        fontWeight:'bold',
        paddingLeft:20
    },

    button:{
       marginRight:10,
    }




})

export default connect(null ,mapDispatchToProps)(SingelProduct)
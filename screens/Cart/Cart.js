import React from 'react'
import {View , Dimensions , StyleSheet ,Button, Image } from 'react-native';
import { clearCart } from '../../Redux/Action/cartActions';
import { removeFromCart } from '../../Redux/Action/cartActions';
import { ScrollView } from 'react-native-virtualized-view';
import * as actions from '../../Redux/Action/cartActions'
import assete from "../../"
import {
  Container,
  Text,
  Left,
  Right,
  H1,
  Body,
  ListItem,
  Thumbnail,
  Icon
} from 'native-base'
import { connect } from 'react-redux' 
var {width , height} = Dimensions.get('window')
import {SwipeListView} from 'react-native-swipe-list-view'
import CartItem from './CartItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Cart = (props) => {

  var total=0;
  props.cartItems.forEach(cart => {
    return (total += cart.product.price)
  });

  return (
   <>
   {props.cartItems.length ? (
     <>
      <ScrollView contentContainerStyle={StyleSheet.container}>
        <View style={{height:height }}>
          <Container style={{height:height}}>
        <H1 style={{alignItems:'center',justifyContent:'center',textAlign:'center',
        fontWeight:'bold'
      
      }}>Cart</H1>
            <SwipeListView
            style={{height:height }}
            data={props.cartItems}
            renderItem={(data)=> {
               return (
              <CartItem item={data}/>
               )
            }}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity style={styles.hiddenButton}
                onPress={()=>props.removeFromCart(data.item)}
                >
                  <Icon size={30} color={'white'} name='trash'/>
                </TouchableOpacity>
              </View>
             )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
            />
      
            
        <View style={styles.bottomContainer}>
          <Left>
             <Text style={styles.price}>{total}dhs</Text>
          </Left>
          <Right style={{marginLeft:50 , width:100}}>
            <Button title='Clear' 
            color={'red'} 
            onPress={()  => props.clearCart()}/>
          </Right>
          <Right style={{marginRight:20}}>
            <Button title='Cheakout' color={'green'} onPress={() => props.navigation.navigate('Cheakout')}/>
          </Right>
        </View>
        </Container>
            </View>
        </ScrollView> 
      </>
   ): (
    <Container style={styles.empty}>
         <Image source={require('../../assets/cartemty.png')} style={{marginBottom:10,height:152 ,width:156}}/>
        <Text>Looks like your cart is Empty </Text>
        <Text>Add Products to your cart to get Started</Text>
    </Container>
   )}
   </>
  )
}

const mapStateToProps = (state) => {
    const {cartItems} = state
    return{
        cartItems: cartItems, 
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart : () => dispatch(actions.clearCart()),
    removeFromCart : (item) => dispatch(actions.removeFromCart(item))
  }
}

const styles = StyleSheet.create({

         container: {
          height:height,
          alignContent:'center',
          backgroundColor:'white',
          zIndex:2
          
        },

      empty: {
        height: height ,
        justifyContent:'center',
        alignItems:'center'
      },
      listItem:{
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'center'
      },
      body: {
        margin:10,
        alignItems:'center',
        flexDirection:'row'
      },
      bottomContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        left:0,
        backgroundColor:'white',
        elevation:8,
        backgroundColor:'#fff',
        
      },
      price:{
        fontSize:18,
        margin:20,
        color:'green',
        width:100
      },
      hiddenContainer:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row'
      },
      hiddenButton: {
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:25,
        height:70,
        width:width/1.2
      },
      empty: {
        justifyContent:'center',
        alignItems:"center"
      }
})

export default connect(mapStateToProps , mapDispatchToProps)(Cart);
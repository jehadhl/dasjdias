import React, { useEffect, useState } from 'react'
import {View ,Button , Linking} from 'react-native'
import { Item , Picker } from 'native-base'
import FormContainer from '../../../shared/Form/FormContainer'
import Input from '../../../shared/Form/Input'
import { Icon } from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'

const countries = require('../../../assets/data/countries.json')

const Cheakout = (props) => {
  const [orderItems ,setOrderItems] =useState()
  const [address ,setAddress] = useState()
  const [address2 ,setAddress2] = useState()
  const [city ,setCity]=useState()
  const[fullName ,setFullName]=useState()
  const [zip,setZip]=useState()
  const [email,setEmail]=useState()
  const [contry , setContry]=useState()
  const [phone ,setPhone]=useState()

  useEffect(()=> {
    setOrderItems(props.cartItems)
  
    return () => {
      setOrderItems();
    }
  },[])

const cheakOut =( ) => {
     let order ={
       city,
       contry,
       dateOrdered: Date.now(),
       orderItems,
       phone,
       shippingAddress1:address,
       shippingAddress2:address2,
       zip,
       email,
       fullName,
     }
     props.navigation.navigate('Payment',{order:order})
    }
    
  return (
      <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
      >
        <FormContainer title={'Shipping Address'}>
            <Input
             placeholder={"Phone"}
             name={'phone'}
              value={phone}
              keyboardType={"numeric"}
              onChangeText={(text) => setPhone(text)
              }
            />

          <Input
             placeholder={"Full Name"}
             name={'fullName'}
              value={fullName}
              onChangeText={(text) => setFullName(text)
              }
            />

           <Input
             placeholder={"Email"}
             name={'email'}
              value={email}
              onChangeText={(text) => setEmail(text)
              }
            />

            <Input
             placeholder={'Shipping Address 1'}
             name={'ShippingAddress1'}
              value={address}
              onChangeText={(text) => setAddress(text)
              }
            />
            
           <Input
             placeholder={'Shipping Address 2'}
             name={'ShippingAddress2'}
              value={address2}
              onChangeText={(text) => setAddress2(text)
              }
            />  
           <Input
             placeholder={'City'}
             name={'city'}
              value={city}
              onChangeText={(text) => setCity(text)
              }
            />
           <Input
              placeholder={'Zip Code'}
              name={'zip'}
              value={zip}
              keyboardType={"numeric"}
              onChangeText={(text) => setZip(text)
              }
            />
        <Item picker style={{alignItems:'center', justifyContent:'center'}}>
          <Picker
          mode='dropdown'
          iosIcon={<Icon name='arrow-down' color={'#007aff'}/>}
          style={{width:undefined}}
          selectedValue={contry}
          placeholder="Select your Country"
          placeholderStyle={{color:'#007aff'}}
          placeholderIconColor='#007aff'
          onValueChange={(e)=> setContry(e)}
          >
            {countries.map((c)=> {
              return <Picker.Item
              key={c.code}
              label={c.name}
              value={c.name}
              /> 
            })} 
          </Picker>
        </Item>
        <View style={{width:'80%' , alignItems:'center', marginTop:10}}>
            <Button title='Payment' color={'green'}
            onPress={()=> cheakOut()}
            />
        </View>
        </FormContainer>
      </KeyboardAwareScrollView>
  )
}

const mapStateToProps = (state) => {
  const {cartItems} = state;
  return {
    cartItems:cartItems,
  }
}


export default connect(mapStateToProps)(Cheakout)
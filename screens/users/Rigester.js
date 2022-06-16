import React, { useState } from 'react'
import {Text, View ,StyleSheet ,Button} from 'react-native'
import FormContainer from '../../shared/Form/FormContainer'
import Input from '../../shared/Form/Input'
import Error from '../../shared/Error'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register= (props) => {
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')
    const [name , setName] = useState('')
    const [password , setPassword] = useState('')
    const [error , setError] = useState('')

   const register = () => {
      if (
          email === '' ||
          name === '' ||
          phone === ''||
          password === ''
      ) {
          setError('Please fill in the form correctly')
      }

      let user = {
          name : name ,
          email: email,
          password:password,
          phone:phone,
          isAdmin:false
      }
   }

  return (
    <KeyboardAwareScrollView
     viewIsInsideTabBar={true}
     extraHeight={200}
     enableOnAndroid={true}
    >
        <FormContainer title={"Register"}>
             <Input
             placeholder={"Email"}
             name={'email'}
             id={'email'}
             value={email}
             onChangeText={(text) => setEmail(text.toLowerCase())}
             />

            <Input
             placeholder={"Phone Number"}
             name={'phone'}
             id={'phone'}
             value={phone}
             keyboardType={"numeric"}
             onChangeText={(text) => setPhone(text.toLowerCase())}
             />

             <Input
             placeholder={"Name"}
             name={'name'}
             id={'name'}
             value={name}
             onChangeText={(text) => setName(text.toLowerCase())}
             />
                <Input
             placeholder={"Password"}
             name={'password'}
             id={'password'}
             secureTextEntry={true}
             onChangeText={(text) => setPassword(text.toLowerCase())}
             />
           <View>
               {error ? <Error message={error} /> : null}
           </View>
           <View style={{marginBottom:30 , marginTop:10}}>
                <Button title={"Register"} onPress={()=> register()} color={'green'}/>
           </View>
           <View>
                <Button title={"Back to Login"} color={'orange'} onPress={()=> 
                props.navigation.navigate('Login')
                }/>
           </View>
        </FormContainer>
    </KeyboardAwareScrollView>
  )
}

export default Register
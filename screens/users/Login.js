import React , {useState}from 'react'
import {Text , View ,StyleSheet ,Button} from 'react-native'
import FormContainer from '../../shared/Form/FormContainer'
import Input from '../../shared/Form/Input'
import Error from '../../shared/Error'


const Login = (props) => {
      
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState()
    const [error , setError] = useState('')

    const handleSubmit =() => {
        const user  ={
            email,
            password
        }

        if(email==="" || password==="") {
           setError('Please fill in your credentail')
        }
        else{
            setError('Success')
        }
    }


  return (
    
        <FormContainer title={"Login"}>
            <Input
             placeholder={'Enter your Email'}
             name={'email'}
             id={"email"}
             value={email}
             onChangeText={(text)=> setEmail(text)}
            />
            <Input
            placeholder={'Enter your Password'}
            name={'password'}
            id={'password'}
            secureTextEntry={true}
            value={password}
            onChangeText={(text)=> setPassword(text)}
            />
            <View style={styles.button}>
                {error ? <Error message={error} /> : null}
                <Button title='Login' color={"orange"} onPress={()=> handleSubmit()}/>
            </View>
            <View style={[{margin: 20 , width:160} , styles.buttonGroup]}>
                 <Text style={styles.middleText}>Don't have an account yet?</Text>
                 <Button title='Register'color={'green'} onPress={()=> props.navigation.navigate("Register")}/>
            </View>
        </FormContainer>

  )
}

const styles = StyleSheet.create({
    buttonGroup:{
        width:'90%',
        alignItems:'center'
    },
    middleText:{
        marginBottom:20,
        fontSize:20,
        fontWeight:'bold'
    },
    button : {
        width: 120,
    }
})

export default Login
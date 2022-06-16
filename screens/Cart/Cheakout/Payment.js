import {View ,Button} from 'react-native';
import React, { useState } from 'react'
import {
    Container,
    Header,
    Content,
    ListItem,
    Text,
    Radio,
    Right,
    Left,
    Icon,
    Picker,
    Body,
    Title
}  from 'native-base'

const methods =[
   
    {name :"Paypal", value :"1"},
  
]
// const paymentCards =[
//        {name:'Wallet', value: 1},
//        {name:'Visa', value: 2},
//        {name:'MasterCard', value: 3},
//        {name:'Other', value: 4}
// ]


const Payment= (props) => {

    const order = props.route.params;
    const [card , setCard] = useState()
    const [selected ,setSelected] = useState()

    return (
       <Container>
           <Header>
               <Body>
                   <Title> your payment</Title>
               </Body>
           </Header>
           <Content>
               {methods.map((item , index) => {
                   return (
                     <ListItem key ={item.name} onPress={()=>setSelected(item.value)}>
                         <Left>
                             <Text>{item.name}</Text>
                         </Left>
                       
                     </ListItem>
                   )
               })}
               {/* {selected==2 ? (
                    <Picker
                    mode='dropdown'
                    iosIcon={<Icon  name={'arrow-down'}/>}
                    headerStyle={{backgroundColor:'green'}}
                    headerBackButtonTextStyle={{color:'#fff'}}
                    headerTitleStyle={{color:'#fff'}}
                    selectedValue={card}
                    onValueChange={(x)=> setCard(x)}
                    >
                        {paymentCards.map((c,index)=> {
                         return <Picker.Item 
                         key={c.name}
                         label={c.name}
                         value={c.name}
                         />
                        })}
                   </Picker>
               ):null} */}
                <View style={{marginTop:60 , alignSelf:'center'}}>
                   <Button
                    title='Confirm'
                    onPress={()=> props.navigation.navigate('Confirm',{order})}
                   />
                </View>

           </Content>
       </Container>

    )
}

export default Payment;
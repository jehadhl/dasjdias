import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  ViewPropTypes,
} from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../../Redux/Action/cartActions";
var { height, width } = Dimensions.get("window");

const Confirm = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const confirm = props.route.params;
  useEffect(() => {
    if(!props.route.params) return; 
    let totalValue = props.route.params.order.order.orderItems.reduce(
      (count, item) => count + item.product.price,
      0
    );
    setTotalPrice(totalValue);
  });

  const confirmOrder = async () => {
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate("Cart"); //Why are you redirecting to cart here?
    }, 500);
   
    let data = {};
    data.shippingAddress1 = confirm.order.order.shippingAddress1;
    data.shippingAddress2 = confirm.order.order.shippingAddress2;
    data.phone = confirm.order.order.phone;
    data.city= confirm.order.order.city;
    data.country= confirm.order.order.country;
    data.fullName = confirm.order.order.fullName;
    data.zip = confirm.order.order.zip;
    data.myEmail = confrim.order.order.email;
     await fetch('/confirm-order', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    });
  };

 
  return (
    <ScrollView contentContainerStyle={StyleSheet.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {props.route.params ? (
          <View
            style={{
              borderWidth: 3,
              borderColor: "green",
              marginTop: 10,
              marginBottom:10,
              borderRadius: 5,
            }}
          >
            <Text style={styles.shipping}>Shipping to :</Text>
            <View style={{ padding: 8 }}>
              <Text style={{fontSize:17}}>Full Name: {confirm.order.order.fullName}</Text>
              <Text style={{fontSize:17}}>Phone: {confirm.order.order.phone}</Text>
              <Text style={{fontSize:17}}>Email: {confirm.order.order.email}</Text>
              <Text style={{fontSize:17}}>Address: {confirm.order.order.shippingAddress1}</Text>
              <Text style={{fontSize:17}}>Address 2: {confirm.order.order.shippingAddress2}</Text>
              <Text style={{fontSize:17}}>City: {confirm.order.order.city}</Text>
              <Text style={{fontSize:17}}>Country: {confirm.order.order.contry}</Text>
              <Text style={{fontSize:17}}>Zip: {confirm.order.order.zip}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>

            {confirm.order.order.orderItems.map((x, idx) => {
              if (confirm.order.order.orderItems.length - 1 === idx) {
                const total = confirm.order.order.orderItems.reduce(
                  (count, item) => count + item.product.price,
                  0
                );
              }
              return (
                <>
                  <ListItem
                    style={styles.listItem}
                    key={x.product.name}
                    avatar 
                  >
                    <Left>
                      <Thumbnail source={{ uri: x.product.image }} />
                    </Left>

                    <Body style={styles.body}>
                      <Left>
                        <Text>{x.product.name}</Text>
                      </Left>
                      <Right>
                        <Text>{x.product.price}Dhs</Text>
                      </Right>
                    </Body>
                  </ListItem>
                </>
              );
            })}
          </View>
        ) : null}
        <View style={{fontSize:20}}>
          <Text style={{fontSize:21 , fontWeight:'bold'}}>Total:{totalPrice}Dhs</Text>
        </View>
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title="place order" onPress={confirmOrder} color="green"/>
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignSelf: "center",
    margin: 8,
  },
  shipping: {
    alignSelf: "center",
    margin: 8,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:10,
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 10,
  },
});

export default connect(null, mapDispatchToProps)(Confirm);

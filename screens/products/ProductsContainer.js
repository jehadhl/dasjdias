import React , {useEffect, useState} from 'react';
import {View ,Text, StyleSheet , ActivityIndicator , FlatList ,Dimensions } from 'react-native';
import { Container ,Icon , Item ,Header, Input } from 'native-base';

import ProductsList from './ProductsList';
import SearchedProducts from './SearchedProducts';
import Banner from '../../shared/Banner';

import { ScrollView } from 'react-native-virtualized-view';

var {height} = Dimensions.get('window')
const data = require('../../assets/data/products.json');
const productsCategory = require('../../assets/data/category.json')




const ProductsContainer = (props) => {
    const [products , setProducts] = useState([]);
    const [productsFiltered , setProductsFiltered] =useState([])
    const [focus ,setFoucs] = useState()
    const [categoryies ,setCategoryies]=useState([])
    const [productCtg ,setProductCtg] = useState([])
    const [active, setActive]=useState()
    const [initialState , setInitialState]=useState([])

    useEffect (() => {
        setProducts(data);
        setProductsFiltered(data)
        setFoucs(false)
        setCategoryies(productsCategory)
        setProductCtg(data)
        setActive(-1)
        setInitialState(data)

        return () => {
            setProducts([]) ;
            setProductsFiltered([]) ;
            setFoucs()
            setCategoryies([])
            setProductCtg([])
            setActive()
            setInitialState()
        }
    },[])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFoucs(true)
    }

    const onBlur = () => {
        setFoucs(false)
    }

    // const changeCtg = (ctg) => {
    //       {
    //           ctg === "all"
    //           ? [(setProductCtg(initialState) ,setActive(true))]
    //           : [setProductCtg(
    //               products.filter((i) => i.category.id === ctg),
    //               setActive(true)
    //           )]
    //       }
    // }

    return(
        <Container style={{position:"absolute"}}>
            <Header searchBar rounded style={styles.header}>
                <Item>
                    <Icon name="ios-search"/>
                    <Input placeholder="Search"
                     onFocus={openList}
                     onChangeText={(text)=> searchProduct(text)}
                    />
                    { focus == true ?  (
                        <Icon onPress={onBlur} name="ios-close"/>
                    ): null
                    }
                </Item>
            </Header>
            {focus == true ? (
                <SearchedProducts 
                navigation={props.navigation}
                productsFiltered={productsFiltered}/>
             ) :(
                 <ScrollView >
                <View  >
                <View>
                    <Banner/>
                </View>
                <Text style={{color:'#697D7C' , fontSize: 22 , fontWeight:'bold' , paddingHorizontal:20, paddingTop:12}}>A perfect vegetable</Text>
               <View style={styles.listContainer}>
                <FlatList 
                numColumns={2}
                data ={products}
                keyExtractor={item => item.name}
                renderItem={({item})=> 
                <ProductsList
                      navigation={props.navigation}
                       key={item.id}
                      item={item}
                      
                />}
                />
                </View>    
            </View>
            </ScrollView>
         
            )}      
        </Container>
    )
}

const styles =StyleSheet.create({

    container:{
      flexWrap:'wrap',
    },
    
    listContainer: { 
        flexDirection:'row',
        alignItems:'flex-start',
         marginBottom:160
      
    },
    header: {
        backgroundColor:'green',
    
    }
})


export default ProductsContainer
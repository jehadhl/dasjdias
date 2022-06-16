import React , {useEffect, useState} from "react";
import {Image ,StyleSheet,Dimensions, View ,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'

var {width} = Dimensions.get('window');

const Banner = () => {
    const [bannerData , setBannerData] = useState([]);
     useEffect(()=> {
         setBannerData([
                 "https://as1.ftcdn.net/v2/jpg/02/72/24/76/1000_F_272247623_GmzIc6nAHj7OAFlIRxVdiNkaRoGT3ZsA.jpg",
                 "https://as1.ftcdn.net/v2/jpg/02/72/61/04/1000_F_272610481_sG8NpOrkR9RcqwtkgOk1LxZDcT3GCzru.jpg"

         ])

         return () => {
             setBannerData([])
         }
     },[])

     return (
         <ScrollView>
         <View style={styles.container}>
               <View style={styles.swiper}>
                   <Swiper showsButtons={false}
                   style={{height:170}}
                   autoplay={true}
                   autoplayTimeout={4}
                   dotColor={'white'}
                   
                   >
                        {
                            bannerData.map((item)=> {
                               return (
                                   <Image 
                                     key={item}
                                     resizeMode="contain"
                                     source={{uri:item}}
                                     style={styles.imageBanner}
                                   />        
                               )
                            })
                        }
                   </Swiper>
               </View>
         </View>
         </ScrollView>

     )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    swiper:{
        width:width,
        alignItems:"center",
        marginTop:10
    },
    imageBanner: {
        height: 155 ,
        width:width - 40,
        borderRadius:10,
        marginTop:5,
        marginHorizontal:20
    }
})

export default Banner


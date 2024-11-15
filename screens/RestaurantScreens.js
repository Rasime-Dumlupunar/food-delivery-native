import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { themeColors } from '../theme';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux/dist/react-redux';
import { setRestaurant } from '../slices/restaurantSlice';


const RestaurantScreens = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  const dispatch = useDispatch();
  //console.log('Restaurant:', item)

  useEffect(() => {
    if(item && item.id) {
      dispatch(setRestaurant({...item}))
    }

  }, [])

  return (
    <View>
      <CartIcon/>
      <StatusBar style='light'/>
      <ScrollView>
        <View style={styles.viev}>
          <Image style={styles.image} source={item.image}/>
          <TouchableOpacity style={styles.opacity}
          onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{borderTopLeftRadius:40, borderTopRightRadius:40, backgroundColor:'white', paddingTop:24, marginTop:-12}}>
        <View style={{ paddingHorizontal:20 }}>
          <Text style={{ fontSize: 28, fontWeight:'bold'}} > {item.name}</Text>
          <View style={{flexDirection:'row'}}>
            <View style={styles.row}>
                <Image source={require('../assets/images/categories/star.png')} style={styles.star}/>
                  <Text style={styles.containerstar}>
                  <Text style={styles.textstar}>{item.stars}</Text>
                  <Text style={styles.review}>
                      ({item.reviews} review) • <Text>{item.category}</Text></Text>
                          </Text>
              </View>

                    <View style={styles.iconbar}>
                        <EvilIcons name="location" size={25} color="gray" style={styles.icon}/>
                        <Text style={styles.textstyle}> Nearby • {item.address}</Text>
                    </View>
          </View>
          <Text style={{color: 'gray', marginTop: 8}}>{item.description} </Text>
        </View>
        </View>
        <View style={{paddingBottom: 36, backgroundColor: 'white'}}>
          <Text style={{ paddingHorizontal: 16, paddingVertical: 16, fontSize: 20, fontWeight: 'bold'}}>Menu</Text>
          {/* dishes */}
          {
            item.dishes.map((dish, index)=> <DishRow item={{ ...dish}} key={index}/>)
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default RestaurantScreens;


const styles = StyleSheet.create({
  viev: {
    position: 'relative,'
    
  },
  image:{ 
    flex: 1,
    height: 288,


  },
  opacity: {
    marginTop: 56,
    position: 'absolute',
    left: 16,
    backgroundColor:'white',
    padding:8,
    borderRadius:9999,
  },
  row: {
    flexDirection:'row',
    alignItems: 'center',
    spacedElements: {
        marginBottom: 4, 
}
},
star: {
    height: 16, 
    width: 16,
},
containerstar:{
    fontSize: 14,
    justifyContent: 'space-between',
},
textstar: {
    color: 'green',
    fontWeight: 'bold',
    
},
review: {
    color: 'gray',
    fontWeight: '700',
    marginLeft:10,
    fontSize:13,
    
},
icon: {
    width: 25,
    height:25,
    marginTop:5,

},
iconbar: {
    flexDirection: 'row',
    alignItems: 'center',
},
textstyle: {
  fontSize: 13,
}
});
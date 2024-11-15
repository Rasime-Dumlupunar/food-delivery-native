import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { themeColors } from '../theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants';
import Entypo from '@expo/vector-icons/Entypo';
import { useSelector, useDispatch } from 'react-redux/dist/react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { remoweFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';


const CartScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const deliveryFee = 2;
  const dispatch = useDispatch();

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);       
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {})
    setGroupedItems(items);

  }, [cartItems])
  return (
    <View style={{backgroundColor: 'white', flex:1}}>
      {/*  back button */}
      <View>
        <TouchableOpacity 
        onPress={()=> navigation.goBack()}
        style={styles.opacity}>
        <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Text style={{ alignItems:'center', fontWeight: 'bold', fontSize: '22'}}>
            Your Cart
          </Text>
          <Text style={{ alignItems: 'center', color: 'gray'}}>{restaurant.name} </Text>
        </View>
      {/*  delivery time */}
      <View style={{backgroundColor: themeColors.bgColor(0.2), flexDirection: 'row', paddingHorizontal: 16, alignItems:'center'}}>
        <Image source={require('../assets/images/kurye.png')} style={{width: 80, height:80 }} />
        <Text style={{flex: 1, paddingLeft: 16, fontSize:15}}>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: 'bold', color: themeColors.text}}>Change</Text>
        </TouchableOpacity>
      </View>
      {/*  delivery time */}
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom:50
      }}
      style={{backgroundColor: 'white', paddingTop: 20}}>
        {
          Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
            return (
              <View key={key}
              style={{ flexDirection: 'row', alignItems: 'center', paddingVertical:8, paddingHorizontal:16, backgroundColor: 'white', borderRadius: 50, marginHorizontal:8, marginBottom:12, shadowRadius:0.3 }}>
                  <Text style={{fontWeight: 'bold', color: themeColors.text, marginRight:8}}>{items.length} x</Text>
                  <Image style={{height: 56, width: 56, borderRadius: 50}} source={dish.image}/>
                  <Text style={{flex: 1, fontWeight: 'bold', color: 'gray', marginLeft:8}}> {dish.name}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize:16, marginRight:8 }}> ${dish.price}</Text>
                  <TouchableOpacity 
                  onPress={()=> dispatch(remoweFromCart({id: dish.id}))}
                  style={{padding: 4, borderRadius: 50, backgroundColor: themeColors.bgColor(1)}}>
                  <Entypo name="minus" size={24} color="white" />
                  </TouchableOpacity>
              </View>
            )
          })
        }
        </ScrollView>
     {/*  totals */}
     <View style={{backgroundColor: themeColors.bgColor(0.2), padding:24, paddingHorizontal: 32, borderTopStartRadius:30, marginBottom: 16}} >
      <View style={{ flexDirection:'row', justifyContent: 'space-between', marginBottom: 5}}>
        <Text style={{color: 'gray'}} > Subtotal</Text>
        <Text>${cartTotal}</Text>
      </View>
      <View style={{ flexDirection:'row', justifyContent: 'space-between', marginBottom: 5}}>
        <Text style={{color: 'gray'}} > Delivery Fee</Text>
        <Text>$ { deliveryFee}</Text>
      </View>
      <View style={{ flexDirection:'row', justifyContent: 'space-between', marginBottom: 5}}>
        <Text style={{color: 'gray', fontWeight: 'bold'}} > Order Total</Text>
        <Text>${deliveryFee + cartTotal}</Text>
      </View>
      <View >
        <TouchableOpacity 
        onPress={() => navigation.navigate('OrderPrepairing')}
        style={{ backgroundColor: themeColors.bgColor(1), padding:12, alignItems:'center', borderRadius:50}}>
          <Text style={{color: 'white', alignItems:'center', justifyContent: 'center', fontWeight:'bold', fontSize: 22}}>
          Place Order
          </Text>
        </TouchableOpacity>
      </View>
     </View>
    </View>
  )
};

export default CartScreen;
const styles = StyleSheet.create({
  opacity: {
    backgroundColor: themeColors.bgColor(1),
    position: 'absolute',
    zIndex: 10,
    borderRadius: 9999,
    padding: 4, 
    shadowRadius: 50,
    top: 20,
    left: 8,
  }
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import Entypo from '@expo/vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux/dist/react-redux';
import { addToCart, remoweFromCart, selectCartItemsById } from '../slices/cartSlice';

const DishRow = ({item}) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => selectCartItemsById(state,item.id));
  const handleIncrease = () => {
    dispatch(addToCart({...item}))
  }
  const handleDecrease = () => {
    dispatch(remoweFromCart({id: item.id}))
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding:12, borderRadius: 30, marginBottom: 12, marginHorizontal: 8}}>
      <Image style={{borderRadius:30, height:100, width:100}} source={item.image}/>
      <View style={{flex:1}}>
        <View style={{paddingLeft: 12}}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <Text style={{color: 'gray'}}>{item.description}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 12, alignItems:'center' }}>
            <Text style={{color: 'gray', fontSize: 20, fontWeight: 'bold'}}>
            ${item.price}
            </Text>
        <View style={{ flexDirection: 'row', alignItems:'center'}}>
            <TouchableOpacity 
            onPress={handleDecrease}
            disabled={!totalItems.length}
            style={{padding: 4, marginRight:4, borderRadius: 9999, backgroundColor: themeColors.bgColor(1)}}>
            <Entypo name="minus" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{paddingHorizontal: 12}}> {totalItems.length}</Text>
            <TouchableOpacity 
            onPress={handleIncrease}
            style={{padding: 4, marginLeft: 4,borderRadius: 9999, backgroundColor: themeColors.bgColor(1)}}>
            <Entypo name="plus" size={24} color="white" />
            </TouchableOpacity>

        </View>

        </View>

      </View>
    </View>
  )
}

export default DishRow;

const styles = StyleSheet.create({})
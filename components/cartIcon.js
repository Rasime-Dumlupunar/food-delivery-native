import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux/dist/react-redux';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';


const CartIcon = () => {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)
    if(!cartItems.length) return;
  return (
    <View style={styles.home}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Cart')} style={styles.container}>
        <View style={styles.subcontainer}>
            <Text style={styles.number}>
                {cartItems.length}
            </Text>
        </View>
        <Text style={styles.text}>
            View Cart
        </Text>
        <Text style={styles.price}>
            ${cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default CartIcon;

const styles = StyleSheet.create({

home: {
    position: 'absolute',
    width: '100%',
    zIndex: 50,
    bottom: 20,
},
container: {
    backgroundColor: themeColors.bgColor(1),
    flexDirection:'row',
    justifyContent:'space-between', 
    alignItems: 'center', 
    marginHorizontal: 20, 
    width: 380,
    height: 60,
    borderRadius: 50,  
    padding:16, 
    paddingVertical: 12, 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3,         
    shadowRadius: 4,
},
subcontainer:{
    padding:8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 40,
    height: 40,
    borderRadius: 25,  
    alignItems: 'center',

},
number : {
    fontWeight: 'bold',
    color: 'white', 
    fontSize: 20,
},
text: {
    alignItems: 'center',
    fontWeight: 'bold',
    color:  'white',
    fontSize: 22,
    
},
price: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
}
});
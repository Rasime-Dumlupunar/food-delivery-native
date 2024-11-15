import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const OrderPrepairingScreens = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 3000)
    }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../assets/images/delivery.gif')} style={{height:430, width:450}}/>
    </View>
  )
};

export default OrderPrepairingScreens;


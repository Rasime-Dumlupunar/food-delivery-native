import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';  
import { themeColors } from '../theme';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux/dist/react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { emptyCart } from '../slices/cartSlice';

const DeliveryScreen = () => {
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cancelOrder = () => {
        navigation.navigate('Home');
        dispatch(emptyCart());
    }
  return (
    <View style={{ flex: 1}}>
        {/* map view */}
        <MapView
        initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,

        }}
        style={{ flex:1}}
        mapType='standard'
        >
            <Marker
            coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
            pinColor={themeColors.bgColor(1)}
            />
        </MapView>
        <View style={styles.map}>
            <View style={styles.submap}>
                <View>
                    <Text style={styles.text}>
                        Estimated Arrival
                    </Text>
                    <Text style={styles.subtext}>
                        20-30 Minutes
                    </Text>
                    <Text style={styles.endtext}>
                        Your order is own its way!
                    </Text>
                </View> 
                <Image style={styles.image} source={require('../assets/images/delivery.gif')}/>
            </View>
            <View style={styles.row}>
                <View style={styles.rowbottom}>
                    <Image style={{ height: 54, width: 54, borderRadius: 50}} 
                    source={require('../assets/images/profil.jpg')} />
                </View>
                <View style={{ flex: 1, marginLeft: 12}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                        John Circle
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                        Your Rider
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 12 }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', padding: 8, marginRight: 10, borderRadius: 50}}>
                    <Feather name="phone-call" size={24} color="orange" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={cancelOrder }
                    style={{ backgroundColor: 'white', padding: 8, borderRadius: 50}}>
                    <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
};

export default DeliveryScreen;  



const styles = StyleSheet.create({
    map: {
        backgroundColor: 'white',
        position: 'relative',
        borderRadius:40,
    },
    submap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15, 
        paddingBottom: 5,
        marginTop:20,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: '700',
    },
    subtext: {
        fontSize: 30,
        fontWeight:'bold',
        color: 'black',
        marginTop:5,
    },
    endtext: {
        marginTop: 15, 
        color: 'black',
        fontWeight: 'semibold',
    },
    image: {
        height: 126,
        width: 136,
        marginBottom:5,
    },
    row: {
        backgroundColor: themeColors.bgColor(0.8),
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 25,
        marginHorizontal: 20,
    },
    rowbottom: {
        padding: 4, 
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },

});
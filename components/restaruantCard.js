import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { themeColors } from '../theme/index';
import { useNavigation } from '@react-navigation/native';

const RestaruantCard = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.navigate('Restaurant', {...item})}>
      <View style={
        styles.container} 
       >
        <Image style={styles.image} source={item.image}/>
            <View style={styles.text}>
                <Text style={styles.name}>{item.name}</Text>
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
       
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RestaruantCard;

const styles = StyleSheet.create({
    container: {
        marginRight: 15,           
        backgroundColor: 'white', 
        borderRadius: 24,         
        shadowColor: themeColors.bgColor(2),
        shadowOffset: { width: 3, height: 10 }, 
        shadowOpacity: 0.4,       
        shadowRadius: 7,         
        elevation: 10,     
        marginBottom: 8,
    },
    image: {
        height: 144,        
        width: 256,          
        borderTopLeftRadius: 24, 
        borderTopRightRadius: 24,
        
    },
    text: {
        paddingHorizontal: 12,
        paddingBottom:16,
        spacedElements: {
            marginBottom: 8, 

    },
        
},
    name: {
        fontSize: 20,
        fontWeight:'bold',
        paddingTop: 8,
        marginBottom: 8,
        paddingBottom:8,
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

})
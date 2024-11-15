import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import RestaruantCard from './restaruantCard';

const FeaturedRow = ({title, description, restaurants }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color: themeColors.text, fontWeight:'700'}}>See All</Text>
        </TouchableOpacity>

      </View>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15
      }} 
      style={styles.scroll}> 
      {
        restaurants.map((restaurant, index)=> {
            return (
                <RestaruantCard
                item={restaurant}
                key={index}/>
            )
        })
      }

      </ScrollView>
    </View>
  )
}

export default FeaturedRow;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 16,
        paddingTop:15,
    }, 
    title:{
        fontWeight: 'bold',
        fontSize: 17,
    },

    subtitle: {
        color: 'gray',
        fontWeight: '500',
        fontSize:13,
    }, 
    scroll: {
        overflow: 'visible',
        paddingVertical: 17,
    }
})
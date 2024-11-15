import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { themeColors } from '../theme/index';
import Categories from '../components/categories';
import { featured, featuredd } from '../constants';
import FeaturedRow from '../components/featuredRow';
import { getFeaturedRestaurants } from '../studio-fooddeliverryy/api';


const HomeScreens = () => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
  getFeaturedRestaurants().then(data =>{
    setFeaturedRestaurants(data);
  })
  }, [])
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar barStyle="dark-content"/>
      {/* Search Bar */}
      <View style={styles.container}>
          <View style={styles.home}> 
          <Feather name="search" size={24} color="gray" />
          <TextInput placeholder='Restaurants' style={styles.input}/>
            <View style={styles.row}>
            <EvilIcons name="location" size={24} color="gray" />
              <Text style={styles.local}>New York, NYC</Text>
            </View>
          </View>
        <View style={styles.slider}>
        <Feather name="sliders" size={24} color="black" />

        </View>
      </View>
      {/* Main */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 20,
      }}>
        {/* Categories */}
        <Categories/>
        {/* Categories */}
        <View style={styles.view}>
          {
            [featured, featuredd, featured].map((item, index) => {
                return(
                  <FeaturedRow key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                  />
                )
              })
          }

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreens;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  home: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding:9,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    marginBottom:16,

  },
  input: {
    marginLeft:8,
    flex:1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
    borderRadius: 0,
    borderLeftWidth:2,
    paddingLeft: 8,
    borderLeftColor: '#D1D5DB',
  },
  area: {
    backgroundColor: 'white',
    
  },
  local: {
    color: 'gray',
    marginLeft:4,

  },
  slider: {
    padding:9,
    borderRadius: 9999,
    backgroundColor: themeColors.bgColor(1),
    marginLeft: 5,
    marginBottom: 15,
  },
  view: {
    marginTop: 15,
  }
 
})
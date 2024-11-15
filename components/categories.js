import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories as categoryData } from '../constants';  // constants dosyasındaki kategorileri aldığınızı varsayalım
import { getCategories } from '../studio-fooddeliverryy/api';


const Categories = () => {
    const [categories, setCategories] = useState(null);
    let [categoriess, setCategoriess] = useState([]);

    useEffect(() => {
        getCategories().then(data=>{
            setCategoriess(data);
        })
    }, [])
    useEffect(() => {
        // Bu örnekte, kategori verilerini kategoriler sabitinden alıyoruz
        setCategories(categoryData); // Burada veriyi set ediyoruz
    }, []); // Bu effect sadece component mount olduğunda çalışacak


    return (
        <View>
            <ScrollView horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={{
                paddingHorizontal: 15
            }}>
                {categories && categories.length > 0 && categories.map((category, index) => {
                    let isActive = category.id == categories;
                    let btnClass = isActive ? { backgroundColor: 'gray-600' } : { backgroundColor: 'gray-200' };
                    let textClass = isActive ? { color: 'gray-900' } : { color: 'gray-500' };
                    return (
                        <View key={index} style={styles.slider}>
                            <TouchableOpacity 
                            onPress={() => setCategories(category._id)} style={[styles.touchable,
                             + btnClass]}>
                                <Image style={styles.image} source={category.image}/>
                                
                            </TouchableOpacity>
                            <Text style={[{ fontSize: 15 }, textClass]}> {category.name} </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container: {
        overflow: 'visible',
    },
    slider: {
        flex: 1,  
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:6,
        padding:2,
    },
    touchable: {
    backgroundColor: '#E5E7EB',  // bg-gray-200 rengi
    padding: 5,  // p-1 karşılığı
    borderRadius: 9999,  // rounded-full karşılığı (tam yuvarlak)
    shadowColor: 'white',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, 
    alignItems: 'center',
    justifyContent: 'center',
},
    text: {
        padding: 4,
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 47,
        height:45,
        alignItems: 'center',
        justifyContent: 'center',
    }

})
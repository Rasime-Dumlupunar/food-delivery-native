import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import RestaurantScreens from './screens/RestaurantScreens';
import HomeScreens from './screens/HomeScreens';
import CartScreen from './screens/CartScreen';
import OrderPrepairingScreens from './screens/OrderPrepairingScreens';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Restaurant" component={RestaurantScreens} />
        <Stack.Screen name="Cart" options={{ presentation: 'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPrepairing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairingScreens} />
        <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
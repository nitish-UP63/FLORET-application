 import React from 'react'
 import {Text} from 'react-native'
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './component/Splash'; 
import Login from './component/Login';
import Home from './component/Home';
import FirstScreen from './component/FirstScreen';
import Register from './component/Register';
 function App() {
  const Stack = createNativeStackNavigator();
   return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" >
      <Stack.Screen name="Login"   options={{headerShown: false}}  component={Login} />
      <Stack.Screen name="Splash"  options={{headerShown: false}} component={SplashScreen} />
      <Stack.Screen name="FirstScreen"  options={{headerShown: false}} component={FirstScreen} />
      <Stack.Screen name="Home"  options={{headerShown: false}} component={Home} />
      <Stack.Screen name="Register"  options={{headerShown: false}} component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
   )
 }
 
 export default App
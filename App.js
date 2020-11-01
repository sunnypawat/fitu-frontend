import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import F_page from './default';
import Login from './Login';
import Home2 from './Home2';
import Settings from './Settings';
import Profile from './Profile';
import Register from './Register';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
    
      <Drawer.Screen           options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}name = 'default' component = {F_page}/>
     <Drawer.Screen name='Home' component={Home2} />
        <Drawer.Screen name='Profile' component={Profile} />
        <Drawer.Screen name='Settings' component={Settings} />
        <Drawer.Screen name = 'Sign Out' component = {F_page}/>

        <Drawer.Screen           options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}name = 'login' component = {Login}/>

<Drawer.Screen           options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}name = 'Register' component = {Register}/>


      </Drawer.Navigator>
    
    </NavigationContainer>
  );
}
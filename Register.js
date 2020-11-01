import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import home from './default';

import logo from './assets/logo.png';
import { useFonts, Share_700Bold, Share_700Bold_Italic } from '@expo-google-fonts/share';
import { AppLoading } from 'expo';
import { TouchableOpacity, TextInput } from 'react-native';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

export default function Register({ navigation }){

    const[value, onChangeText] = React.useState('');
    const[value2, onChangeText2] = React.useState('');

    const loginTry = () => navigation.navigate("Home");
    const gotoregis = () => navigation.navigate("Register");

    const styles = StyleSheet.create({
        editor: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#272727'},
        gc: {
         backgroundColor: '#cbdc47',
         borderRadius: 200,
         borderColor:'white',
         width:300,
         height:300
        },
        logo_home_page : {
          width:100,
          height: 100,
          position:'relative',
          right:"23%",
          zIndex: 1000,
          top:"30%"
        },
        fitu_title: {
          fontSize:60,
          position: 'relative',
          fontFamily: 'Share_700Bold_Italic',
          right:"-18%"
        }
      }
    
    )
    
    const gc_pos = StyleSheet.create({
      c_top_left: {
        position:'absolute',
        left: '-40%',
        top:'-12%',
        width:380,
        height:380
      },
      c_center: {
        position:'absolute',
        width:300,
        alignSelf:"center",
        alignItems:'center'
        
      },
      c_bot_right: {
        zIndex:-100,
        position:'absolute',
        left:'57%',
        top:'58%',
        width:140,
        height:140,
        borderRadius: 125
      },
      c_bot_left : {
        position:'absolute',
        bottom:'-12%',
        left:'-28%'
      },
      c_top_right: {
        position:'absolute',
        width:150,
        height:150,
        top:'-5%',
        right:'-15%'
      }
    
    })
    let [fontsLoaded] = useFonts({
      Share_700Bold,Share_700Bold_Italic
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
    return (
      <View style={{height:"100%",width:"100%", backgroundColor:"#272727"}}>
    
      <View style={{height:"100%",width:"100%", backgroundColor:"#272727"}}>
        <Text style={{fontFamily:"Share_700Bold_Italic", fontSize:30,alignSelf:"center",position:"absolute",bottom:"60%",color:"#cbdc47"}}>Login to our FitU System!</Text>
      <TextInput
      style={{ width:"50%", height: 40, borderColor: '#7a842e', backgroundColor:"#cbdc47", color:"#272727",borderWidth: 2, borderRadius:50,fontFamily:"Share_700Bold_Italic", alignSelf:"center",position:"absolute",top:"44%",padding:10}}
      onChangeText={text => onChangeText(text)}
      value={value} placeholder="Enter username..."
    />
      <TextInput
      style={{ width:"50%", height: 40, borderColor: '#7a842e', backgroundColor:"#cbdc47", color:"#272727",borderWidth: 2, borderRadius:50,fontFamily:"Share_700Bold_Italic", alignSelf:"center",position:"absolute",top:"52%",padding:10}}
      onChangeText={text => onChangeText2(text)}
      value={value2} placeholder="Enter password..." secureTextEntry={ true }
    />
    <Text style={{fontFamily:"Share_700Bold_Italic", fontSize:30,alignSelf:"center",position:"absolute",bottom:"30%",color:"#cbdc47"}}>New to FitU?</Text>
  </View>
  </View>
    );
}
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import home from './default';

import logo from './assets/logo.png';
import { useFonts, Share_700Bold, Share_700Bold_Italic } from '@expo-google-fonts/share';
import { AppLoading } from 'expo';
import { TouchableOpacity } from 'react-native';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

export default function F_page(){

    const navigation = useNavigation();

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
      <View style={styles.editor}>
        <View style={[styles.gc,gc_pos.c_top_left]}>
        </View>
        
        
          <TouchableOpacity style={{position:'absolute',bottom:"65%",alignSelf:'center', alignItems:'center'}}onPress={() => navigation.navigate('login')}>
            <View style={[styles.gc,gc_pos.c_center]}>
            <Image style={styles.logo_home_page} source={logo}></Image>
        <Text style = {styles.fitu_title}>
          FitU
        </Text>
            </View>
            </TouchableOpacity>
            
        
       
        <View style={[styles.gc,gc_pos.c_bot_right]}></View>
        <View style={[styles.gc,gc_pos.c_bot_left]}></View>
        <View style={[styles.gc,gc_pos.c_top_right]}></View>
  
      </View>);
}
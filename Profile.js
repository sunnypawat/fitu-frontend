import React from 'react';
import { StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import logo1 from './img/Us.png';
export default function Profile({navigation}) {

  const openMenu = () =>{
    navigation.openDrawer()
  }

  const openSetting =()=>navigation.navigate('Settings')
  const openProfile =()=>navigation.navigate('Profile')



  return (
    <View style={styles.container}>
    <StatusBar />
      <View style={styles.topBlock}>
        <View style={styles.topTopBlock}>
          <View style={styles.iconBox}>
            <SimpleLineIcons name="menu" size={24} color="black" onPress={openMenu}/>
          </View>
        </View>
        <View style={styles.bottomTopBlock}>
          <Text style={styles.title}>UrNameTJ</Text>
        </View>
      </View>
      <View style={styles.image}>
        <Image source={logo1} style={{resizeMode:'contain', flex:0.9}}/>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>Username: MemelordThe3rd</Text>
        <Text style={styles.infoText}>UID: 420EXE</Text>
        <Text style={styles.infoText}>Title: Fitness Veteran</Text>
        <Text style={styles.infoText}>BMI: OVER9000</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topBlock:{
      paddingTop:10,
      // marginTop:20,
      paddingLeft:10,
      borderBottomEndRadius:30,
      borderBottomLeftRadius:30,
      backgroundColor:'#3B3B39',
      flexDirection:'column',
      flex:2,
    },
    topTopBlock:{
      flexDirection:'row-reverse',
      alignItems:'flex-start',
      flex:1
    },
    bottomTopBlock:{
      padding:10,
      justifyContent:'flex-end',
      flex:1
    },
    image:{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
      // backgroundColor:'dimgray'
    },
    info:{
      paddingTop:20,
      paddingHorizontal:20,
      flex:3,
      // backgroundColor:'dimgray'
    },
    infoText:{
      fontSize:20,
      marginBottom:10,
      fontFamily:'monospace'
    },
    title:{
      fontSize:35,
      fontWeight:'bold',
      color:'greenyellow'
    },
    iconBox:{
      backgroundColor:'greenyellow',
      marginRight:25,
      marginTop:7.5,
      paddingHorizontal:5,
      paddingVertical:5,
      borderRadius:5
    }
});
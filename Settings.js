import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';



export default function Settings({navigation}) {
  
  const openMenu = () =>{
    navigation.openDrawer()
    }

  const openSetting =()=>navigation.navigate('Settings')
  const openProfile =()=>navigation.navigate('Profile')
  
  return (  
    <View style={styles.container}>
      <Text style={styles.myText}>Settings</Text>
      <SimpleLineIcons style={styles.icon} name="menu" size={24} color="black" onPress={openMenu}/>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    myText: {
        fontWeight: "bold",
        fontSize:20
    },
    icon:{
      position:'absolute',
      top:45,
      right:30
    }
});
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import calendar from './assets/calendar.jpg';
import { useFonts, Share_700Bold, Share_700Bold_Italic } from '@expo-google-fonts/share';
import { AppLoading } from 'expo';
export default function Home2({navigation}) {

    const openMenu = () =>{
        navigation.openDrawer()
    }

    const openProfile =()=>navigation.navigate('Profile')

    let [fontsLoaded] = useFonts({
        Share_700Bold,Share_700Bold_Italic
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
        <View style={styles.container}>
            <View style={styles.topBlock}>
                <Text style={styles.title}>Today's Goal</Text>
                <View style={styles.iconBox}>
                    <SimpleLineIcons name="menu" size={24} color="black" onPress={openMenu}/>
                </View>
            </View>
            <View style={styles.middleBlock}>
            <Image source={calendar} style={{top:"-8%",width:"109%",borderRadius:"40%" ,resizeMode:'contain', flex:0.9, zIndex:100}}/>
                <Text style={styles.middleText}>
                    Fitness Planner
                </Text>
            </View>
            <View style={styles.bottomBlock}>
                <View style={styles.leftBottom}>

                </View>
                <View style={styles.rightBottom}>
                    <View style={styles.topRightBottom}></View>
                    <TouchableOpacity style={styles.bottomRightBottom} onPress={openProfile}>
                        <View>
                            <Text style={styles.bottomRightBottomText}>Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
        backgroundColor:'#fff',
        marginHorizontal:15,
        flexDirection:'row',
        flex:1,
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems:'center'
    },
    middleBlock: {
        padding:15,
        borderRadius:30,
        backgroundColor:'#3B3B39',
        marginHorizontal:15,
        marginBottom:15,
        flex:5.5,
        flexDirection:'column',
        alignItems:'center',
        
    },
    bottomBlock:{
        backgroundColor:'white',
        marginHorizontal:15,
        marginBottom:15,
        fontSize:20,
        flex:5.5,
        flexDirection:'row'
    },
    leftBottom:{
        flex:1,
        borderRadius:30,
        marginRight:15,
        backgroundColor:'#3B3B39',
    },
    rightBottom:{
        flex:1,
        borderRadius:30,
        backgroundColor:'white',
        flexDirection:'column'
    },
    topRightBottom:{
        flex:1,
        padding:15,
        marginBottom:15,
        borderRadius:30,
        backgroundColor:'#3B3B39',
    },
    bottomRightBottom:{
        flex:1,
        borderRadius:30,
        backgroundColor:'#3B3B39',
        padding:15,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    bottomRightBottomText:{
        color:'greenyellow',
        fontFamily:"Share_700Bold_Italic"
    },
    title:{
        fontSize:45,
        fontWeight:'bold',
        top:"4%",
        fontFamily:"Share_700Bold_Italic"
        
    },
    iconBox:{
        backgroundColor:'greenyellow',
        marginRight:10,
        paddingHorizontal:5,
        paddingVertical:5,
        borderRadius:5
    },
    middleText:{
        fontSize:50,
        color: 'greenyellow',
        fontFamily:"Share_700Bold_Italic"
    } 
});
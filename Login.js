import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Share_700Bold, Share_700Bold_Italic } from '@expo-google-fonts/share';

export default class App extends React.Component {
  constructor(props){
    super(props);
  } 
  state={
    email:"",
    password:""
  }
  render(){

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Welcome to FitU!</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
      
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
          <Text style={styles.loginTextP}>REGISTER</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#cbdc47",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#cbdc47",
    borderRadius:25,
    borderColor:"#7a8e2c",
    borderWidth:5,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#272727"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#a4bd41",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    borderColor:"#7a8e2c",
    borderWidth:5,
  },
  loginText:{
    color:"#272727"
  },
  loginTextP:{
    color:"white"

  }
});
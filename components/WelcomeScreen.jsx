
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const WelcomeScreen = (props) => {
  return (
    <View style={{ backgroundColor: '#f8edeb', height: '100%' }}>
      <View style={styles.RegisterBox}>
        {/* Image after the form */}
        <Text
          style={{ 
            fontWeight: 'bold',
            fontSize: 38,
            color: '#4c956c',
            marginTop: 5
          }}>
          AddRupee
        </Text>

        <Image
          source={require('../images/welcomeimg.png')}
          style={styles.welcomeImg}
        />
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.paragraph}>
          Create an account to use the Features
        </Text>
        <Text style={styles.paragraph}> of this App</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate('EmpRegister')}
          style={styles.button} >
          <Text style={{ fontSize: 20, color: '#fff', fontWeight:'bold' }}>Sign Up</Text>
        </TouchableOpacity>

        <Text
          onPress={() => props.navigation.navigate('EmpLogin')}
          style={{
            fontSize: 20,
            color: 'red',
            marginTop: 30,
            fontWeight:'bold'
          }}>
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterBox: {
    // marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  welcomeImg: {
    height: 350,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 25,
  },
  heading: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 30,
    color: '#111',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    fontWeight:'500',
    color: '#111', // Dark black color
  },
  button: {
    height: 50,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
  },
});

export default WelcomeScreen;

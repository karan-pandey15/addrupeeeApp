import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [Branch, setBranch] = useState('');
  const [Tl, setTl] = useState('');
  const [userType, setUserType] = useState(''); // to track selected user type

  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.imageContainer}>
        
          <Image
            source={require('../images/bankImg.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Support</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.issueinput}
                  onChangeText={setName}
                  value={name}
                  placeholder="Enter Full Name"
                />

                <View style={styles.phoneContainer}>
                  <Text style={styles.countryCode}>+91</Text>
                  <TextInput
                    style={styles.phoneInput}
                    onChangeText={setPhone}
                    value={phone}
                    keyboardType="numeric"
                    maxLength={10}
                    placeholder="Enter Phone No"
                  />
                </View>

                <TextInput
                  style={styles.issueinputS}
                  onChangeText={setName}
                  value={name}
                  placeholder="Describe Your Problem"
                />
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
              </TouchableOpacity>

              <Text style={{textAlign:'center',marginTop:20}}> OR </Text>

              <View style={styles.containersec}>
                <View style={styles.firstBox}>
                  <Text style={styles.txt}>+91 8887796224</Text>
                </View>
                <View style={styles.secBox}>
                  <Text style={styles.txt}> support@addrupee.com</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
    </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8edeb',
  },
  imageContainer: {
    height: 320,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 15, 
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  scrollContainer: {
    height: '200%',
    width: '100%', 
  },
  textContainer: {
    padding: 20,
  },
  text: {
    color: '#3E9D7C',
    marginTop: 10,
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:25
  },
  scrollView: {
    flex: 1,
  },
  containersec: {
    flexDirection: 'column',
    width: '100%',
    borderColor: 'gray',
    marginTop: 20,
   
  },
 
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
 
  input: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 8,
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '95%',
  },
  inputContainer: {
    marginTop: 20,
  },
  
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '95%',
  },
  countryCode: {
    marginRight: 10,
    fontSize: 16,
    color: '#111',
    fontWeight: '600'
  },
  phoneInput: {
    flex: 1,
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 10,
    fontWeight: 'bold',

  },
  button: {
    height: 60,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#3E9D7C',
    color: '#fff',
    borderRadius: 10,
  },

  issueinput: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'black',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 0,
    width: '100%',
    color: '#111',
    fontWeight: '600',
    fontSize: 16
},
issueinputS:{
  height: 50,
  borderBottomWidth: 0.5, 
  borderColor: 'black',
  marginBottom: 12,
  paddingHorizontal: 10,
  borderRadius: 0,
  width: '100%',
  color: '#111',
  fontWeight: '600',
  fontSize: 20,
  marginTop:30
},
inputContainer: {
    marginTop: 20,
},

firstBox: {
  height: 60,
  width: 340,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  backgroundColor: '#3E9D7C',
  color: '#fff',
  borderRadius: 10,
},

secBox: {
  height: 60,
  width: 340,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  backgroundColor: '#3E9D7C',
  color: '#fff',
  borderRadius: 10,
},
  
});

export default ContactScreen;

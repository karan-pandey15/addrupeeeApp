
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';

const EmployeeRegister = (props) => {
  const navigation = useNavigation();

  const [tlName, setTlName] = useState(' ');
  const [Branch, setBranch] = useState('Select Branch Name');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [Tl, setTl] = useState('');
  const [userType, setUserType] = useState('');
  const [selectedValue, setSelectedValue] = useState('no');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedValue("no")
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleRadioChange = (value) => {
    setSelectedValue(value);
    // Reset input fields when changing selection
    setTlName('');
    setBranch('');

    if (value === 'yes') {
      // Set isModalVisible to true when "Yes" is selected
      setIsModalVisible(true);
    }
  };

  const handleRegister = async () => {
    // Your registration logic here
    navigation.navigate("CusAddress");

  };

  return (
    <View style={styles.RegisterContainer}>
      <ScrollView>
        <View style={styles.RegisterBox}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../images/signUp.png')}
              style={styles.logoImg}
            />
            <Text style={styles.heading}>Sign Up Now</Text>
            <Text style={styles.paragraph}>
              Please fill the fields and create an account
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Enter Full Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Enter Email"
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
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={!showPassword}
              placeholder="Create Password"
            />


            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text style={{ marginLeft: 10, marginBottom: 40, fontWeight: 'bold', color: '#111' }}>
                {showPassword ? 'Hide' : 'Show'} Password
              </Text>
            </TouchableOpacity>

            <View>
              <Text style={styles.label}>
                Are you someone from Addrupee?
              </Text>
              <RadioButton.Group
                onValueChange={handleRadioChange}
                value={selectedValue}
              >
                <View>
                  <RadioButton.Item label="Yes" value="yes" />
                  <RadioButton.Item label="No" value="no" />
                </View>
              </RadioButton.Group>
            </View>

            {selectedValue === 'no' && (
              <View> 
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>Register</Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 10, textAlign: 'center' ,color:'#111',fontWeight:'500' }}>
                    Already have an account ?{' '}
                    <TouchableOpacity onPress={() => props.navigation.navigate('EmpLogin')}>
                        <Text style={{ color: '#3E9D7C' ,fontWeight:'bold' }}>Sign In</Text>
                    </TouchableOpacity>
                </Text>
              </View>
            )}
          </View>

          <Modal isVisible={isModalVisible} style={styles.modal}>
            <View style={styles.modalContent}> 
              <View style={styles.selectedRole}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30,color:"#3F9E7E" ,marginTop:40 }} > Select Your Role & SignUp</Text>
                <TouchableOpacity style={styles.buttons3}>
                  <Text style={{   fontSize: 18,color:'#3F9E7E',fontWeight:"bold"  }}>Partner</Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>

                  <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('AqmSignup')} >
                    <Text style={{ fontWeight: 'bold', color:'#3F9E7E' }}>AQM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttons}>
                    <Text style={{ fontWeight: 'bold', color:'#3F9E7E' }} onPress={()=> navigation.navigate('TlSignup')} >Team Manager</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.buttons2}>
                    <Text style={{ textAlign: 'center',  color:'#3F9E7E' ,fontSize: 15, fontWeight: 'bold' }} onPress={()=> navigation.navigate('HrSignup')}  >HR</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttons2}>
                    <Text style={{ color:'#3F9E7E',textAlign: 'center', fontSize: 15, fontWeight: 'bold' }} onPress={()=> navigation.navigate('AdminSignup')} >ADMIN</Text>
                  </TouchableOpacity>
                </View>

              </View>
              <TouchableOpacity style={styles.modalBtn} onPress={toggleModal}>
                <Text style={{ fontSize: 45, fontWeight: 'bold' }} >X</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f8edeb",
    height: '100%'
  },
  RegisterBox: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    height: 120,
    width: 160,
    borderRadius: 50,

  },
  heading: {
    marginTop: 15,
    fontSize: 25,
    color: '#111',
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5
  },
  input: {
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
  container: {
    flex: 1,
  },
  picker: { flex: 1 },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  signInText: {
    color: '#3E9D7C',
    marginLeft: 5,  // Add some left margin for spacing 
    marginRight: 5, // Add some right margin for spacing
    fontWeight: 'bold',
    fontSize: 16
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f8edeb",
  },
  modalContent: {  
    backgroundColor: 'white',
    width: '90%',
    height: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
    elevation: 10
  },
  label: {
    color: "#111",
    fontWeight: '600'
  },
  modalBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 20
  },

  selectedRole: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttons: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff', // Set your background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
    width: 120,
  },

  buttons2: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff', // Set your background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
    width: 80,
  },

  buttons3: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff', // Set your background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android
    width: 160,
  },

});

export default EmployeeRegister;



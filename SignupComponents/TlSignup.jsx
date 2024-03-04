import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const TlSignup = props => {
  const [tlName, setTlName] = useState(' ');
  const [Branch, setBranch] = useState('Select Branch Name');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [secret, setSecretkey] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    try {
      const payload = {
        name,
        email,
        password,
        phone,
        Branch,
      };

      const response = await fetch(
        'https://api.addrupee.com/api/emp_register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        console.log('Registration successful!');
        props.navigation.navigate('EmpLogin');
      } else {
        console.error(
          'Registration failed:',
          response.status,
          response.statusText,
        );
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error.message);
    }
  };

  return (
    <View style={styles.RegisterContainer}>
      <ScrollView style={styles.RegisterBox}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../images/signUp.png')}
            style={styles.logoImg}
          />
          <Text style={styles.heading}>TL Sign Up</Text>
          <Text style={styles.paragraph}>
            Please fill the fields and create an account
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.container}>
            <Picker
              style={styles.picker}
              selectedValue={tlName}
              onValueChange={itemValue => setTlName(itemValue)}>
              <Picker.Item label="Select Name" />
              <Picker.Item label="CHAHAT SHARMA" value="CHAHAT SHARMA" />
              <Picker.Item label="RAJENDRA SINGH" value="RAJENDRA SINGH" />
              <Picker.Item label="FAIZAN KHAN" value="FAIZAN KHAN" />
              <Picker.Item label="BHAGWAN SINGH" value="BHAGWAN SINGH" />
              <Picker.Item label="SACHING KUMAR" value="SACHIN KUMAR" />
              <Picker.Item label="DEEPAK KUMAR" value="DEEPAK KUMAR" />
            </Picker>

            <Picker
              style={styles.picker}
              selectedValue={Branch}
              onValueChange={itemValue => setBranch(itemValue)}>
              <Picker.Item label="Select Branch Name" />
              <Picker.Item label="Addrupee Noida" value="Noida" />
            </Picker>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={setSecretkey}
            value={secret}
            placeholder="Secret Key"
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
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
          />

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!showPassword}
            placeholder="Create Password"
          />

          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text
              style={{
                marginLeft: 10,
                marginBottom: 40,
                fontWeight: 'bold',
                color: '#111',
              }}>
              {showPassword ? 'Hide' : 'Show'} Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={{fontSize: 20, color: '#fff'}}>Register</Text>
          </TouchableOpacity>

          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              color: '#111',
              fontWeight: '500',
            }}>
            Already have an account ?{' '}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('EmpLogin')}>
              <Text style={{color: '#3E9D7C', fontWeight: 'bold'}}>
                Sign In
              </Text>
            </TouchableOpacity>
          </Text>
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
    backgroundColor: '#f8edeb',
    height: '100%',
  },
  RegisterBox: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 5,
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
    fontSize: 16,
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
    fontWeight: '600',
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
  picker: {
    flex: 1,
    color: '#111',
    fontWeight: 'bold',
  },
});

export default TlSignup;


import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmployeeLogin = (props) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    // Navigation hook
    const navigation = useNavigation();

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to handle input changes
    const handleInputChange = (name, value) => {
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const { email, password } = loginData; // Destructure email and password from loginData

            const response = await fetch('https://api.addrupee.com/api/emp_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const responseData = await response.json();

            if (response.ok && responseData.Status === 'Success') {
                const userType = responseData.userType;

                // Navigate to different pages based on userType
                if (userType === 'Employee') {
                    await AsyncStorage.setItem('employeeEmail', email);
                    navigation.navigate('EmpDashboard');
                } else if (userType === 'Team Leader') {
                    await AsyncStorage.setItem('TL_Name', responseData.name);
                    navigation.navigate('Tldashboard');
                } else if (userType === 'Admin') {
                    navigation.navigate('Admindashboard');
                } else {
                    // Handle other user types or scenarios
                    Alert.alert('Unknown user type or scenario');
                }
            } else {
                // Handle unsuccessful Sign In
                Alert.alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error during Sign In:', error);
            // Handle error and provide user feedback
            Alert.alert('An error occurred during Sign In');
        }
    };


    return (
        <View style={styles.RegisterContainer} >
            <ScrollView style={styles.RegisterBox}>


                <View style={styles.imgContainer} >
                    <Image source={require('../images/signUp.png')} style={styles.logoImg} />
                    <Text style={styles.heading}>LogIn Now</Text>
                    <Text style={styles.paragraph}>
                        Please Enter Your Email & Password For Login
                    </Text>

                </View>

                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.input}
                        value={loginData.email}
                        onChangeText={(text) => handleInputChange('email', text)}
                        placeholder="Enter Email"
                    />



                    <TextInput
                        style={styles.input}
                        value={loginData.password}
                        onChangeText={(text) => handleInputChange('password', text)}
                        secureTextEntry={!showPassword}
                        placeholder="Enter Password"
                    />



                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Text style={{ marginLeft: 10, marginBottom: 20, fontWeight: 'bold', color: '#111' }}>
                            {showPassword ? 'Hide' : 'Show'} Password
                        </Text>
                    </TouchableOpacity>



                </View>

                <TouchableOpacity style={styles.button}
                    // onPress={() => props.navigation.navigate('EmpDashboard')}  
                    onPress={handleSubmit}
                >
                    <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 15, textAlign: 'center', color: "#111", fontSize: 16 }}>
                    Or Login With
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                    <TouchableOpacity style={{ marginRight: 25 }}>
                        <Image
                            source={require('../images/googlePng.png')}
                            style={styles.SocialImg}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../images/fb.png')}
                            style={styles.SocialImg}
                        />
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.signInContainer}>
                    <Text style={{ fontWeight: 'bold' }} >
                        Didn't SignUp{' '}
                        <TouchableOpacity onPress={() => props.navigation.navigate('EmpLogin')}>
                            <Text style={styles.signInText}>Sign In</Text>
                        </TouchableOpacity>
                    </Text>
                </View> */}

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
        height: '100%',
    },
    RegisterBox: {
        marginTop: 20,

    },
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImg: {
        height: 120,
        width: 140,
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
    }, input: {
        height: 50,
        borderBottomWidth: 0.5,
        borderColor: 'black',
        marginBottom: 20,
        marginTop: 20,
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
        marginBottom: 8,
        width: '100%',
    },
    countryCode: {

        fontSize: 16,
        color: 'gray',
    },
    phoneInput: {
        flex: 1,
        height: 50,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        paddingHorizontal: 10,
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
    SocialImg: {
        height: 80,
        width: 80,
        borderRadius: 10,
        marginTop: 40, 
    },
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


});

export default EmployeeLogin;


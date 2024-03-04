
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const Elegibility = (props) => {
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
                        <Text style={styles.heading}>Check Elegibility</Text>
                        <Text style={styles.paragraph}>
                            By Submiting Your Basic Details.
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input} 
                            keyboardType="numeric" 
                            placeholder="Your Salary *"
                        />
                       



                        
                     <SafeAreaView>
                         <View style={styles.container}>
                             <Picker
                                 style={styles.picker}
                                 selectedValue={tlName}
                                 onValueChange={itemValue => setTlName(itemValue)}>
                                 <Picker.Item label="Your Additional Income (Optional)" />
                                 <Picker.Item label="RENT" value="RENT" />
                                 <Picker.Item label="BONUS" value="BONUS" />
                                 <Picker.Item label="INSENTIVE" value="INSENTIVE" /> 
                             </Picker>
                         </View> 
                     </SafeAreaView>

                        <TextInput
                            style={styles.input} 
                            keyboardType="numeric" 
                            placeholder="Monthly EMI (Optional)"
                        />

                        <TextInput
                            style={styles.input} 
                            keyboardType="numeric" 
                            placeholder="No of Loans (Optional)"
                        />

                        <TextInput
                            style={styles.input} 
                            keyboardType="numeric" 
                            placeholder="Total CC outstanding (Optional)"
                        />

                        <TextInput
                            style={styles.input} 
                            keyboardType="numeric"
                            
                            placeholder="No of Cards (Optional)"
                        />
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Submit Details</Text>
                        </TouchableOpacity>
                    </View>
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
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 0,
        width: '100%',
        color: '#111',
        fontWeight: '600',
        fontSize: 16,
        marginTop:20
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

});

export default Elegibility;



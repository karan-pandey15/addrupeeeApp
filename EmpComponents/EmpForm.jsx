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

const EmpForm = () => {
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
                        <Text style={styles.text}>Fill Basic Details</Text>
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.containersec}>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setName}
                                        value={name}
                                        placeholder="Enter FullName"
                                    />

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setEmail}
                                        value={email}
                                        placeholder="Father Name"
                                    />



                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setEmail}
                                        value={email}
                                        placeholder="Email"
                                    />

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setTl}
                                        value={Tl}
                                        keyboardType="numeric"
                                        placeholder="DOB - DD/MM/YYYY"
                                    />

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setEmail}
                                        value={email}
                                        placeholder="Permanent Account Number (PAN)"
                                    />

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setEmail}
                                        value={email}
                                        placeholder="Addhar Card No"
                                    />


                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setEmail}
                                        value={email}
                                        keyboardType="numeric"
                                        placeholder="House/Flat/Block number"
                                    />


                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setEmail}
                                        value={email}
                                        placeholder="Office Apartment/Building Name"
                                    />

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setEmail}
                                        value={email}
                                        placeholder="Office Area Sector"
                                    />


                                    <TextInput
                                        style={styles.input}
                                        keyboardType="numeric"
                                        placeholder="Postal Code (PIN)"
                                    />

                                    <TouchableOpacity style={styles.button} >
                                        <Text style={{ fontSize: 20, color: '#fff' }}>Submit</Text>
                                    </TouchableOpacity>

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
        backgroundColor: '#f8edeb',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
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
        // backgroundColor: '#f8edeb',
    },
    textContainer: {
        padding: 20,
    },
    text: {
        color: '#111',
        textDecorationLine: 'underline',
        fontWeight: 'bold', 
        fontSize:20,
        textAlign:'center'
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
    button: {
        height: 45,
        width: 340,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#3E9D7C',
        color: '#fff',
        borderRadius: 10,
    },
});

export default EmpForm;

import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const CusCompanyAddress = (props) => { 
    const navigation = useNavigation();
    const handleChange = ()=>{
        navigation.navigate("CustomerAccount");
    }
    return (
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <View style={styles.selectedRole}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30, marginBottom: 10, color: "#45A182", elevation: 10 }} >What's your relationship status ?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttons}   >
                            <Text style={{ fontSize: 16, color: "#45A182", fontWeight: '600' }}>Single</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={{ fontSize: 14, color: "#45A182", fontWeight: '600' }}  >Married</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <Text style={{ marginLeft: 30, fontSize: 25, fontWeight: 'bold', marginTop: 20 }} >Your Company Details ?</Text>
                <View style={styles.formContainer} >

                

                    <View style={styles.inputContainer}> 
                        <TextInput
                            style={styles.input}
                            placeholder="Company Name"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Comlete Address"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Locality / Area"
                        />

                        <View style={styles.containers}>
                            <View style={styles.twoInputContainer}>
                                <TextInput
                                    style={styles.inputs}
                                    placeholder="Pincode"
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    style={styles.inputs}
                                    placeholder="City"
                                />
                            </View>
                        </View>
                   <View style={{marginTop:80}} >
                   <Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginBottom:10}} >How Much Do You Earn in a month ?</Text>
                    <TextInput
                            style={styles.input}
                            placeholder="Monthly in-hand income"
                            keyboardType="numeric"
                        />
                   </View>
                        <TouchableOpacity style={styles.button} onPress={handleChange}  >
                            <Text style={{ fontSize: 20, color: '#fff' }}>
                                Save Company Address
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: "#f8edeb",
    },

    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        height: '90%',
        borderRadius: 10,
        elevation: 10,
        marginTop: 40
    },
    label: {
        color: "#111",
        fontWeight: '600'
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
        width: '80%'
    },

    phoneInput: {
        flex: 1,
        height: 50,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        paddingHorizontal: 10,
        fontWeight: 'bold',

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
        padding: 15,
        backgroundColor: '#fff', // Set your background color
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // for Android
        width: 130,
    },

    buttons2: {
        margin: 5,
        padding: 15,
        backgroundColor: '#fff', // Set your background color
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // for Android
        width: 90,
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
        width: 180,
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    twoInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50
    },
    inputs: {
        height: 40,
        borderColor: '#111',
        margin: 10,
        padding: 10,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 0,
        fontSize: 18,
        color: '#111',
        fontWeight: 'bold'
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
    salaryContainer:{ 
    }
});

export default CusCompanyAddress;
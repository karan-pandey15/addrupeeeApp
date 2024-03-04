import React, { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { blue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const EmpDashboard = (props) => {
    const [pendingData, setPendingData] = useState([]);
    const [approvedData, setApprovedData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("from1to31");

    async function getEmail() {
        try {
            const storedData = await AsyncStorage.getItem("employeeEmail");

            if (storedData) {
                // Assuming the email is directly stored as a string
                email = storedData.trim(); // Trim any leading or trailing whitespaces
                return email;
            } else {
                console.log("No email stored");
                return null;
            }
        } catch (error) {
            console.error("Error retrieving email:", error);
            return null;
        }
    }

    //    email ="rahulmandal7016@gmail.com"

    const fetchPendingData = async () => {
        const Status = "Pending";

        let data = await fetch(
            `https://api.addrupee.com/api/getpendingdatas/${email}`,
            {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            }
        );

        let result = await data.json();
        setPendingData(result);

    };

    const fetchApprovedData = async () => {
        const Status = "Disbursed";
        let data = await fetch(
            `https://api.addrupee.com/api/approved-data/${email}`,
            {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            }
        );

        let result = await data.json();
        setApprovedData(result);
    };

    useEffect(() => {
        fetchPendingData();
        fetchApprovedData();
        getEmail();

    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <Image
                        style={styles.mainImg}
                        source={require(".././images/dsh.jpg")}
                    />
                    <View style={styles.textContainer}>
                        {/* <Text style={styles.textContent}>
                            karaad dfdfdf dfdfdf df df dfd fd fdfdfd
                            dfdfdfdfdfdf dsfadsfedfds dfe rerfdsfdsfdfdsf df dfdsf
                            dfdfdfdfdfdf asdfdsf dsfds fdsfdsf dsfdsfdf fdfdfdfdfdfdfdfn
                        </Text> */}
                        <View style={styles.parentContainer}>
                            <View style={styles.container1}>
                                <Text style={styles.textStyle}>PENDING</Text>
                                <Text style={styles.valueStyle}>{pendingData.length}</Text>

                            </View>
                            <View style={styles.container2}>
                                <Text style={styles.textStyle} >DISBURSED</Text>
                                <Text style={styles.valueStyle}>{approvedData.length}</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                         onPress={() => props.navigation.navigate('Elegibility')}
                        >
                        <Text style={styles.elgText}  >Check Eligibility</Text>
                        </TouchableOpacity>
                            
                    </View>
                </View>



                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.containerBox}>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}>
                            <View >
                                <Image
                                    source={require('../images/bankImg.png')}
                                    style={styles.cardImg} />
                                <Text
                                    style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                    Personal Loan
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/Homeloan.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Home Loan
                            </Text>
                        </TouchableOpacity>
                        <View />

                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/businessLoan.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Business Loan
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/loanAp.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Loan Against Property
                            </Text>
                        </TouchableOpacity>
                        <View />
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/loanappImg.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                OD/OC
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/cardImg.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Credit Card
                            </Text>
                        </TouchableOpacity>
                        <View />

                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/mutual.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Mutual Funds
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/shareImg.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                Health Insurance
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBox}
                            onPress={() => props.navigation.navigate('EmpForm')}
                        >
                            <Image
                                source={require('../images/loanImg.png')}
                                style={styles.cardImg}
                            />
                            <Text
                                style={{ color: '#81c3d7', marginTop: 5, fontWeight: 'bold' }}>
                                General Insurance
                            </Text>
                        </TouchableOpacity>
                        <View />
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#17A2B8',

        backgroundColor: '#01876D',
    },
    upperContainer: {
        position: 'relative',
        width: '100%',
        height: 300, // adjust the height according to your needs
    },
    mainImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    textContent: {
        color: '#111',
        textAlign: 'center',
        paddingHorizontal: 20,
    },

    parentContainer: {
        height: 120,
        width: 350,
        flexDirection: 'row',
    },
    container1: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        borderRightWidth: 1,
        borderRightColor: "#17A2B8",
        backgroundColor: '#f8edeb',
    },
    container2: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        borderLeftWidth: 1,
        borderLeftColor: "#17A2B8",
        backgroundColor: '#f8edeb',
    },
    textStyle: {
        color: '#3D9E7E',
        fontSize: 24,
        fontWeight: 'bold'
    },
    valueStyle: {
        color: '#3D9E7E',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20
    },
    scrollContainer: {
        // height: '100%',
        width: '100%',
        // backgroundColor: '#f8edeb',
        elevation: 50,
        borderTopLeftRadius: 90,  // Adjust the value as needed
        borderTopRightRadius: 90,
        padding: 10
    },
    containerBox: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 24,
    },
    cardBox: {
        width: '48%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#f8edeb',
        shadowOpacity: 0.1,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 50,
    },
    cardImg: {
        width: 100,
        height: 80,
        marginTop: 5
    },
    gap: {
        marginBottom: 100
    },
    elgText:{
        fontSize:20,
        marginLeft:150,
        borderBottomWidth:2,
        color:'#0071CD',
        borderBottomColor:'#0071CD',
        marginTop:10
    }
});

export default EmpDashboard;


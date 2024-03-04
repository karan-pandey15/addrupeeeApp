import { View, Text, TouchableOpacity,Image, StyleSheet } from 'react-native';
import React from 'react';
import Share from 'react-native-share'; 

export default function SelectType() {
    const share = async () => {
        const options = {
            message:
                'Addrupee is Distributor of secured and un secured loans. We have wide range of loans products like Personal Loans, Business Loan, Home Loan, Loans against Property, OD against Property, and Loan for Purchase of Commercial Property, Lease Rental Discounting, and Business Loans etc. ',
            url: 'https://addrupee.com/',
            email: 'support@addrupee.com',
            subject: 'AddRupee (Your Trusted Loan Partner',
            recipient: '+91 9569125048',
        };

        try {
            const res = await Share.open(options);
            console.log(res);
        } catch (err) {
            console.log(err);
        }

        // Share.open(options)
        //   .then(res => console.log(res))
        //   .catch(err => console.log(err));
    };

    return (
      <View style={styles.container} >
          
      </View>
    );
}

const styles = StyleSheet.create({ 
     container:{
        height:'100%',
        width:'100%', 
        backgroundColor: '#f8edeb',
     }
  });
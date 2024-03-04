import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "./DrawerComponent/DrawerContent";
import WelcomeScreen from './components/WelcomeScreen';
import EmployeeRegister from './EmpComponents/EmpRegister';
import EmployeeLogin from './EmpComponents/EmpLogin';
import EmpDashboard from './EmpComponents/EmpDashboard';
import EmpForm from './EmpComponents/EmpForm';
import TermsAndConditions from './EmpComponents/TermsAndConditions';
import ContactScreen from './EmpComponents/ContactScreen';
import ReferShare from './EmpComponents/ReferShare';
import Tldashboard from './EmpComponents/Tldashboard';
import SelectType from './EmpComponents/SelectType';
import AqmSignup from './SignupComponents/AqmSignup';
import TlSignup from './SignupComponents/TlSignup';
import HrSignup from './SignupComponents/HrSignup';
import AdminSignup from './SignupComponents/AdminSignup';
import CusAddress from './CustomerComponents/CusAddress';
import CusCompanyAddress from './CustomerComponents/CusCompanyAddress';
import CustomerAccount from './CustomerComponents/CustomerAccount';
import Elegibility from './EmpComponents/Elegibility';
import knowledge from './EmpComponents/Knowledge';
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      {/* Start Screen Start Here  */}

      <Stack.Screen name='Home' component={WelcomeScreen} />

      {/* Employee Screen Start Here  */}

      <Stack.Screen
        name='EmpDashboard'
        component={DrawerNav}
        options={{
          headerShown: false,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='Tldashboard'
        component={Tldashboard}
        options={{
          headerShown: false,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />



      <Stack.Screen
        name='TermsAndConditions'
        component={TermsAndConditions}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='ReferShare'
        component={ReferShare}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='Help'
        component={ContactScreen}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='EmpForm'
        component={EmpForm}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      {/* Signup Screen Start here  */}


      <Stack.Screen
        name='EmpRegister'
        component={EmployeeRegister}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name='EmpLogin'
        component={EmployeeLogin}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='AqmSignup'
        component={AqmSignup}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='TlSignup'
        component={TlSignup}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='HrSignup'
        component={HrSignup}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />


      <Stack.Screen
        name='AdminSignup'
        component={AdminSignup}
        options={{
          headerShown: true,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />
      {/* Customer Screen Start Here  */}
      <Stack.Screen
        name='CusAddress'
        component={CusAddress}
        options={{
          headerShown: false,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='CusCompanyAddress'
        component={CusCompanyAddress}
        options={{
          headerShown: false,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='CustomerAccount'
        component={DrawerNav}
        options={{
          headerShown: false,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />

      <Stack.Screen
        name='Elegibility'
        component={Elegibility}
        options={{
          headerShown: false,
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header
          },
          headerTitleStyle: {
            color: 'white', // Text color for the header title
            fontWeight: 'bold', // Make the text bold
            fontSize: 25
          },
          headerTitleAlign: "center"
        }}
      />


    </Stack.Navigator>
  )
}
// console.log(a)
// temperal dead zone  let a
// temperal dead zone is the time between decleartion and the intialization of let and const variable 

// const DrawerNav = () => {

//   const Drawer = createDrawerNavigator();
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <DrawerContent {...props} />}
//     >
//       <Drawer.Screen
//         options={{
//           headerTitle: 'AddRupee',
//           headerStyle: {
//             backgroundColor: '#3E9D7C', // Background color for the header
//           },
//           headerTitleStyle: {
//             color: 'white', // Text color for the header title
//             fontWeight: 'bold', // Make the text bold
//             fontSize: 25
//           },
//           headerTitleAlign: "center"
//         }}
//         name='EmpDashboard' component={EmpDashboard} />
//     </Drawer.Navigator>
//   )
// }

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header 
          },
          headerTintColor: 'white', // Color for the header title and logo
          headerTitleStyle: {
            fontWeight: 'bold', // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
        name='EmpDashboard'
        component={EmpDashboard}
      />

      <Drawer.Screen
        options={{
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header 
          },
          headerTintColor: 'white', // Color for the header title and logo
          headerTitleStyle: {
            fontWeight: 'bold', // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
        name='CustomerAccount'
        component={CustomerAccount}
      />


      <Drawer.Screen
        options={{
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header 
          },
          headerTintColor: 'white', // Color for the header title and logo
          headerTitleStyle: {
            fontWeight: 'bold', // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
        name='Elegibility'
        component={Elegibility}
      />

      <Drawer.Screen
        options={{
          headerTitle: 'AddRupee',
          headerStyle: {
            backgroundColor: '#3E9D7C', // Background color for the header 
          },
          headerTintColor: 'white', // Color for the header title and logo
          headerTitleStyle: {
            fontWeight: 'bold', // Make the text bold
            fontSize: 25,
          },
          headerTitleAlign: 'center',
        }}
        name='knowledge'
        component={knowledge}
      />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
export default App;

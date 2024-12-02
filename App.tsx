/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import { StripeProvider } from '@stripe/stripe-react-native';
import { apiKey } from './src/data/model/api/Constants.tsx';
import Homescreen from './src/ui/screens/Homescreen.tsx';
import SignInSignUpScreen from './src/ui/screens/SignIn.tsx';
import MainScreen from './src/ui/screens/MainScreen.tsx';
import AddPaymentMethod from './src/ui/screens/AddPaymentMethod.tsx'
import AddCard from './src/ui/screens/AddCard.tsx';
import AddCrypto from './src/ui/screens/AddCrypto.tsx';
import {AuthProvider} from './src/data/model/AuthState.tsx'
import {RootStackParamList} from './src/ui/StackNav.tsx'
import Profile from './src/ui/screens/Profile.tsx';


enableScreens();//optimiza la carga de pantallas

const Stack = createNativeStackNavigator<RootStackParamList>();



function App(): React.JSX.Element { //pantalla principal


  return (  

    <SafeAreaProvider>
      <StripeProvider publishableKey = {apiKey}>
        <AuthProvider>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName='Home'
              screenOptions={{headerShown : false}}
            >
              <Stack.Screen name = "Home" component={Homescreen} />
              <Stack.Screen name ="SignIn" component={SignInSignUpScreen} />
              <Stack.Screen name ="MainScreen" component = {MainScreen}/>
              <Stack.Screen name = "AddPaymentMethod" component={AddPaymentMethod}/>
              <Stack.Screen name = "AddCard" component={AddCard}/>
              <Stack.Screen name = "AddCrypto" component={AddCrypto}/>
              <Stack.Screen name = "Profile" component={Profile}/>
              </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </StripeProvider>
    </SafeAreaProvider>
  );
}



export default App;

import React , { useState,useCallback } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import {styles} from '../screenStyles/SignInStyle'
import { RootStackParamList } from "../StackNav";

import BiometricAuth from '../../data/model/BiometricAuth';

type SignInSignUpScreenProps = NativeStackScreenProps<RootStackParamList>;

const SignInSignUpScreen = ({navigation}: SignInSignUpScreenProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const validateInputs = () => {
        if (!email || !password) {
          Alert.alert('Error', 'Please enter both email and password.');
          return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
          Alert.alert('Error', 'Please enter a valid email address.');
          return false;
        }
        if (password.length < 6) {
          Alert.alert('Error', 'Password should be at least 6 characters.');
          return false;
        }
        return true;
      };

      const handleSignIn = useCallback(async () => {
        try {
          //Alert.alert("Holaaaaaaaaa")
          await auth().signInWithEmailAndPassword(email, password);
          Alert.alert('Success', 'Signed In successfully!');
          navigation.navigate('MainScreen');
        } catch (error: any) {
           
          if (error?.code) {
            switch (error.code) {
              case 'auth/invalid-email':
                Alert.alert('Error', 'The email address is not valid.');
                break;
              case 'auth/user-not-found':
                Alert.alert('Error', 'No user found with this email.');
                break;
              case 'auth/wrong-password':
                Alert.alert('Error', 'Incorrect password.');
                break;
              default:
                Alert.alert('Error', error.message);
            }
          } else {
            Alert.alert('Error', 'An unexpected error occurred.');
          }
        }
      }, [email, password]);
    
    
     
      const handleSignUp = useCallback(async () => {
        try {
          await auth().createUserWithEmailAndPassword(email, password);
          Alert.alert('Success', 'Account created successfully!');
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert('Error', error.message);
          } else {
            Alert.alert('Error', 'An unexpected error occurred.');
          }
        }
      }, [email, password]);


      const handleAuthAction = () => {
        //para iniciar directamente
        //Alert.alert('Success', 'Signed In successfully!');
        //navigation.navigate('MainScreen');
        if (!validateInputs()) return;
        if (isSignUp) {
          handleSignUp();
        } else {
          handleSignIn();
        }
      };


      //pantalla
    const handleBiometricSuccess = () =>{
      navigation.navigate('MainScreen');
    };

    return(
        <View style={styles.container}>
        <Text style={styles.title}>{isSignUp ? 'Create Account' : 'Sign In'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.authButton} 
        onPress={handleAuthAction}
        >
            <Text style={styles.authButtonText}>
                {isSignUp ? 'Sign Up' : 'Sign In'}
            </Text>
      </TouchableOpacity>

      {!isSignUp && (
        <BiometricAuth onSuccess={handleBiometricSuccess} buttonText="Sign In with Biometrics" />
      )}

      <TouchableOpacity
        style={styles.switchButton}
        onPress={() => setIsSignUp(!isSignUp)}
      >
            <Text style={styles.switchText}>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </Text>
      </TouchableOpacity>
    </View>
    );
};



export default SignInSignUpScreen
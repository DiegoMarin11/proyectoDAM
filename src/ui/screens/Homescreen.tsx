import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import {styles} from '../screenStyles/HomescreenStyle';
import { RootStackParamList } from "../StackNav";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList>;

const Homescreen = ({navigation}: HomeScreenProps): React.JSX.Element =>{

    return(
        <View style = {styles.container}>

            <Text style = {styles.welcomeText}>Welcome</Text>

                <TouchableOpacity 
                    style = {styles.signInButton}
                    onPress={() => navigation.navigate('SignIn') }
                
                >
                    <Text style = {styles.signInText}>Sign in</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('SignIn')}  
                    style={styles.createAccountContainer}
                >
                    <Text style={styles.createAccountText}>Create an account</Text>
                </TouchableOpacity>
        </View>
    );
}




export default Homescreen 
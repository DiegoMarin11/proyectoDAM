import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export const styles = StyleSheet.create({
  
    container: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      fontFamily: 'Inter',
      
    },
 
  
    title: { 
      padding: 45,
      fontSize: 32,
      fontFamily:'Inter',
      color: '#000000',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    input: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      marginTop:150,
      marginBottom: 15,
      fontSize: 16,
      borderColor: '#ccc',
      borderWidth: 1,
      width: 250,
    },
    authButton: {
      backgroundColor: '#00952D',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginBottom: 20,
      width: 250,
      alignItems: 'center',
    },
    authButtonText: {
      fontSize: 20,
      color: '#fff',
    },
    backButton: {
      position: 'absolute',
      bottom: 20, 
      alignSelf: 'center',
      
    },
    backIcon: {
      width: 50, 
      height: 50,
    },
  });
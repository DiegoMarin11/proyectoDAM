import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      fontFamily: 'Inter',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 30,
      color: '#000000',
    },
    input: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      marginBottom: 15,
      fontSize: 16,
      borderColor: '#ccc',
      borderWidth: 1,
      width: 250,
    },
    pickerContainer: {
      width: 250,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 15,
    },
    picker: {
      width: '100%',
      height: 50,
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
      
      
    },
    backIcon: {
      width: 50, 
      height: 50,
    },
  });
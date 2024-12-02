import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-start',
      fontFamily: 'Inter',
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 50, 
      fontFamily: 'Inter', 
      color: '#000000',
    },
    option: {
      marginBottom: 30, 
    },
    optionText: {
      fontSize: 25,
      color: '#000000',
      textAlign: 'left',
      fontFamily:'Inter',
      fontWeight: 'bold'
    },
    backIcon: {
      width: 50, 
      height: 50,
    },
    backButton: {
      position: 'absolute',
      bottom: 20, 
      left: '50%', 
      
    },
  });
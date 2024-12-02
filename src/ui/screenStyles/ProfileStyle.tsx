import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row', 
      backgroundColor: '#ffffff',
      fontFamily:'Inter',
    },
    sidebar: {
      justifyContent: 'flex-start', 
      backgroundColor: '#00952D', 
      width: '25%', 
    
      alignItems: 'center',
      paddingVertical: 20,
    },
    profileIcon: {
      width: 50,
      height: 50,
      tintColor: '#fff', 
    },
    infoButton: {
      marginTop: 50, 
    },
    infoIcon: {
      width: 40,
      height: 40,
      tintColor: '#fff', 
    },
    homeButton: {
      position: 'absolute',
      bottom: 30, 
   
    },
    homeIcon: {
      width: 50,
      height: 50,
  
     
    },
    profileContent: {
      justifyContent: 'flex-start',
      flex: 1,
      top:10,
      padding: 20, 
      alignItems: 'center',
    
    },
    profileTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 10,
    },
    profileText: {
      fontSize: 20,
      color: '#000000',
      alignSelf: 'flex-start', 
    },
    selectedButton: {
      backgroundColor: '#007B22', 
      borderRadius: 10,            
      padding: 5,            
      width: '80%',           
      alignItems: 'center',    
      justifyContent: 'center',    
    },
    pickerContainer: {
      marginTop: 20,
      backgroundColor: '#f4f4f4',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pickerText: {
      fontSize: 18,
      color: '#000',
      textAlign: 'center',
    },
    deleteButton: {
      marginTop: 40,
      backgroundColor: '#FF0000',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    deleteButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    picker: {
      width: 250,
      height: 50,
    },
  });
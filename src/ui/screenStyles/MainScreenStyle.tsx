import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%', // Superposición para apilarlas
    alignSelf: 'center', // Centrar horizontalmente // Centrar cada tarjeta horizontalmente
  },
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'space-between', 

      backgroundColor: '#ffffff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginBottom: 20, 
    },
    walletText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#000',
    },
    addButton: {
      // espacio agregar
    },
    cardsContainer: {
      flexGrow:1,
      justifyContent: 'center',
      alignItems: 'center', 
      position: 'relative',
    },
    cardsPlaceholderText: {
      fontSize: 18,
      color: '#aaa',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    logoutButton: {
      position: 'absolute',
      bottom: 20,
      left: 20,
    },
    profileButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    addPlusIcon: {
      width: 30, 
      height: 30, 
    },
    addAccountIcon: {
      width: 50, 
      height: 50, 
    },
    addLogOutIcon: {
      width: 40,
      height: 40, 
    },
  });
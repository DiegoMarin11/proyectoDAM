import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        fontFamily: 'Inter',
      },
      title: {
        padding: 40,
        fontSize: 32,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
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
      switchButton: {
        marginTop: 20,
        alignItems: 'center',
      },
      switchText: {
        color: '#000000', 
        textDecorationLine: 'underline',
        fontSize: 20, 
      },
  });
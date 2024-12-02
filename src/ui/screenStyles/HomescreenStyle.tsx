import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    container:{

        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    welcomeText:{
        padding: 40,
        fontSize: 32,
        color:'#000000',
        fontWeight: 'bold',
        fontFamily: 'Inter',


    },
    signInButton: {
        backgroundColor: '#00952D', 
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: 250,
        alignItems: 'center',
      },
      signInText:{
        fontSize:20,
        color: '#fff', 
        fontFamily: 'Inter',

      },
      createAccountContainer: {
        position: 'absolute', 
        bottom: 20, 
      },
      createAccountText: {
        color: '#000000', 
        textDecorationLine: 'underline', 
        fontSize: 20,
        fontFamily: 'Inter',

      },
})
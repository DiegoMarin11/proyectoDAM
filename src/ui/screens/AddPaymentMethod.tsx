import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {styles} from '../screenStyles/AddPaymentMethodStyle'
import { RootStackParamList } from '../StackNav';

type PaymentMethodScreenProps = NativeStackScreenProps<RootStackParamList>;

const AddPaymentMethod = ({ navigation }: PaymentMethodScreenProps) => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Add payment method</Text>

      
      <TouchableOpacity onPress={() => navigation.navigate('AddCard')} style={styles.option}>
        <Text style={styles.optionText}>Credit/debit card</Text>
      </TouchableOpacity>

   
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MainScreen')}>
        <Image source={require('../../../assets/icons/home.png')} style={styles.backIcon} />
      </TouchableOpacity>

    </View>
  );
};

/*<TouchableOpacity onPress={() => navigation.navigate('AddCrypto')} style={styles.option}>
        <Text style={styles.optionText}>Crypto Wallet</Text>
      </TouchableOpacity>
 */

export default AddPaymentMethod;

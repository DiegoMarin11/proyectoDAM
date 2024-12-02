import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../StackNav';
import {styles} from '../screenStyles/AddCryptoStyle'


type AddCryptoProps =  NativeStackScreenProps<RootStackParamList>

const AddCrypto = ({navigation}: AddCryptoProps) => {
  const [alias, setAlias] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('bitcoin'); 
  const [walletAddress, setWalletAddress] = useState('');

  const handleAddWallet = () => {
    Alert.alert("WALLET ADDED")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Crypto Wallet</Text>


      <TextInput
        style={styles.input}
        placeholder="Alias"
        value={alias}
        onChangeText={setAlias}
        autoCapitalize="words"
      />

     
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={cryptoCurrency}
          onValueChange={(itemValue) => setCryptoCurrency(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Bitcoin" value="bitcoin" />
          <Picker.Item label="Ethereum" value="ethereum" />
          <Picker.Item label="Litecoin" value="litecoin" />
        </Picker>
      </View>

     
      <TextInput
        style={styles.input}
        placeholder="Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
        autoCapitalize="none"
      />

  
      <TouchableOpacity style={styles.authButton} onPress={handleAddWallet}>
        <Text style={styles.authButtonText}>Add Wallet</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MainScreen')}>
        <Image source={require('../../../assets/icons/home.png')} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
};



export default AddCrypto;

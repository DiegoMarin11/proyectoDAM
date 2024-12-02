import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform} from 'react-native';
import { RootStackParamList } from '../StackNav';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../../data/model/AuthState';
import { styles } from '../screenStyles/AddCardStyle';
import { AddCardToFirestore } from '../../data/model/api/firestoreConnection/AddCardToFirestore';
import { createPaymentMethod, useStripe, CardField } from '@stripe/stripe-react-native';

type AddCardProps = NativeStackScreenProps<RootStackParamList>;

interface FirestoreCardData {
  alias: string;
  last4: string;
  PMid: string;
}

const AddCard = ({ navigation }: AddCardProps) => {
  const { user } = useAuth();
  const { createPaymentMethod } = useStripe();
  const [alias, setAlias] = useState('');

  const handleAddCard = async () => {
    if (!user) {
      Alert.alert('Usuario no autenticado');
      return;
    }

    try {
      const { paymentMethod, error } = await createPaymentMethod({
        paymentMethodType: 'Card',
      });

      if (error) {
        console.error('Error al crear el método de pago:', error);
        Alert.alert('Error al crear el método de pago:', error.localizedMessage);
        return;
      }

      if (!paymentMethod) {
        Alert.alert('No se pudo generar el método de pago');
        return;
      }

      const last4 = paymentMethod.Card?.last4;
      if (!last4) {
        Alert.alert('No se pudieron obtener los últimos 4 dígitos de la tarjeta');
        return;
      }

      const cardData: FirestoreCardData = {
        alias,
        last4,
        PMid: paymentMethod.id,
      };

      const success = await AddCardToFirestore(user.uid, cardData);
      if (success) {
        Alert.alert('Tarjeta agregada exitosamente');
        navigation.replace('MainScreen');
      } else {
        Alert.alert('Error al guardar la tarjeta en Firestore');
      }
    } catch (err) {
      console.error('Error en handleAddCard:', err);
      Alert.alert('Error inesperado al agregar la tarjeta');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0} 
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Agregar Tarjeta</Text>

          <TextInput
            style={styles.input}
            placeholder="Alias"
            value={alias}
            onChangeText={setAlias}
            autoCapitalize="words"
          />

          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '85%',
              height: 100,
              marginVertical: 30,
            }}
          />

          <TouchableOpacity style={styles.authButton} onPress={handleAddCard}>
            <Text style={styles.authButtonText}>Agregar Tarjeta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('MainScreen')}
          >
            <Image source={require('../../../assets/icons/home.png')} style={styles.backIcon} />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddCard;
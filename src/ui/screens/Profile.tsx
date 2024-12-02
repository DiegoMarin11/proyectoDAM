
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert,  } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../StackNav'; 
import { Picker } from '@react-native-picker/picker';
import {styles} from '../screenStyles/ProfileStyle'
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useAuth } from '../../data/model/AuthState';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile = ({ navigation }: ProfileScreenProps) => {
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState('info');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null); 
  const [paymentMethods, setPaymentMethods] = useState<{ id: string; label: string }[]>([]);

  useEffect(() => {
    if (user) {
      const fetchPaymentMethods = async () => {
        try {
          const cardsSnapshot = await firestore()
            .collection('user')
            .doc(user.uid)
            .collection('cards')
            .get();

          const methods = cardsSnapshot.docs.map((doc) => ({
            id: doc.id,
            label: `**** ${doc.data().Last4}`, // Mostrar los últimos 4 dígitos
          }));

          setPaymentMethods(methods);
        } catch (error) {
          console.error('Error al cargar los métodos de pago:', error);
          Alert.alert('Error al cargar los métodos de pago.');
        }
      };

      fetchPaymentMethods();
    }
  }, [user]);

  // Función para eliminar un método de pago
  const deletePayment = async () => {
    if (!selectedPaymentMethod) {
      Alert.alert('Selecciona un método de pago para eliminar.');
      return;
    }

    try {
      await firestore()
        .collection('user')
        .doc(user?.uid)
        .collection('cards')
        .doc(selectedPaymentMethod)
        .delete();

      setPaymentMethods((prev) =>
        prev.filter((method) => method.id !== selectedPaymentMethod)
      );
      setSelectedPaymentMethod(null);

      Alert.alert('Método de pago eliminado exitosamente.');
    } catch (error) {
      console.error('Error al eliminar el método de pago:', error);
      Alert.alert('Error al eliminar el método de pago.');
    }
  };


  return (
    <View style={styles.container}>
     
      <View style={styles.sidebar}>
        
        <Image source={require('../../../assets/icons/account_circle.png')} style={styles.profileIcon} />

       
        <TouchableOpacity 
            style={[
              styles.infoButton, 
              selectedOption === 'info' && styles.selectedButton
            ]} 
            onPress={() => setSelectedOption('info')}
          >
          <Image source={require('../../../assets/icons/Info.png')} style={styles.infoIcon} />
        </TouchableOpacity>


       <TouchableOpacity 
            style={[
              styles.infoButton, 
              selectedOption === 'card' && styles.selectedButton
            ]} 
            onPress={() => setSelectedOption('card')}
          >
            <Image source={require('../../../assets/icons/Card.png')} style={styles.infoIcon} />
    </TouchableOpacity>
        
      </View>

     
      <View style={styles.profileContent}>
          {selectedOption === 'info' ? (
            <>
              <Text style={styles.profileTitle}>PROFILE</Text>
              <Text style={styles.profileText}>Email: {user?.email || 'Email no disponible'}</Text>
            </>
          ) : (
            <>
              <Text style={styles.profileTitle}>Current payment methods</Text>
              <View style={styles.pickerContainer}>
                    <Picker
                      selectedValue={selectedPaymentMethod}
                      onValueChange={(itemValue) => setSelectedPaymentMethod(itemValue)}
                      style={styles.picker}
                    >
                      <Picker.Item label="Select payment method" value={null} color="#888" />
                      {paymentMethods.map((method) => (
                       <Picker.Item key={method.id} label={method.label} value={method.id} />
                ))}
              </Picker>
            </View>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteButtonText} onPress={deletePayment}>Delete selected payment method</Text>
              </TouchableOpacity>
            </>
  )}
  <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('MainScreen')}>
    <Image source={require('../../../assets/icons/home.png')} style={styles.homeIcon} />
  </TouchableOpacity>
</View>
    </View>
  );
};



export default Profile;

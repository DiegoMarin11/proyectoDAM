import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import auth from '@react-native-firebase/auth'; 
import {useAuth} from '../../data/model/AuthState'
import { RootStackParamList } from '../StackNav';
import {styles} from '../screenStyles/MainScreenStyle'
import Card from '../components/card';


type MainScreenProps = NativeStackScreenProps<RootStackParamList>;

const MainScreen = ({ navigation }: MainScreenProps) => {
  const { signOut, user } = useAuth(); 
  const [cards, setCards] = useState<{ id: string; alias: string; last4: string }[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null); 


  useEffect(() => {
    if (user) {
      const unsubscribe = firestore()
        .collection('user')
        .doc(user.uid)
        .collection('cards')
        .onSnapshot(
          (snapshot) => {
            const updatedCards = snapshot.docs.map((doc) => ({
              id: doc.id,
              alias: doc.data().Alias,
              last4: doc.data().Last4,
            }));
            setCards(updatedCards);
          },
          (error) => {
            console.error('Error al obtener tarjetas en tiempo real:', error);
          }
        );

      return () => unsubscribe(); // Detener el listener al desmontar el componente
    }
  }, [user]);


  const handleLogout = async () => {
    await signOut(); 
    Alert.alert("Signed out");
    navigation.replace('Home'); 
  };
  const handleCardPress = (id: string) => {
    setSelectedCard((prevSelectedCard) => (prevSelectedCard === id ? null : id)); 
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { opacity: selectedCard ? 0.3 : 1 }]}>
        <Text style={styles.walletText}>Wallet</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPaymentMethod')}>
        <Image source={require('../../../assets/icons/icon.png')} style={styles.addPlusIcon} />
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardsContainer}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.cardContainer,
              {
                marginBottom: -375, // Espaciado entre tarjetas
                zIndex: cards.length - index, // Orden de superposición
              },
            ]}
          >
            <Card
              alias={item.alias}
              last4={item.last4}
              isSelected={selectedCard === item.id}
              onPress={() => handleCardPress(item.id)}
              dimmed={selectedCard !== null && selectedCard !== item.id}
            />
          </View>
        )}
      />



     
      <View style={[styles.footer, { opacity: selectedCard ? 0.3 : 1 }]}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Image source={require('../../../assets/icons/Log_out.png')} style={styles.addLogOutIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../../../assets/icons/account_circle.png')} style={styles.addAccountIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default MainScreen;

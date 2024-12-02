import firestore from '@react-native-firebase/firestore';
import { useStripe } from '@stripe/stripe-react-native';

interface FirestoreCardData {
  alias: string;
  last4: string;
  PMid: string; 
}

export const AddCardToFirestore = async (
  userId: string,
  cardData: FirestoreCardData
): Promise<boolean> => {
  try {
    // Referencia a la colección de Firestore
    const userRef = firestore().collection('user').doc(userId);
    const cardsRef = userRef.collection('cards');

    // Guardar la tarjeta en Firestore
    await cardsRef.add({
      Alias: cardData.alias,
      Last4: cardData.last4,
      PMid: cardData.PMid,
    });

    console.log('Tarjeta agregada exitosamente:', cardData);
    return true;
  } catch (error) {
    console.error('Error al guardar la tarjeta en Firestore:', error);
    return false;
  }
};
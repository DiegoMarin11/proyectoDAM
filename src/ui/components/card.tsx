import React, { useRef } from 'react';
import { Animated, Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CardProps {
  alias: string;
  last4: string;
  onPress: () => void;
  isSelected?: boolean;
  dimmed?: boolean;
}

const Card: React.FC<CardProps> = ({ alias, last4, isSelected = false, onPress, dimmed = false }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
      <Animated.View
        style={[
          styles.cardContainer,
          { transform: [{ scale }] },
          dimmed && styles.dimmedCard,
          isSelected && styles.selectedCard,
        ]}
      >
        <LinearGradient
          colors={['#00A94F', '#007E33']} // Gradiente
          style={styles.gradientBackground}
        />
        <View style={styles.cardContent}>
          <Text style={styles.alias}>{alias}</Text>
          <View style={styles.chip} />
          <Text style={styles.last4}>**** {last4}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 275,
    height: '43%',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  chip: {
    width: 40,
    height: 25,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  dimmedCard: {
    opacity: 0.3,
  },
  alias: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
  },
  last4: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
});

export default Card;

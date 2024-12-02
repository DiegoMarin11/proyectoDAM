import React, { useCallback } from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

interface BiometricAuthProps {
  onSuccess: () => void;
  buttonText?: string;
}

const BiometricAuth: React.FC<BiometricAuthProps> = ({ onSuccess, buttonText = 'Use Biometrics' }) => {
  const handleBiometricAuth = useCallback(async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    try {
      const { available, biometryType } = await rnBiometrics.isSensorAvailable();

      if (available && biometryType) {
        const result = await rnBiometrics.simplePrompt({
          promptMessage: 'Confirm your identity',
          cancelButtonText: 'Cancel',
        });

        if (result.success) {
          Alert.alert('Success', 'Biometric authentication successful!');
          onSuccess();
        } else {
          Alert.alert('Error', 'Biometric authentication failed.');
        }
      } else {
        Alert.alert('Error', 'Biometric authentication is not available.');
      }
    } catch (error) {
      Alert.alert('Error', 'Biometric authentication is not supported on this device.');
    }
  }, [onSuccess]);

  return (
    <TouchableOpacity style={styles.biometricButton} onPress={handleBiometricAuth}>
      <Text style={styles.biometricText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  biometricButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
  },
  biometricText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default BiometricAuth;

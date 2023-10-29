import React from 'react';
import { View, Text, Image, TouchableOpacity, handleContinue, StyleSheet } from 'react-native';
import styles from '../../../styles';

import { useNavigation } from '@react-navigation/native'

export default function Welcome () {
    const navigation = useNavigation();


    return(
    <View style={styles.container}>
      <Image
        source={require('../../../assets/barbeariainicio.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>BEM VINDO</Text>
      <Text style={styles.subtitle}>Aqui você encontra os melhores preços</Text>
      <TouchableOpacity
        style={styles.customButton}
        onPress={ () => navigation.navigate('SignIn')}
      >
        <Text style={styles.customButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
    );
}


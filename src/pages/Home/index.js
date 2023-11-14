import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Animatable.View animation="fadeInLeft">

        <View style={styles.personContainer}>
            <Icon name="ios-person" size={50} color="#D9C7B8" style={styles.personIcon} />
            <Text style={styles.message}>
                Bem vindo, Usuário
            </Text>
            <Icon name="ios-notifications" size={40} color="#D9C7B8" />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="ios-search" size={20} color="#D9C7B8" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
          />
        </View>

        <View style={styles.noticeSquad}>
          <View style={styles.upSquad}>
            <Text style={styles.titleSquad}>OFERTA</Text>
            <Text style={styles.percentSquad}>30%</Text>
          </View>
          <Text style={styles.subtitleSquad}>Só hoje aproveite</Text>
          <Text style={styles.legendSquad}>Corte e pintura de cabelo com desconto via pix!</Text>
        </View>

        <View style={styles.bubblesContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="ios-cut-outline" size={30} color="#D9C7B8" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../assets/moustache.png')}
              resizeMode="contain"
              style={[styles.buttonMoustache, { tintColor: '#D9C7B8' }]}
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <Icon name="ios-color-palette-outline" size={30} color="#D9C7B8" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../../assets/eyebrow.png')}
              resizeMode="contain"
              style={[styles.buttonMoustache, { tintColor: '#D9C7B8' }]}
            />
          </TouchableOpacity>
        </View>

        <View>
          
        </View>

      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212126',
    },

    personContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 15,
    },

    personIcon: {
        marginRight: 25,
    },

    message:{
        fontSize: 15,
        color: '#FFF',
        marginLeft: -15,
        marginRight: 100,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },

    input: {
        borderBottomWidth: 1,
        height: 40,
        width: '70%',
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: '#0C0707',
        borderRadius: 15,
        color: '#FFF',
    },

    searchIcon: {
        marginRight: 5,
    },

    button:{
      backgroundColor: '#A67D4B',
      width: 50,
      height: 50,
      borderRadius: 25,
      paddingVertical: 8,
      margin: 10,
      padding: 10,
      alignSelf: 'center',
    },

    bubblesContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
    },

    buttonMoustache: {
      flex: 1,
      width: 30,
      height: 30,
    },

    noticeSquad: {
      backgroundColor: '#A67D4B',
      width: '80%',
      alignSelf: 'center',
      borderRadius: 25,
      padding: 15,
      marginTop: 20,
      marginBottom: 30,
    },

    upSquad: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 1,
    },

    titleSquad: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
    },

    percentSquad: {
      color: '#FFFFFF',
      fontSize: 25,
      fontWeight: 'bold',
    },

    subtitleSquad: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },

    legendSquad: {
      color: '#FFFFFF',
      fontSize: 14,
    },

});

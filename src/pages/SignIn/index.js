import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function SignIn () {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                placeholder="Digite um email..."
                placeholderTextColor="#AAA"
                style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                placeholder="Sua senha"
                placeholderTextColor="#AAA"
                style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText} 
                    onPress={ () => navigation.navigate('Register')}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#212126'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom:120,
        color: '#FFF'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        marginBottom: 5,
        color: '#FFF',
        textAlign:'center',
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        width: '90%',
        marginBottom: 12,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
        backgroundColor: '#0C0707',
        borderRadius: 50,
        alignSelf: 'center',
        color: '#FFF'
    },
    button:{
        backgroundColor: '#A67D4B',
        width: '80%',
        borderRadius: 50,
        paddingVertical: 8,
        marginTop: 100,
        padding: 10,
        alignSelf: 'center',
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 25,
        textAlign: 'center',
    },
    buttonRegister:{
        marginTop: 30,

    },
    registerText:{
        textAlign: 'center',
        color: '#D9C7B8'
    }
})
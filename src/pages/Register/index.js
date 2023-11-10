import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CheckBox } from 'react-native-elements';

export default function Register () {

    const navigation = useNavigation();

    const [checked, setChecked] = useState(false);

    return(
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Crie Sua Conta</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput
                placeholder="Nome de Usuário"
                placeholderTextColor="#AAA"
                style={styles.input}
                />

                <TextInput
                placeholder="Email"
                placeholderTextColor="#AAA"
                style={styles.input}
                />

                <TextInput
                placeholder="Celular"
                placeholderTextColor="#AAA"
                style={styles.input}
                />

                <TextInput
                placeholder="Data de Nascimento"
                placeholderTextColor="#AAA"
                style={styles.input}
                />

                <TextInput
                placeholder="Senha"
                placeholderTextColor="#AAA"
                style={styles.input}
                />

                <TextInput
                placeholder="Confirme Sua Senha"
                placeholderTextColor="#AAA"
                style={styles.input}
                />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>

            <View style={styles.checkContainer}>
                <Text style={styles.checkText}>Para concluir o cadastro aceite os Termos e Condições de Uso</Text>
                <CheckBox
                    title='Concordo com os Termos e Condições de Uso'
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                    containerStyle={styles.check}
                    textStyle={{ color: '#D9C7B8' }}
                    checkedColor='#A67D4B'
                />
            </View>

            <TouchableOpacity style={styles.buttonsignIn}>
                <Text style={styles.signInText} 
                onPress={ () => navigation.navigate('SignIn')}>Já tem uma conta? Entrar</Text>
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

    containerForm:{
        top: 100,
    },

    message:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF'
    },

    containerHeader:{
        marginTop: '14%',
        paddingStart: '5%',
        alignSelf: 'center',
    },

    button:{
        backgroundColor: '#A67D4B',
        width: '80%',
        borderRadius: 50,
        paddingVertical: 8,
        marginTop: 30,
        padding: 10,
        alignSelf: 'center',
    },

    buttonText:{
        color: '#ffffff',
        fontSize: 25,
        textAlign: 'center',
    },

    buttonsignIn:{
        marginTop: 30,

    },

    signInText:{
        textAlign: 'center',
        color: '#D9C7B8',
        marginTop: 15,
    },

    checkContainer:{
        backgroundColor: 'transparent',
        alignSelf: 'center',
        marginTop: 30,
    },
    
    check:{
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        margin: 0,
    },

    checkText:{
        alignSelf: 'center',
        textAlign: 'center',
        color: '#D9C7B8',
        fontSize: 10,
        marginBottom: 15,
    },

})
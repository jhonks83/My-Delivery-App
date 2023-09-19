import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { styles } from './styles';

export default function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email && password) {
            setIsLoggedIn(true);
        } else {
            Alert.alert('Erro', 'Por favor, insira e-mail e senha válidos.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bem-vindo ao DeliveryApp</Text>
            <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilos removidos para economizar espaço - você pode adicionar os estilos que tinha anteriormente aqui.
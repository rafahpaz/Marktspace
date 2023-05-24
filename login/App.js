import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para realizar o login
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
    <Image source={require('./assets/logo.png')} style={styles.logoImage} />
      <Text style={styles.logo}>marktspace</Text>
      <Text style={styles.logo2}>Seu espaço de compra e venda</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="grey"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Senha"
          placeholderTextColor="grey"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.acessoTexto}>Ainda não tem acesso?</Text>
      <TouchableOpacity style={styles.criarConta} onPress={handleLogin}>
        <Text style={styles.criarText}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edecee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#292a31',
    marginBottom: -5,
  },
  logo2: {
    fontSize: 10.5,
    color: '#292a31',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f7f7f8',
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#6c84c4',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  criarConta: {
    width: '80%',
    backgroundColor: '#d9d8da',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: -40,
  },
  loginText: {
    color: 'white',
  },
  acessoTexto: {
    color: 'gray',
    marginTop: 60,
    marginBottom: -10,
  },
});

export default LoginScreen;

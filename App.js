import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const onClickLogin = () => {
    Alert.alert("Login", "Você tentou fazer login");
  };

  const onClickSignIn = () => {
    Alert.alert("Criar conta", "Você tentou criar conta");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.png")}></Image>
      <Text style={styles.text}> Seminário </Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
      ></TextInput>
      <TouchableOpacity onPress={onClickLogin} style={styles.buttonLogin}>
        <Text style={styles.textButton}> LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClickSignIn} style={styles.buttonSignIn}>
        <Text style={styles.textButton}> CRIAR CONTA </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    marginBottom: 20,
    height: 150,
  },
  text: {
    marginBottom: 20,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 20,
    width: 300,
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    fontWeight: "bold",
  },
  buttonLogin: {
    width: 300,
    backgroundColor: "#3498DB",
    height: 42,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonSignIn: {
    width: 150,
    backgroundColor: "#F43D7F",
    height: 42,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

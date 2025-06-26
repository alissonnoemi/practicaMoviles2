import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Ejercicio2Screen() {
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [referencias, setReferencias] = useState('');
  const [fiscal, setFiscal] = useState(false);
  const [visible, setVisible] = useState(false);

  const [datos, setDatos] = useState({
    calle: '',
    numero: '',
    ciudad: '',
    referencias: '',
    fiscal: false,
  });

  function guardar() {
    if (calle.trim() === '' || numero.trim() === '' || ciudad.trim() === '') {
      Alert.alert('Todos los campos son obligatorios excepto Referencias');
      return;
    }
    if (!/^\d+$/.test(numero.trim())) {
      Alert.alert('El Número Exterior debe ser numérico');
      return;
    }
    setDatos({
      calle: calle.trim(),
      numero: numero.trim(),
      ciudad: ciudad.trim(),
      referencias: referencias.trim(),
      fiscal: fiscal,
    });
    setVisible(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dirección</Text>
      <TextInput
        style={styles.input}
        placeholder="Calle"
        placeholderTextColor="#c084fc"
        value={calle}
        onChangeText={setCalle}
      />
      <TextInput
        style={styles.input}
        placeholder="Número Exterior"
        placeholderTextColor="#c084fc"
        value={numero}
        onChangeText={setNumero}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        placeholderTextColor="#c084fc"
        value={ciudad}
        onChangeText={setCiudad}
      />
      <TextInput
        style={styles.input}
        placeholder="Referencias (opcional)"
        placeholderTextColor="#c084fc"
        value={referencias}
        onChangeText={setReferencias}
      />
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Es dirección fiscal?</Text>
        <Switch
          value={fiscal}
          onValueChange={setFiscal}
          trackColor={{ false: "#f3e8ff", true: "#f7c5e0" }}
          thumbColor={fiscal ? "#d291bc" : "#e0c3fc"}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={guardar}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      <View style={styles.linea} />
      <Text style={styles.subtitle}>Ver Dirección</Text>
      <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.showButton}>
        <Text style={styles.showButtonText}>{visible ? "Ocultar" : "Mostrar"}</Text>
      </TouchableOpacity>
      <View style={styles.linea} />
      {visible ? (
        <View style={styles.datosBox}>
          <Text style={styles.txt}>Calle: {datos.calle}</Text>
          <Text style={styles.txt}>Número: {datos.numero}</Text>
          <Text style={styles.txt}>Ciudad: {datos.ciudad}</Text>
          {datos.referencias !== '' ? (
            <Text style={styles.txt}>Referencias: {datos.referencias}</Text>
          ) : null}
          <Text style={styles.txt}>Fiscal: {datos.fiscal ? "Sí" : "No"}</Text>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#d291bc" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f6",
    alignItems: "center",
    justifyContent: "center",
    padding: 28,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 18,
    color: "#d291bc",
    letterSpacing: 2,
    textShadowColor: "#fbeffb",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    marginVertical: 10,
    color: "#a4508b",
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
  },
  input: {
    fontSize: 18,
    backgroundColor: "#fff",
    width: "90%",
    marginVertical: 8,
    padding: 14,
    borderRadius: 18,
    borderColor: "#d291bc",
    borderWidth: 2,
    shadowColor: "#d291bc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    elevation: 3,
    color: "#a4508b",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  switchLabel: {
    fontSize: 18,
    color: "#a4508b",
    marginRight: 10,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#f7c5e0",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: 10,
    marginBottom: 6,
    shadowColor: "#d291bc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#a4508b",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
  },
  showButton: {
    backgroundColor: "#e0c3fc",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginBottom: 8,
    marginTop: 2,
    alignSelf: "center",
  },
  showButtonText: {
    color: "#a4508b",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
  linea: {
    borderWidth: 1,
    width: "90%",
    marginVertical: 12,
    borderColor: "#f7c5e0",
    borderRadius: 3,
  },
  datosBox: {
    backgroundColor: "#fbeffb",
    borderRadius: 18,
    padding: 18,
    marginTop: 6,
    alignItems: "center",
    shadowColor: "#d291bc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 2,
  },
  txt: {
    fontSize: 18,
    marginVertical: 3,
    color: "#a4508b",
    fontWeight: "500",
    textAlign: "center",
  },
});
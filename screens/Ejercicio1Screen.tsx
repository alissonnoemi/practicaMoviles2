import { ActivityIndicator, Button, StyleSheet, Text, View, Alert, Switch, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Ejercicio1Screen() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [visible, setVisible] = useState(false);

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        contraseña: ''
    });

    function guardar() {
        if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || telefono.trim() === '' || contraseña.trim() === '' || confirmarContraseña.trim() === '') {
            Alert.alert('Todos los campos son obligatorios');
            return;
        }
        if (!/^\d+$/.test(telefono)) {
            Alert.alert('El teléfono debe ser numérico');
            return;
        }
        if (contraseña !== confirmarContraseña) {
            Alert.alert('Las contraseñas no coinciden');
            return;
        }
        setDatos({
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            email: email.trim(),
            telefono: telefono.trim(),
            contraseña: contraseña
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulario 1</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                onChangeText={setNombre}
                value={nombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su apellido"
                onChangeText={setApellido}
                value={apellido}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su teléfono"
                onChangeText={setTelefono}
                value={telefono}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese su contraseña"
                onChangeText={setContraseña}
                value={contraseña}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                onChangeText={setConfirmarContraseña}
                value={confirmarContraseña}
                secureTextEntry
            />
            <Button title="Guardar" onPress={guardar} />
            <View style={styles.linea} />
            <Text style={styles.subtitle}>Ver Datos</Text>
            <Switch value={visible} onValueChange={() => setVisible(!visible)} />
            <View style={styles.linea} />
            {visible ? (
                <View>
                    <Text style={styles.txt}>Nombre: {datos.nombre}</Text>
                    <Text style={styles.txt}>Apellido: {datos.apellido}</Text>
                    <Text style={styles.txt}>Email: {datos.email}</Text>
                    <Text style={styles.txt}>Teléfono: {datos.telefono}</Text>
                </View>
            ) : (
                <ActivityIndicator />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffe6fa", 
        alignItems: "center",
        justifyContent: "center",
        padding: 28,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#d291bc",
        letterSpacing: 2,
        textShadowColor: "#fff0f6",
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 24,
        marginVertical: 14,
        color: "#a4508b",
        fontWeight: "600",
        letterSpacing: 1,
        textAlign: "center",
    },
    input: {
        fontSize: 18,
        backgroundColor: "#fff0f6",
        width: "90%",
        marginVertical: 10,
        padding: 14,
        borderRadius: 18,
        borderColor: "#d291bc",
        borderWidth: 2,
        shadowColor: "#d291bc",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
        elevation: 4,
        color: "#a4508b",
    },
    txt: {
        fontSize: 20,
        marginVertical: 5,
        color: "#a4508b",
        fontWeight: "500",
        backgroundColor: "#fbeffb",
        padding: 10,
        borderRadius: 12,
        width: 270,
        textAlign: "center",
        alignSelf: "center",
        marginBottom: 4,
        borderWidth: 1,
        borderColor: "#d291bc",
        shadowColor: "#d291bc",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 2,
    },
    linea: {
        borderWidth: 1,
        width: "90%",
        marginVertical: 16,
        borderColor: "#f7c5e0",
        borderRadius: 3,
    },
    // Estilo para el botón nativo
    button: {
        backgroundColor: "#f7c5e0",
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 32,
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
    // Switch personalizado (solo para referencia visual)
    switchTrack: {
        backgroundColor: "#f7c5e0",
    },
    switchThumb: {
        backgroundColor: "#d291bc",
    }
});
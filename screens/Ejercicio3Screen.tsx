import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Ejercicio3Screen() {
    const [contacto, setContacto] = useState('');
    const [recomienda, setRecomienda] = useState('');
    const [razon, setRazon] = useState('');
    const [permiteContacto, setPermiteContacto] = useState(false);
    const [visible, setVisible] = useState(false);

    const [datos, setDatos] = useState({
        contacto: '',
        recomienda: '',
        razon: '',
        permiteContacto: false,
    });

    function guardar() {
        if (contacto.trim() === '' || recomienda === '' || razon.trim() === '') {
            Alert.alert('Todos los campos son obligatorios');
            return;
        }
        setDatos({
            contacto: contacto.trim(),
            recomienda,
            razon: razon.trim(),
            permiteContacto,
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Encuesta de Satisfacción</Text>
            <TextInput
                style={styles.input}
                placeholder="Tu contacto (email o teléfono)"
                placeholderTextColor="#c084fc"
                value={contacto}
                onChangeText={setContacto}
            />
            <Text style={styles.subtitle}>¿Recomendarías el producto?</Text>
            <View style={styles.radioGroup}>
                <TouchableOpacity
                    style={[styles.radioButton, recomienda === 'Sí' && styles.radios]}
                    onPress={() => setRecomienda('Sí')}
                >
                    <Text style={styles.radioText}>Sí</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.radioButton, recomienda === 'No' && styles.radios]}
                    onPress={() => setRecomienda('No')}
                >
                    <Text style={styles.radioText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.radioButton, recomienda === 'Quizás' && styles.radios]}
                    onPress={() => setRecomienda('Quizás')}
                >
                    <Text style={styles.radioText}>Quizás</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                placeholder="¿Por qué diste esa valoración?"
                placeholderTextColor="#c084fc"
                value={razon}
                onChangeText={setRazon}
                multiline
            />
            <View style={styles.switchr}>
                <Text style={styles.switchh}>Permitir contacto para seguimiento</Text>
                <Switch
                    value={permiteContacto}
                    onValueChange={setPermiteContacto}
                    trackColor={{ false: "#f3e8ff", true: "#f7c5e0" }}
                    thumbColor={permiteContacto ? "#d291bc" : "#e0c3fc"}
                />
            </View>
            <Button title="Guardar" onPress={guardar} color="#d291bc" />
            <View style={styles.linea} />
            <Text style={styles.subtitle}>Ver Respuestas</Text>
            <Switch
                value={visible}
                onValueChange={() => setVisible(!visible)}
                trackColor={{ false: "#f3e8ff", true: "#f7c5e0" }}
                thumbColor={visible ? "#d291bc" : "#e0c3fc"}
            />
            <View style={styles.linea} />
            {visible ? (
                <View>
                    <Text style={styles.txt}>Contacto: {datos.contacto}</Text>
                    <Text style={styles.txt}>¿Recomienda?: {datos.recomienda}</Text>
                    <Text style={styles.txt}>Razón: {datos.razon}</Text>
                    <Text style={styles.txt}>Permite contacto: {datos.permiteContacto ? "Sí" : "No"}</Text>
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
        fontSize: 34,
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
        fontSize: 20,
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
    radioGroup: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
    },
    radioButton: {
        borderWidth: 2,
        borderColor: "#d291bc",
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginHorizontal: 6,
        backgroundColor: "#fff0f6",
    },
    radios: {
        backgroundColor: "#f7c5e0",
        borderColor: "#a4508b",
    },
    radioText: {
        color: "#a4508b",
        fontSize: 18,
        fontWeight: "600",
    },
    switchr: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12,
        alignSelf: "flex-start",
        marginLeft: "5%",
    },
    switchh: {
        fontSize: 16,
        color: "#a4508b",
        marginRight: 10,
        fontWeight: "500",
    },
    linea: {
        borderWidth: 1,
        width: "90%",
        marginVertical: 12,
        borderColor: "#f7c5e0",
        borderRadius: 3,
    },
    txt: {
        fontSize: 18,
        marginVertical: 3,
        color: "#a4508b",
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: "#fbeffb",
        padding: 10,
        borderRadius: 12,
        width: 270,
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

});

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LoginScreen({ navigation }: any) {
    return (
        <View>
            <Text>Empezar formularios</Text>
            <Button title='Formulario 1' onPress={ ()=> navigation.navigate('Tabs')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
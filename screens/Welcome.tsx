import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome({ navigation }: any) {
    return (
        <View>
            <Text>Bienvenid@</Text>
            <Button title='Ir a inicio'
                onPress={() => navigation.navigate('Login')}>

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})
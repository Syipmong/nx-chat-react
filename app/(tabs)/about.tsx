import { useColorScheme } from '@/hooks/useColorScheme.web';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function AboutScreen(){
    const colorScheme = useColorScheme();

    const styles =  StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorScheme === 'dark'? '#333': '#fff'
        },
        text: {
            fontSize: 20,
            color: colorScheme === 'dark'? '#fff': '#333',

        }
    })


    return(
        <>
        <StatusBar style={colorScheme === 'dark'? 'light': 'dark'} />
        <View style={styles.container}>
            <Text style={styles.text}>
                About Screen
            </Text>
        </View>
        </>
    )
}


import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                About Screen
            </Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#333',
    }
})
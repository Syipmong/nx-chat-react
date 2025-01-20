import React from "react";
import {StyleSheet, View, Pressable, Text } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
    label: string;
    theme? : 'primary'
    onPress?: ()=> void;
}

export default function Button({label, theme, onPress}: Props){
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        buttonContainer: {
            width: 320,
            height: 68,
            marginHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
        },
        button: {
            borderRadius: 10,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        buttonLabel: {
            fontSize: 16,
            color: colorScheme === 'dark'? '#fff': '#333',
        },
        buttonIcon: {
            paddingRight: 8,
        },
        
    })
if(theme === 'primary'){
    return(
        <View style={[styles.buttonContainer,
            {
                borderWidth: 4,
                borderColor: colorScheme === 'dark'? '#1e88e5': '#3f51b5',
                borderRadius: 18,
            }

        ]}>
            <Pressable style={[styles.button, {
                backgroundColor: colorScheme === 'dark'? '#1e88e5': '#3f51b5'
            }]} onPress={onPress}>
                <FontAwesome name="picture-o" size={18} color={colorScheme === 'dark'? '#fff': '#000'} style={styles.buttonIcon}/>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}
return (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>
      );


}



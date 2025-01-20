import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";

const placeholderImage = require("../../assets/images/latest-1.jpg");

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#333' : '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      color: colorScheme === 'dark' ? '#f8f8f8' : '#333'
    },
    link: {
      marginTop: 20,
      padding: 10,
      backgroundColor: colorScheme === 'dark' ? '#1e88e5' : '#3f51b5',
      color: 'white',
      borderRadius: 5
    },
    imageContainer:{
      flex: 1,
    },
    image: {
      width: 320,
      height: 440,
      borderRadius: 14,
    }
  });

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={placeholderImage} style={styles.image} />
      </View>
      </View>
      
    </>
  );
}

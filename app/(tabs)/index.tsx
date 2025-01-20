import React from "react-native";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";

const PlaceholderImage = require("../../assets/images/latest-1.jpg");

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const colorScheme = useColorScheme();
  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    })

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      showAppOptions(true);
    }else{
      console.log('You did not select an image');
    }
  }

  const onReset = () =>{
    setSelectedImage(undefined);
    setShowAppOptions(false);
  }

  const onAddSticker = () =>{
    setModalVisible(true);
  }

  const onSaveImageAsync = () =>{
    console.log('Save image');
  }

  const onModalClose = () =>{
    setModalVisible(false);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#333' : '#f8f8f8',
      alignItems: 'center',
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
      paddingTop: 28,
      alignItems: 'center',
    },
    footerContainer:{
      flex: 1/3,
      alignItems: 'center',
    },
    optionsContainer: {
      position: 'absolute',
      bottom: 80,
    },
    optionsRow: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
         <View style={styles.optionsContainer}>
         <View style={styles.optionsRow}>
           <IconButton icon="refresh" label="Reset" onPress={onReset} />
           <CircleButton onPress={onAddSticker} />
           <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
         </View>
       </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImage} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        
      </EmojiPicker>
    </View>
  );
}

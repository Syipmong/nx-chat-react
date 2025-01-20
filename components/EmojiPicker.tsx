import React from "react";
import { Modal, Pressable, StyleSheet, View, Text } from "react-native";
import { PropsWithChildren } from 'react';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: ()=> void;
}>;

export default function EmojiPicker({isVisible, children, onClose}: Props){


    const styles = StyleSheet.create({
        modalContent: {
          height: '25%',
          width: '100%',
          backgroundColor: '#25292e',
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          position: 'absolute',
          bottom: 0,
        },
        titleContainer: {
          height: '16%',
          backgroundColor: '#464C55',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        title: {
          color: '#fff',
          fontSize: 16,
        },
      });

    return(
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose an emoji</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22} color="#fff" />
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}
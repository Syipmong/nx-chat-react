import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {

    const styles = StyleSheet.create({
        circleButtonContainer: {
          width: 84,
          height: 84,
          marginHorizontal: 60,
          borderWidth: 4,
          borderColor: '#ffd33d',
          borderRadius: 42,
          padding: 3,
        },
        circleButton: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 42,
          backgroundColor: '#fff',
        },
      });

  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color={'#ffd33d'} />
      </Pressable>
    </View>
  );
}

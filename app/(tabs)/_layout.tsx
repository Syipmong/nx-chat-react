import React from "react";
import { Stack, Tabs, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                size={24}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}

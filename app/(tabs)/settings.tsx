import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, SafeAreaView, TouchableOpacity } from 'react-native';

const SettingsPage: React.FC = () => {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);
    const [isLocationEnabled, setIsLocationEnabled] = React.useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.header}>Settings</Text>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Enable Notifications</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
                        value={isNotificationsEnabled}
                    />
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkModeEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
                        value={isDarkModeEnabled}
                    />
                </View>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Enable Location</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isLocationEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsLocationEnabled(!isLocationEnabled)}
                        value={isLocationEnabled}
                    />
                </View>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>About</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Version 1.0.0</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    contentContainer: {
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    settingText: {
        fontSize: 16,
        color: '#333',
    },
    footer: {
        padding: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    footerText: {
        color: 'gray',
    },
});

export default SettingsPage;

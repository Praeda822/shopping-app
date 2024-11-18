import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';
import MainNavigator from './navigation/MainNavigator';
import ShopNavigator from './navigation/ShopNavigator';




export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <MainNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});
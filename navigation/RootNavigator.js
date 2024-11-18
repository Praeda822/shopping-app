import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MainNavigator from './MainNavigator';
import NotFoundScreen from '../Screens/NotFoundScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
      
      <Stack.Screen
        name='Main'
        component={MainNavigator}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        screenOptions={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});
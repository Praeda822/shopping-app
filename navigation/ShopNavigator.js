import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ShopViewScreen from "../Screens/ShopViewScreen";
import ProductViewScreen from "../Screens/ProductViewScreen";
import ProductEditScreen from "../Screens/ProductEditScreen";

const Stack = createStackNavigator();

export default function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ShopView"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="ShopView"
        component={ShopViewScreen}
        screenOptions={{ headerShown: false }}
        options={{ title: "View Shop" }}
      />
      <Stack.Screen
        name="ProductView"
        component={ProductViewScreen}
        screenOptions={{ headerShown: false }}
        options={{ title: "View Products" }}
      />
      <Stack.Screen
        name="ProductEdit"
        component={ProductEditScreen}
        screenOptions={{ headerShown: false }}
        options={{ title: "Edit Products" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
const Stack=createStackNavigator();

export default function App() {
  return (
    <LoginScreen/>
  )
}

const styles = StyleSheet.create({})

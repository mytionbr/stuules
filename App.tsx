import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigation/TabNavigation';


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}


export default function App() {
  
  const [loaded] = useFonts({
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Thin": require('./assets/fonts/Roboto-Thin.ttf'),
  });

  if(!loaded){
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'Tabs'}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='Tabs'
          component={TabNavigation}  />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

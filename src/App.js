import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { AddPartyProvider } from './contexts/AddPartyContext'

import { AuthProvider } from './contexts/AuthContext'
import Navigator from './navigation/Navigator'
import { getTheme } from './theme/Theme'

const WithContext = () => {
  return (
    <AuthProvider>
      <AddPartyProvider>
        <App />
      </AddPartyProvider>
    </AuthProvider>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const theme = getTheme(isDarkMode)
  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? '#0F172A' : '#fff'
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer
        theme={navigationTheme}
      >
        <NativeBaseProvider theme={theme}>
          <Navigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default WithContext

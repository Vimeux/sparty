import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth } from '../contexts/AuthContext'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import TabBar from './TabBar'
import ProfileScreen from '../screens/ProfileSreen'
import AddParty from '../screens/AddParty'

const MainNavigator = createBottomTabNavigator()

const AuthNavigator = createNativeStackNavigator()

function AuthStack () {
  return (
    <AuthNavigator.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthNavigator.Screen name='Login' component={LoginScreen} />
      <AuthNavigator.Screen name='Register' component={RegisterScreen} />
    </AuthNavigator.Navigator>
  )
}

function MainTabNavigator () {
  return (
    <MainNavigator.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      {/* <MainNavigator.Group> */}
      <MainNavigator.Screen name='Add Party' options={{ tabBarIcon: 'add' }} component={AddParty} />
      <MainNavigator.Screen name='Home' options={{ tabBarIcon: 'home' }} component={HomeScreen} />
      <MainNavigator.Screen name='Profile' options={{ tabBarIcon: 'person' }} component={ProfileScreen} />
      {/* </MainNavigator.Group> */}
      {/* <MainNavigator.Group screenOptions={{ presentation: 'modal' }}>
        <MainNavigator.Screen name='Modal' component={AddTripModal} />
      </MainNavigator.Group>
      <MainNavigator.Group screenOptions={{ presentation: 'modal' }}>
        <MainNavigator.Screen
          name='AddCarModalScreen1'
          component={AddCarModalScreen1}
          options={{ title: 'AddCarScreen1' }}
        />
        <MainNavigator.Screen
          name='AddCarModalScreen2'
          component={AddCarModalScreen2}
          options={{ title: 'AddCarScreen2' }}
        />
        <MainNavigator.Screen
          name='AddCarModalScreen3'
          component={AddCarModalScreen3}
          options={{ title: 'AddCarScreen3' }}
        />
        <MainNavigator.Screen
          name='AddCarModalScreen4'
          component={AddCarModalScreen4}
          options={{ title: 'AddCarScreen4' }}
        />
      </MainNavigator.Group> */}
    </MainNavigator.Navigator>
  )
}

function Navigator () {
  const { state } = useAuth()

  if (state.user && state.token) {
    return (
      <MainTabNavigator />
    )
  } else {
    return (
      <AuthStack />
    )
  }
}

export default Navigator

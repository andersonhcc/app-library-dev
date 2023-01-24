import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './react-navigation';
import { SceneName } from './scene-name';

import { SignIn } from '@screens/SignIn/view';


const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerLeft: undefined, gestureEnabled: false, }}
      initialRouteName={SceneName.SignIn}
    >

      <Stack.Screen
        name={SceneName.SignIn}
        component={SignIn}
      />


    </Stack.Navigator>
  );
}
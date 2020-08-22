import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GNULinux from './screens/gnuLinux';
import archInstall from './components/archGuides/ArchInstall';
import archUEFI from './components/archGuides/archUEFI';
import dwminstall from './components/dwmInstall';
import virtualBoxInstall from './components/VirtualBoxArch';
import ventoy from './components/VentoyGuide';
import Android from './screens/Android';
import aospbuild from './components/AOSP build guide/aospbuildguide';
import compileROM from './components/AOSP build guide/compileROM';
import miscellaneous from './screens/miscellaneous';
import gitcheatsheet from './components/GitCheatSheet';
import privacy from './screens/privacy';
import web from './screens/web';
import Servers from './screens/Servers';
import archLegacy from './components/archGuides/archLegacy';
import about from './screens/about';

const Stack = createStackNavigator();

export default function spacelegion() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GnuLinux" component={GNULinux} />
        <Stack.Screen name="ArchInstall" component={archInstall} />
        <Stack.Screen name="Archuefi" component={archUEFI} />
        <Stack.Screen name="DWMInstall" component={dwminstall} />
        <Stack.Screen name="Android" component={Android} />
        <Stack.Screen
          name="ArchVirtualBoxInstall"
          component={virtualBoxInstall}
        />
        <Stack.Screen name="ventoyguide" component={ventoy} />
        <Stack.Screen name="aospbuildguide" component={aospbuild} />
        <Stack.Screen name="compileROM" component={compileROM} />
        <Stack.Screen name="miscellaneous" component={miscellaneous} />
        <Stack.Screen name="gitcheatsheet" component={gitcheatsheet} />
        <Stack.Screen name="privacy" component={privacy} />
        <Stack.Screen name="web" component={web} />
        <Stack.Screen name="Servers" component={Servers} />
        <Stack.Screen name="archlegacy" component={archLegacy} />
        <Stack.Screen name="About" component={about} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

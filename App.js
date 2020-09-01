import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import gnulinux from './screens/gnulinux';
import android from './screens/android';
import web from './screens/Web';
import privacy from './screens/Privacy';
import server from './screens/Servers';
import other from './screens/Other';
import about from './screens/About';
import archinstall from './screens/ArchInstall';
import archuefi from './screens/components/archUEFI';
import archlegacy from './screens/components/archLegacy';
import dwminstall from './screens/components/dwmInstall';
import archvbox from './screens/components/ArchVbox';
import aosp from './screens/AOSP';
import romcompile from './screens/components/romcompile';
import kernelupdate from './screens/components/kernelupdate';
import linuxbasics from './screens/components/linuxbasics';
import oracledb from './screens/components/oracleDb';
import etcher from './screens/components/etcherDroid';
import gitcheatsheet from './screens/components/gitcheat';
import ventoy from './screens/components/ventoy';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gnulinux" component={gnulinux} />
        <Stack.Screen name="Android" component={android} />
        <Stack.Screen name="Web" component={web} />
        <Stack.Screen name="Privacy" component={privacy} />
        <Stack.Screen name="Server" component={server} />
        <Stack.Screen name="Other" component={other} />
        <Stack.Screen name="About" component={about} />
        <Stack.Screen name="ArchInstall" component={archinstall} />
        <Stack.Screen name="ArchUEFI" component={archuefi} />
        <Stack.Screen name="ArchLegacy" component={archlegacy} />
        <Stack.Screen name="DWMInstall" component={dwminstall} />
        <Stack.Screen name="ArchVbox" component={archvbox} />
        <Stack.Screen name="AOSP" component={aosp} />
        <Stack.Screen name="RomCompile" component={romcompile} />
        <Stack.Screen name="KernelUpdate" component={kernelupdate} />
        <Stack.Screen name="LinuxBasics" component={linuxbasics} />
        <Stack.Screen name="OracleDB" component={oracledb} />
        <Stack.Screen name="EtcherDroid" component={etcher} />
        <Stack.Screen name="GitCheat" component={gitcheatsheet} />
        <Stack.Screen name="Ventoy" component={ventoy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

export default function archInstall({navigation}) {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text
        style={{
          color: '#00FF00',
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          fontFamily: 'monospace',
          fontWeight: 'bold',
        }}>
        Arch Linux Installation
      </Text>
      <Text></Text>
      <Text></Text>
      <Text
        style={{
          color: '#FD5901',
          fontSize: 20,
          top: 14,
          fontFamily: 'monospace',
          fontWeight: 'bold',
        }}>
        Arch Linux Installation for UEFI {'&'} LEGACY mode
      </Text>
      <Text></Text>
      <Text style={{color: '#FD5901'}}>
        ===================================================
      </Text>
      <Text></Text>
      <Text></Text>
      <Text
        style={{
          color: '#00FF00',
          fontSize: 20,
          top: 14,
          fontFamily: 'monospace',
          fontWeight: 'bold',
        }}
        onPress={() => navigation.navigate('Archuefi')}>
        =={'>'} Arch Linux UEFI Install
      </Text>
      <Text></Text>
      <Text
        style={{
          color: 'yellow',
          fontSize: 20,
          top: 14,
          fontFamily: 'monospace',
          fontWeight: 'bold',
        }}
        onPress={() => navigation.navigate('archlegacy')}>
        =={'>'} Arch Linux Legacy Install
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

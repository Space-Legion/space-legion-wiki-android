import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Link} from '@react-navigation/native';

export default function about({navigation}) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          top: 10,
          textAlign: 'center',
          color: '#FD5901',
          fontSize: 35,
          fontWeight: 'bold',
        }}>
        Space Legion
      </Text>
      <Text></Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Alpha v3.1.0 release
      </Text>
      <Text></Text>
      <Text></Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Our aim is to promote freedom respecting open source programs on all
        platforms, Thus reducing your chance of depending the "system" in almost
        every way possible, This app is intended to promote the goal of making
        everything beginner friendly, for eg- doing so called "complicated"
        stuff in the simplest way possible.
      </Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.text}>Lead Devoloper</Text>
      <Text style={{color: 'white', left: 10}}>=================</Text>
      <Text
        style={styles.name}
        onPress={() => Linking.openURL('https://github.com/sarosx')}>
        Sarosx
      </Text>
      <Text></Text>
      <Text style={styles.text}>Lead Designer, Maintainer</Text>
      <Text style={{color: 'white', left: 10}}>
        ===============================
      </Text>
      <Text
        style={styles.name2}
        onPress={() => Linking.openURL('https://github.com/nebulaxyz')}>
        nebula
      </Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.text}>Visit out Official webpage</Text>
      <Text style={{color: 'white'}}>==================================</Text>
      <Text
        style={{
          left: 10,
          color: 'purple',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          fontSize: 16,
        }}
        onPress={() => Linking.openURL('https://space-legion.github.io/')}>
        space-legion.github.io
      </Text>
      <Text></Text>
      <Text
        style={styles.git}
        onPress={() =>
          Linking.openURL(
            'https://github.com/Space-Legion/space-legion-wiki-android',
          )
        }>
        View Source on Github
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  text: {
    left: 10,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 16,
  },

  name: {
    color: '#FD5901',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 16,
    left: 10,
  },

  name2: {
    color: '#2EFE2E',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 16,
    left: 10,
  },

  git: {
    left: 10,
    color: 'red',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

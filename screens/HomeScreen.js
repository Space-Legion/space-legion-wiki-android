import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeScreen({navigation}) {
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
      <Text></Text>
      <TouchableOpacity style={styles.customButton}>
        <Text style={styles.customButtonText}>Take back your freedom</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text style={styles.text}>Our Guides</Text>
      <Text></Text>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Last Updated: 22/07/2020</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.contentLeftButton}>
        <Text
          style={styles.contentButtonText}
          onPress={() => navigation.navigate('GnuLinux')}>
          GNU/Linux
        </Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity
        style={styles.contentLeftButton}
        onPress={() => navigation.navigate('web')}>
        <Text style={styles.contentButtonText}>Web</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity
        style={styles.contentLeftButton}
        onPress={() => navigation.navigate('miscellaneous')}>
        <Text style={styles.contentButtonText}>Miscellaneous</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity
        style={styles.contentRightButton}
        onPress={() => navigation.navigate('Android')}>
        <Text style={styles.contentButtonText}>Android</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity
        style={styles.contentRightButton}
        onPress={() => navigation.navigate('privacy')}>
        <Text style={styles.contentButtonText}>Privacy</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity
        style={styles.contentRightButton}
        onPress={() => navigation.navigate('Servers')}>
        <Text style={styles.contentButtonText}>Servers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.aboutButtonText}>About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  customButton: {
    alignItems: 'center',
    backgroundColor: '#2C2B2B',
    padding: 10,
    marginHorizontal: 100,
    borderRadius: 5,
  },

  customButtonText: {
    fontSize: 15,
    color: '#FD5901',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  text: {
    fontSize: 28,
    color: '#FD5901',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  updateButton: {
    alignItems: 'center',
    backgroundColor: '#2C2B2B',
    padding: 10,
    marginHorizontal: 70,
    borderRadius: 8,
    height: 40,
  },

  updateButtonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    bottom: 3,
  },

  contentLeftButton: {
    backgroundColor: '#2C2B2B',
    padding: 10,
    top: 70,
    width: 150,
    borderRadius: 5,
  },

  contentRightButton: {
    backgroundColor: '#2C2B2B',
    padding: 10,
    width: 150,
    marginLeft: 245,
    bottom: 178,
    borderRadius: 5,
  },

  contentButtonText: {
    fontSize: 18,
    color: '#FD5901',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  aboutButton: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    marginHorizontal: 100,
    bottom: 100,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
  },

  aboutButtonText: {
    fontSize: 18,
    color: '#FD5901',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

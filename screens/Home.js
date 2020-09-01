import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: '#FD5901',
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
          }}>
          Space Legion
        </Text>
        <TouchableOpacity
          style={{
            top: 20,
            backgroundColor: '#2C2B2B',
            width: 250,
            height: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              top: 5,
              color: '#FD5901',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Take back your freedom
          </Text>
        </TouchableOpacity>
        <Text
          style={{top: 30, color: '#FD5901', fontWeight: 'bold', fontSize: 25}}>
          Our Guides
        </Text>
      </View>
      <View style={{top: 50, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#2C2B2B',
            width: 250,
            height: 30,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', top: 5}}>
            Last Updated: 2/09/2020
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{top: 110}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Gnulinux')}>
            <Text style={styles.text}>GNU/Linux</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Android')}>
            <Text style={styles.text}>Android</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            top: 35,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Web')}>
            <Text style={styles.text}>Web</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Privacy')}>
            <Text style={styles.text}>Privacy</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            top: 70,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Server')}>
            <Text style={styles.text}>Servers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Other')}>
            <Text style={styles.text}>Other</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{top: 120, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('About')}>
            <Text style={styles.text}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  button: {
    backgroundColor: '#2C2B2B',
    width: 110,
    height: 50,
    borderRadius: 5,
  },

  text: {
    top: 12,
    color: '#FD5901',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

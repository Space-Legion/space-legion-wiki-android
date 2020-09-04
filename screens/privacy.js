import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function privacy({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: '#FD5901',
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
            fontFamily: 'monospace',
          }}>
          Privacy
        </Text>
      </View>
      <View
        style={{
          top: 25,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('androidprivacy')}>
          <Text style={styles.text}>Android Privacy Guide</Text>
          <Text style={styles.date}>Last updated: 02/09/2020</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  button: {
    backgroundColor: 'black',
    borderRadius: 8,
    borderWidth: 5,
    borderColor: '#2C2B2B',
    width: 300,
    height: 60,
  },

  text: {
    top: 8,
    textAlign: 'center',
    color: '#43F701',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'monospace',
  },

  date: {
    textAlign: 'right',
    top: 7,
    color: '#FD5901',
    fontFamily: 'monospace',
  },
});

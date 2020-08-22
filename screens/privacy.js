import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function privacy({navigation}) {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text
        style={{
          color: '#FD5901',
          fontWeight: 'bold',
          fontSize: 30,
          textAlign: 'center',
          fontFamily: 'monospace',
          fontWeight: 'bold',
        }}>
        Privacy
      </Text>
      <Text></Text>
      <Text></Text>
      <TouchableOpacity
        style={styles.archButton}
        onPress={() =>
          Linking.openURL(
            'https://github.com/nebulaxyz/android-privacy-guide-2020',
          )
        }>
        <Text style={styles.archButtonText}>Android Privacy Guide</Text>
        <Text style={styles.updateButton}>Last Updated: 22/08/2020</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  archButton: {
    backgroundColor: 'black',
    width: 350,
    height: 70,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: '#3E3E3D',
    borderWidth: 5,
  },

  archButtonText: {
    color: '#00FF00',
    textAlign: 'center',
    fontSize: 18,
    top: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  updateButton: {
    color: '#FD5901',
    fontWeight: 'bold',
    top: 17,
    marginLeft: 170,
  },
});

import React from 'react';
import {View, Text, ScrollView, StyleSheet, Linking} from 'react-native';

function archvbox() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text
          style={{
            color: '#FD5901',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'monospace',
          }}>
          Virtual-Box Install Arch
        </Text>
        <Text></Text>
        <Text style={styles.guide}>sudo pacman -S virtualbox</Text>
        <Text></Text>
        <Text style={styles.guide}>
          And select the package virtualbox-host-modules-arch, ie option 2 while
          installing
        </Text>
        <Text></Text>
        <Text style={styles.guide}>sudo modprobe vboxdrv</Text>
        <Text></Text>
        <Text style={styles.guide}>
          sudo nano /etc/modules-load.d/virtualbox.conf (type vboxdrv then save
          and exit, So we don't have to start it manually )
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          yay virtualbox-ext-oracle (or go to virtualbox's and download the
          extension pack https://www.virtualbox.org/wiki/Downloads)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          sudo gpasswd -a $USER vboxusers (This is necessary in order to fully
          access the features provided by VirtualBox, including the ability to
          use USB devices in a Guest operating system.)
        </Text>
        <Text></Text>
        <Text
          style={{color: 'yellow', fontSize: 20, fontWeight: 'bold'}}
          onPress={() => Linking.openURL('https://github.com/nebulaxyz')}>
          By Nebulaxyz
        </Text>
      </View>
    </ScrollView>
  );
}

export default archvbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  guide: {
    top: 1,
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },

  commandbg: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'grey',
    height: 30,
    width: 200,
    borderRadius: 3,
  },
});

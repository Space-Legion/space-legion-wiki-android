import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
function ventoy() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              color: '#FD5901',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'monospace',
            }}>
            Ventoy Setup Guide
          </Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.guide}># 1 Format your pendrive.</Text>
          <Text></Text>
          <Text style={styles.guide}>
            # 2 Download latest release of Ventoy from here.
          </Text>
          <Text></Text>
          <Text style={styles.guide}>
            # 3 Download ventoy tar.gz file for linux.
          </Text>
          <Text></Text>
          <Text style={styles.guide}>
            # 4 Now extract the zip and open up terminal.
          </Text>
          <Text></Text>
          <Text style={styles.guide}>
            # 5 ls (to view all the files in a directory)
          </Text>
          <Text></Text>
          <Text style={styles.guide}># 6 lsblk (To find your disk name )</Text>
          <Text></Text>
          <Text style={styles.guide}>
            # 7 chmod +x Ventoy2Disk.sh (makes the file executable)
          </Text>
          <Text></Text>
          <Text style={styles.guide}>
            # 8 sudo ./Ventoy2Disk.sh (To run the file)
          </Text>
          <Text></Text>
          <Text style={styles.guide}>
            # 9 sudo ./Ventoy2Disk.sh -i /dev/sdX (Example: sudo
            ./Ventoy2Disk.sh -i /dev/sda)
          </Text>
          <Text></Text>
          <Text style={styles.guide}>It takes less than 30s.</Text>
          <Text></Text>
          <Text style={styles.guide}>
            If that doesnt help dimount the pendrive and try it again
          </Text>
          <Text></Text>
          <Text style={styles.guide}>
            Now copy the ISO files to the pendrive.
          </Text>
          <Text></Text>
          <Text
            style={{color: '#44F803', fontSize: 22, fontFamily: 'monospace'}}
            onPress={() => Linking.openURL('https://github.com/sarosx')}>
            By SarosX
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default ventoy;

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
});

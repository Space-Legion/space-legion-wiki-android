import React from 'react';
import {View, Text, StyleSheet, ScrollView, Linking} from 'react-native';

export default function gitcheatsheet() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.head}>Git CheatSheet</Text>
        <Text></Text>
        <Text style={styles.guide}># 1 Install git</Text>
        <Text></Text>
        <Text style={styles.guide}>Debian/Ubuntu- sudo apt install git</Text>
        <Text></Text>
        <Text style={styles.guide}>Arch- sudo pacman -S git</Text>
        <Text></Text>
        <Text style={styles.guide}>Fedora22- sudo dnf -y install git</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Gentoo- emerge --ask --verbose dev-vcs/git
        </Text>
        <Text></Text>
        <Text style={styles.guide}>FreeBSD- pkg install git</Text>
        <Text></Text>
        <Text style={styles.guide}>OpenBSD- pkg_add git</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Solaris 11- pkg install developer/versioning/git
        </Text>
        <Text></Text>
        <Text style={styles.guide}>NixOS- nix-env -i git</Text>
        <Text></Text>
        <Text style={styles.guide}>openSUSE- zypper install git</Text>
        <Text></Text>
        <Text style={styles.guide}>RHEL, CentOS- yum install git</Text>
        <Text></Text>
        <Text style={styles.guide}>Solus- sudo eopkg install git</Text>
        <Text></Text>
        <Text>===================================================</Text>
        <Text></Text>
        <Text style={styles.guide}>Check git version using git --version</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # 2 Create and git initialize a directory
        </Text>
        <Text></Text>
        <Text style={styles.guide}>mkdir sample (creating a folder)</Text>
        <Text></Text>
        <Text style={styles.guide}>cd sample (moving to the directory)</Text>
        <Text></Text>
        <Text style={styles.guide}>
          git init (git initialize the directory)
        </Text>
        <Text></Text>
        <Text style={styles.guide}># 3 Configure git</Text>
        <Text></Text>
        <Text style={styles.guide}>
          git config --global user.name (username)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          git config --global user.email (user email)
        </Text>
        <Text></Text>
        <Text style={styles.guide}># 4 Create a file</Text>
        <Text></Text>
        <Text style={styles.guide}>
          touch sample.html (creating an html sample file)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>touch sample.py</Text>
        <Text></Text>
        <Text style={styles.guide}>touch main.js</Text>
        <Text></Text>
        <Text style={styles.guide}>touch index.html</Text>
        <Text></Text>
        <Text style={styles.guide}># 5 Add a file </Text>
        <Text></Text>
        <Text style={styles.guide}>git add sample.html</Text>
        <Text></Text>
        <Text style={styles.guide}># 6 Add all file in the directory</Text>
        <Text></Text>
        <Text style={styles.guide}>git add . (Add all the files)</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # 7 Add all files which has the same extension
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          git add *.html (It wil add all the .html)
        </Text>
        <Text></Text>
        <Text style={styles.guide}># 8 View current git status</Text>
        <Text></Text>
        <Text style={styles.guide}>git status</Text>
        <Text></Text>
        <Text style={styles.guide}># 9 Remove a file</Text>
        <Text></Text>
        <Text style={styles.guide}>
          git rm --cached index.html (removes index.html file)
        </Text>
        <Text></Text>
        <Text style={styles.guide}># 10 Commit all files</Text>
        <Text></Text>
        <Text style={styles.guide}>git commit</Text>
        <Text></Text>
        <Text style={styles.guide}># 11 Commit directly to master branch</Text>
        <Text></Text>
        <Text style={styles.guide}>git commit -m "your changelog"</Text>
        <Text></Text>
        <Text style={styles.guide}># 12 Create a branch</Text>
        <Text></Text>
        <Text style={styles.guide}>git branch sample</Text>
        <Text></Text>
        <Text style={styles.guide}># 13 Switch between branches</Text>
        <Text></Text>
        <Text style={styles.guide}>git checkout sample</Text>
        <Text></Text>
        <Text style={styles.guide}># 14 Merge branches</Text>
        <Text></Text>
        <Text style={styles.guide}>git merge sample</Text>
        <Text></Text>
        <Text style={styles.guide}># 15 Add remote url</Text>
        <Text></Text>
        <Text style={styles.guide}>git remote add origin (repo url)</Text>
        <Text></Text>
        <Text style={styles.guide}># 16 View repo</Text>
        <Text></Text>
        <Text style={styles.guide}>git remote</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # 17 Push all the files to git repository
        </Text>
        <Text></Text>
        <Text style={styles.guide}>git push -u origin master</Text>
        <Text></Text>
        <Text style={styles.guide}># 18 To pull a file</Text>
        <Text></Text>
        <Text style={styles.guide}>git pull (repo url)</Text>
        <Text></Text>
        <Text style={styles.guide}># 19 Remove all files from git repo</Text>
        <Text></Text>
        <Text style={styles.guide}>git rm -f *</Text>
        <Text></Text>
        <Text style={styles.guide}> # 20 To clone any git repo</Text>
        <Text></Text>
        <Text style={styles.guide}>git clone (url)</Text>
        <Text></Text>
        <Text
          style={{color: 'green', fontSize: 22, fontFamily: 'monospace'}}
          onPress={() => Linking.openURL('https://github.com/sarosx')}>
          By SarosX
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  head: {
    color: '#FD5901',
    fontSize: 20,
    fontFamily: 'monospace',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  guide: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});

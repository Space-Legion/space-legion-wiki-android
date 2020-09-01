import React from 'react';
import {View, Text, ScrollView, StyleSheet, Linking} from 'react-native';

function dwminstall() {
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
          DWM Installation Guide
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          1 Complete arch linux base installation and also install your Gpu
          drivers{' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          2 # sudo pacman -S xorg-server xorg-xinit xorg-xsetroot xorg-xrandr
          firefox/chromium nitrogen picom dmenu nano
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          (basic display server, web browser, nitrogen- for wallpaper, picom-
          compositor dmenu- quick access menu, xrandr- setting display
          resolution)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          3 # cp /etc/X11/xinit/xinitrc .xinitrc (copies xinitrc for lauching WM
          and starting other daemon process)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          4 # nano .xinitrc (clear the last five lines)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>setxkbmap en {'&'} </Text>
        <Text style={styles.guide}>picom -f {'&'} </Text>
        <Text style={styles.guide}>exec dwm</Text>
        <Text></Text>
        <Text style={styles.guide}>Add this, then save and exit nano</Text>
        <Text></Text>
        <Text style={styles.guide}>
          5 # sudo pacman -S wget (retrieves content from web servers){' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          6 # wget https://dl.suckless.org/dwm/dwm-6.2.tar.gz
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          (This downloads dwm from suckless's website. If the url is broken,
          visit suckless for upstream https://dwm.suckless.org/)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          7 # tar -xzvf dwm-6.2.tar.gz (This extracts dwm tar file)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>8 # cd dwm-6.2</Text>
        <Text></Text>
        <Text style={styles.guide}>
          9 # sudo make clean install (This will compile and install dwm)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          10 # sudo pacman -S xfce4-terminal (Installs xfce4 terminal)
        </Text>
        <Text style={styles.guide}>11 # nano config.def.h</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Replace "st" with xfce4-terminal in following line "static const char
          *termcmd[ ]= ....'xfce4-terminal'..NULL then, save and exit nano{' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>12 # rm config.h</Text>
        <Text></Text>
        <Text style={styles.guide}>Type yes for removing the file</Text>
        <Text></Text>
        <Text style={styles.guide}>13 # sudo make clean install</Text>
        <Text></Text>
        <Text style={styles.guide}>14 # reboot</Text>
        <Text></Text>
        <Text style={styles.guide}>15 # sudo nano /etc/xdg/picom.conf</Text>
        <Text></Text>
        <Text style={styles.guide}>
          comment out vsync true;, ie # vsync true; (Only do this if you are in
          a Virtual Machine) then save and exit nano
        </Text>
        <Text></Text>
        <Text style={styles.guide}>16 # reboot</Text>
        <Text></Text>
        <Text style={styles.guide}>17 # startx</Text>
        <Text></Text>
        <Text style={styles.guide}>18 # nano .xinitrc</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Add this command after the setxkbmap line{' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          xrandr --output "your display name" --mode "your resolution" {'&'}{' '}
          (Only do this if you are in a Virtual Machine)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          To get your display name type xrandr in terminal
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          Example:- # xrandr --output DisplayPort-0 --mode 1920x1080 {'&'}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>save and exit nano</Text>
        <Text></Text>
        <Text style={styles.guide}>19 # reboot</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Alt + P , this opens dmenu. search nitrogen and open it {'>'} add a
          folder for the wallpaper directory and select an image and apply ( you
          can choose automatic, scaled zoom etc optional)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>20 # nano .xinitrc</Text>
        <Text></Text>
        <Text style={styles.guide}>Add a line new after picom</Text>
        <Text></Text>
        <Text style={styles.guide}>nitrogen --restore {'&'}</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Enter the following lines after the nitrogen's line
        </Text>
        <Text></Text>
        <Text style={styles.guide}>while true; do</Text>
        <Text style={styles.guide}>
          dwm {'>'}/dev/null 2{'>&'}1
        </Text>
        <Text style={styles.guide}>done</Text>
        <Text></Text>
        <Text style={styles.guide}>This command will start a while loop.</Text>
        <Text></Text>
        <Text style={styles.guide}>save and exit nano</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Press Alt+shift+Q to exit and startx and then again alt+shift+q to
          test this
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          21 # sudo pacman -S pulseaudio pamixer pavucontrol
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          open terminal and type pavucontrol to launch audio manager and to
          control other audio input or output devices
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

export default dwminstall;

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

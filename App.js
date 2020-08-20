import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Linking,
} from 'react-native';
import {NavigationContainer, Link} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {color} from 'react-native-reanimated';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text style={{fontSize: 30, left: 105}}>Space Legion</Text>
      <Text></Text>
      <Text style={{fontSize: 20}}>What is SpaceLegion?</Text>
      <Text style={{fontSize: 15}}>
        Space Legion wiki is an open source android app which consists the Space
        wiki, More info can be found at Space Legion wiki
      </Text>
      <Text></Text>
      <Text style={{fontSize: 20}}>Guides</Text>
      <Text></Text>
      <Button
        title="Android Privacy Guide"
        onPress={() =>
          Linking.openURL(
            'https://github.com/nebulaxyz/android-privacy-guide-2020',
          )
        }
      />
      <Text></Text>
      <Button
        title="Arch Linux Install"
        onPress={() => navigation.navigate('ArchInstall')}
      />
      <Text></Text>
      <Button
        title="DWM Install Guide"
        onPress={() => navigation.navigate('DWMInstall')}
      />
      <Text></Text>
      <Button
        title="Ventoy USB Guide"
        onPress={() => navigation.navigate('VentoyInstall')}
      />
      <Text></Text>
      <Button
        title="Git CheatSheet"
        onPress={() => navigation.navigate('Git CheatSheet')}
      />
      <Text></Text>
      <Button
        title="Ventoy Install- Arch Linux"
        onPress={() => navigation.navigate('VirtualBox Install')}
      />
      <Text></Text>
      <Button
        title="Flash Linux ISO on Android"
        onPress={() => navigation.navigate('Flash Linux ISO on Android')}
      />
    </View>
  );
}

function AndroidPrivacyGuide() {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}

function ArchInstall({navigation}) {
  return (
    <View>
      <Button
        title="Arch Linux UEFI Install"
        onPress={() => navigation.navigate('Arch Linux (UEFI)')}
      />
      <Text></Text>
      <Button
        title="Arch Linux BIOS Install"
        onPress={() => navigation.navigate('Arch Linux (BIOS)')}
      />
    </View>
  );
}

function ArchUEFI({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Text style={styles.head}>SpaceLegion.wiki</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.text}>Arch Linux Install (UEFI)</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>After booting into Arch iso</Text>
        <Text style={styles.guide}>
          1 # ping stallman.org (to check internet connectivity)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          2 # lsblk (to list all partitions with drives)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          3 # cfdisk /dev/sda (your hardisk name)
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For a basic partition.</Text>
        <Text style={styles.guide}>=====================</Text>
        <Text style={styles.guide}>
          "EFI System partition (/dev/sda1) with 512M size, FAT32 formatted.
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          Root partition (/dev/sda2) with at least 20G size or rest of HDD
          space, ext4 formatted.
        </Text>
        <Text></Text>
        <Text style={styles.guide}>Home directory is optional"</Text>
        <Text></Text>
        <Text style={styles.guide}>
          * Select new type the partition size in MB (512M) and press enter key,
          select Type from the bottom menu and choose EFI
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          * For /(root) partition use the following configuration: New -{'>'}{' '}
          Size: rest of free space -{'>'} Type Linux filesystem.
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          Then select Write, answer with yes in order to apply disk changes and
          then Quit the utility
        </Text>
        <Text></Text>
        <Text style={styles.guide}>Type lsblk to review your changes.</Text>
        <Text></Text>
        <Text style={styles.guide}>
          4 # mkfs.fat -F32 /dev/sda1 (creates a FAT32 file system for EFI
          System partition)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          5 # mkfs.ext4 /dev/sda2 (create the EXT4 file system for the root
          partition)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>--------------------------------</Text>
        <Text></Text>
        <Text style={styles.guide}># mkfs.ext4 /dev/sdX</Text>
        <Text></Text>
        <Text style={styles.guide}># mkdir /mnt/home </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # mount /dev/sdX /mnt/home)- optional, if you need home partition
        </Text>
        <Text></Text>
        <Text style={styles.guide}>--------------------------------</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Installing Arch Linux</Text>
        <Text style={styles.guide}>=====================</Text>
        <Text></Text>
        <Text style={styles.guide}>
          6 # mount /dev/sda2 /mnt (In order to install Arch Linux, the /(root)
          partition must be mounted to /mnt directory mount point)
        </Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -Sy (to sync)</Text>
        <Text></Text>
        <Text style={styles.guide}>
          7 # pacstrap /mnt base base-devel linux linux-firmware nano (installs
          base system, base development tools, linux kernel, firmware, cli
          editor){' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          8 # genfstab -U -p /mnt {'>'}
          {'>'} /mnt/etc/fstab (generates fstab file for your new Arch Linux
          system)
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Arch Linux System configuration</Text>
        <Text style={styles.guide}>===============================</Text>
        <Text></Text>
        <Text style={styles.guide}>
          9 # arch-chroot /mnt (chroots into /mnt the system path)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          10 # pacman -S nano (installs nano cli editor)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # nano /etc/locale.gen (Configuring your system Language. Choose and
          uncomment your preferred encoding languages from /etc/locale.gen) In
          this scenario- "en_US.UTF-8 UTF-8" "en_US ISO-8859-1"
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # locale-gen (Generates your system language layout)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # nano /etc/locale.conf (type "LANG=en_US.UTF-8" then save and exit)
          (This assigns english as default language)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime (configure
          your region and city, This is an example)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # hwclock --systohc --utc (configure the hardware clock to use UTC,
          the hardware clock is usually set to the local time)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          11 # passwd (create a password for root user)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # useradd -mG wheel "username" (creates a user account with sudo
          permissions)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # passwd "username" (create a password for user account)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # EDITOR=nano visudo (adding user account to sudoers group)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          uncomment "%wheel ALL=(ALL) ALL" Then save and exit{' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          12 # pacman -S grub efibootmgr (installs grub bootloader for UEFI
          systems)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          13 # mkdir /boot/EFI (making directory for EFI installation){' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          14 # mount /dev/sda1 /boot/EFI #Mount FAT32 EFI partition (mounting
          for installation)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          15 # grub-install --target=x86_64-efi --bootloader-id=grub_uefi
          --recheck (installs grub)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          16 # grub-mkconfig -o /boot/grub/grub.cfg (creating GRUB configuration
          file)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          17 # pacman -S networkmanager (package for internet connectivity)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          18 # systemctl enable NetworkManager (enabling it from boot itself)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          19 # nano /etc/hostname (type a name for your host, eg: Archlinux)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>20 # exit (exiting chroot environment)</Text>
        <Text></Text>
        <Text style={styles.guide}>
          21 # umount -R /mnt (This will unmount drives)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>22 # reboot</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>The base installation has finished</Text>
        <Text style={styles.guide}>********************************</Text>
        <Text></Text>
        <Text style={styles.guide}>Setting up your desktop</Text>
        <Text style={styles.guide}>=======================</Text>
        <Text></Text>
        <Text style={styles.guide}>
          If you're installing Arch in VirtualBox you should install the
          VirtualBox Guest Additions. The VirtualBox Guest Additions contain the
          video drivers, You can install the guest additions from the Arch
          repositories
        </Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S linux-headers</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S virtualbox-guest-utils</Text>
        <Text></Text>
        <Text style={styles.guide}># systemctl enable vboxservice</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For AMD GPU</Text>
        <Text style={styles.guide}>===========</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S xf86-video-amdgpu</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # pacman -Sxf86-video-ati (older cards only)
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For Intel</Text>
        <Text style={styles.guide}>=========</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # pacman -S xf86-video-intel (Warning, If you are planning to install
          cinnamon destop environment, skip this driver install)
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For Nvidia</Text>
        <Text style={styles.guide}>==========</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S xf86-video-nouveau</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # pacman -S nvidia (This is a properietary driver)
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Installing a desktop environment</Text>
        <Text style={styles.guide}>================================</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Listed below are most of the popular desktop environments and their
          associated packages. Pick the one you like and install it!
        </Text>
        <Text></Text>
        <Text style={styles.guide}>* XFCE- xfce4 xfce4-goodies</Text>
        <Text></Text>
        <Text style={styles.guide}>* GNOME- gnome gnome-extra</Text>
        <Text></Text>
        <Text style={styles.guide}>* KDE- plasma kde-applications</Text>
        <Text></Text>
        <Text style={styles.guide}>* Cinnamon- cinnamon</Text>
        <Text></Text>
        <Text style={styles.guide}>* MATE- mate mate-extra</Text>
        <Text></Text>
        <Text style={styles.guide}>* LXDE- lxde</Text>
        <Text></Text>
        <Text style={styles.guide}>* LXQt- lxqt</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Note:- For the GTK-based desktops (XFCE, GNOME, Cinnamon, MATE and
          LXDE), you'll want to install gvfs alongside the desktop to get
          wastebasket and mounting support for regular users. Install gvfs-mtp
          as well if you're planning to connect your Android phone.{' '}
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Cinnamon as an example:</Text>
        <Text style={styles.guide}>=======================</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # pacman -S cinnamon gvfs gvfs-mtp gnome-terminal gnome-screenshot
          blueberry{' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          (terminal for linux terminal emulator, screenshot for there purpose,
          blueberry for bluetooth adapter)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          Installing and setting up a Display Manager
        </Text>
        <Text style={styles.guide}>================================</Text>
        <Text></Text>
        <Text style={styles.guide}>XFCE- lightdm gdm</Text>
        <Text></Text>
        <Text style={styles.guide}>GNOME- gdm lightdm</Text>
        <Text></Text>
        <Text style={styles.guide}>KDE- sddm</Text>
        <Text></Text>
        <Text style={styles.guide}>LXDE- lightdm</Text>
        <Text></Text>
        <Text style={styles.guide}>LXQt- sddm</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>LightDM as an example:</Text>
        <Text style={styles.guide}>=====================</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S lightdm</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # pacman -S lightdm-gtk-greeter lightdm-gtk-greeter-settings
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>To enable it from boot</Text>
        <Text style={styles.guide}>======================</Text>
        <Text></Text>
        <Text style={styles.guide}># systemctl enable lightdm</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For Audio</Text>
        <Text style={styles.guide}>=========</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Pulseaudio is recommended. To install:-
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # pacman -S pulseaudio pulseaudio-alsa pavucontrol
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Recommended Common Packages</Text>
        <Text style={styles.guide}>===========================</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # pacman -S ntfs-3g git celluloid vlc rhythmbox feh xed chromium
          firefox
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          (ntfs-3g- support for ntfs drives, git- git tools, celluloid- video
          player, Vlc- video player, rhythmbox- muisc player, feh- image viewer,
          xed- text editor, chromium & firefox - browsers)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>24 # reboot </Text>
        <Text></Text>
        <Text style={styles.guide}>
          Extras:- If your mirrors are slow you can change it by using the
          following command, reflector package is required.
        </Text>
        <Text></Text>
        <Text style={styles.guide}>================================</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S reflector</Text>
        <Text></Text>
        <Text style={styles.guide}>
          # reflector --verbose --latest 50 --sort rate --save
          /etc/spacman.d/mirrorlist (Add all mirrors generated from the arch
          linux official website.){' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          https://www.archlinux.org/mirrorlist/all/
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          # reflector --verbose --country 'Canada' -l 5 --sort rate --save
          /etc/pacman.d/mirrorlist
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          Retrieves top five mirrors of Canada according to the download rate,
          and save them to the mirrorlist file.
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          Extras:- opening tty- Alt+control+F2, closing tty- Alt+control+F7
        </Text>
        <Text style={styles.guide}>================================</Text>
        <Text></Text>
        <Text style={styles.guide}>
          Bonus:- Cinnamon DE recommendations - lightdm-slick-greeter
          lightdm-settings (edit it from /etc/lightdm/lightdm.conf,modify value
          of greeter-session) (from yay), arc-gtk-themes papirus-icon-theme
          (pacman)
        </Text>
        <Text></Text>
        <Text></Text>
        <Text
          style={{color: 'green', fontSize: 22, fontFamily: 'monospace'}}
          onPress={() => Linking.openURL('https://github.com/nebulaxyz')}>
          By Nebulaxyz
        </Text>
      </View>
    </ScrollView>
  );
}

function ArchBios({navigation}) {
  return (
    <View style={{alignItems: 'center', top: 300}}>
      <Text style={{fontSize: 25}}>ComingSoon!!</Text>
    </View>
  );
}

function DwmInstall() {
  return (
    <View style={{alignItems: 'center', top: 300}}>
      <Text style={{fontSize: 25}}>ComingSoon!!</Text>
    </View>
  );
}

function VentoyInstall() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.head}>SpaceLegion.wiki</Text>
        <Text></Text>
        <Text style={styles.text}>Ventoy Setup</Text>
        <Text></Text>
        <Text style={styles.guide}># 1 Format your pendrive</Text>
        <Text></Text>
        <Text
          style={styles.guide}
          onPress={() =>
            Linking.openURL('https://github.com/ventoy/Ventoy/releases')
          }>
          # 2 Download latest release of Ventoy from here
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
        <Text style={styles.guide}>It takes less than 30s.</Text>
        <Text></Text>
        <Text style={styles.guide}>
          If that doesnt help dimount the pendrive and try it again{' '}
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          Now copy the ISO files to the pendrive.
        </Text>
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

function GitCheatSheet() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.head}>SpaceLegion.wiki</Text>
        <Text></Text>
        <Text style={styles.text}>Git CheatSheet</Text>
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
          git config --gloabl user.name (username)
        </Text>
        <Text></Text>
        <Text style={styles.guide}>
          git config --gloabl user.email (user email)
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

function VirtualBoxInstall() {
  return (
    <View style={{alignItems: 'center', top: 300}}>
      <Text style={{fontSize: 25}}>ComingSoon!!</Text>
    </View>
  );
}

function etcherdroid() {
  return (
    <View style={{alignItems: 'center', top: 300}}>
      <Text style={{fontSize: 25}}>ComingSoon!!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ArchInstall" component={ArchInstall} />
        <Stack.Screen name="DWMInstall" component={DwmInstall} />
        <Stack.Screen name="VentoyInstall" component={VentoyInstall} />
        <Stack.Screen name="Arch Linux (UEFI)" component={ArchUEFI} />
        <Stack.Screen name="Arch Linux (BIOS)" component={ArchBios} />
        <Stack.Screen name="Git CheatSheet" component={GitCheatSheet} />
        <Stack.Screen name="VirtualBox Install" component={VirtualBoxInstall} />
        <Stack.Screen
          name="Flash Linux ISO on Android"
          component={etcherdroid}
        />
        <Stack.Screen
          name="Android Privacy Guide"
          component={AndroidPrivacyGuide}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  head: {
    color: 'blue',
    fontSize: 28,
    fontFamily: 'monospace',
    alignItems: 'center',
  },

  text: {
    fontSize: 22,
    color: 'green',
    fontFamily: 'monospace',
  },
  guide: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'monospace',
  },
});

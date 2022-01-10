import React from 'react';
import {
   View,
   Text,
   ImageBackground,
   Image,
   TouchableOpacity,
} from 'react-native';
import {
   DrawerContentScrollView,
   DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './CustomDrawer.styles';

const CustomDrawer = (props: any) => {
   return (
      <>
         <View style={styles.menuTop}>
            <DrawerContentScrollView
               {...props}
               contentContainerStyle={styles.container}
            >
               <ImageBackground
                  source={require('../../../assets/img/menu-bg.jpeg')}
                  style={styles.imageBackground}
               >
                  <Image
                     source={require('../../../assets/img/user-profile.jpg')}
                     style={styles.imageUser}
                  />
                  <Text style={styles.primaryText}>Jorge Cruz</Text>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.secondaryText}>React Developer</Text>
                     <FontAwesome5 name="coins" size={14} color="#fff" />
                  </View>
               </ImageBackground>
               <View style={styles.menuOptions}>
                  <DrawerItemList {...props} />
               </View>
            </DrawerContentScrollView>
            <View style={styles.menuBottom}>
               <TouchableOpacity
                  onPress={() => {}}
                  style={styles.sectionBottom}
               >
                  <View style={styles.viewBottom}>
                     <Ionicons name="share-social-outline" size={22} />
                     <Text style={styles.textBottom}>Tell a friend</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {}}
                  style={styles.sectionBottom}
               >
                  <View style={styles.viewBottom}>
                     <Ionicons name="exit-outline" size={22} style={{ color:'red' }} />
                     <Text style={styles.textBottomRed}>Sign Out</Text>
                  </View>
               </TouchableOpacity>
            </View>
         </View>
      </>
   );
};

export default CustomDrawer;

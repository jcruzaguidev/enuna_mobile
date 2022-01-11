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
import { COLORS, SIZES, images } from '../../constants';

const CustomDrawer = (props: any) => {
   return (
      <>
         <View style={styles.menuTop}>
            <DrawerContentScrollView
               {...props}
               contentContainerStyle={styles.container}
            >
               <ImageBackground
                  source={require(images.menuBackground)}
                  style={styles.imageBackground}
               >
                  <Image
                     source={require(images.userProfile)}
                     style={styles.imageUser}
                  />
                  <Text style={styles.primaryText}>Jorge Cruz</Text>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.secondaryText}>React Developer</Text>
                     <FontAwesome5 name="coins" size={ SIZES.h4 } color={ COLORS.white } />
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
                     <Ionicons name="share-social-outline" size={ SIZES.h2 } />
                     <Text style={styles.textBottom}>Tell a friend</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {}}
                  style={styles.sectionBottom}
               >
                  <View style={styles.viewBottom}>
                     <Ionicons name="exit-outline" size={ SIZES.h2 } style={{ color:COLORS.red }} />
                     <Text style={styles.textBottomRed}>Sign Out</Text>
                  </View>
               </TouchableOpacity>
            </View>
         </View>
      </>
   );
};

export default CustomDrawer;

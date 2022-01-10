import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../components';
import {HomeStack, SettingsStack} from './stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';

const Drawer = createDrawerNavigator();

const Navigations = () => {
   return (
      <NavigationContainer>
         <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
               headerShown: false,
               drawerActiveBackgroundColor: colors.purple,
               drawerActiveTintColor: '#fff',
               drawerInactiveTintColor: colors.gray200,
               drawerLabelStyle: {
                  marginLeft: -25,
                  fontSize: 15,
               },
            }}
            initialRouteName="home-stack"
         >
            <Drawer.Screen
               name="home-stack"
               component={HomeStack}
               options={{
                  title: 'Inicio',
                  headerShown: false,
                  drawerIcon: ({ color }) => (
                     <Ionicons name="home-outline" size={22} color={color} />
                  ),
               }}
            />
            <Drawer.Screen
               name="settings-stack"
               component={SettingsStack}
               options={{
                  title: 'Configuración',
                  headerShown: false,
                  drawerIcon: ({ color }) => (
                     <Ionicons name="person-outline" size={22} color={color} />
                  ),
               }}
            />
         </Drawer.Navigator>
      </NavigationContainer>
   );
};

export default Navigations;

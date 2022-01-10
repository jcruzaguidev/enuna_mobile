import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsPage } from '../../screens';

const stack = createNativeStackNavigator()

const SettingsStack = () => {
   const { Navigator, Screen } = stack;

   return (
      <>
         <Navigator>
            <Screen name='settings' component={ SettingsPage } options={{ title:'Configuración', headerShown:false }} />
         </Navigator>
      </>
   );
};

export default SettingsStack;


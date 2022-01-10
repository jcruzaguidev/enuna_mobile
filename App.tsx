import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Navigations from './src/navigations/Navigations';

export default function App() {
   if (Platform.OS == 'ios') {
      StatusBar.setBarStyle('dark-content', true);
   }

   return (
      <>
         <Navigations /> 
      </>
   );
}


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '../../screens';

const stack = createNativeStackNavigator()

const HomeStack = () => {
   const { Navigator, Screen } = stack;

   return (
      <>
         <Navigator>
            <Screen name='home' component={ HomePage } options={{ title:'Home', headerShown:false }} />
         </Navigator>
      </>
   );
};

export default HomeStack;

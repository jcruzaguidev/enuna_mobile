import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './Header.styles';

interface Props {
   title:string;
}

const HeaderComponent = (props:Props) => {
   const { title } = props;
   const navigation = useNavigation();

   return (
      <>
         <View style={ styles.headerView }>
            <Text style={ styles.title }>{ title }</Text>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
               <Ionicons name="md-menu" style={ styles.icon } />
            </TouchableOpacity>
         </View>
      </>
   );
};

export default HeaderComponent;

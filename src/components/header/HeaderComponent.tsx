import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/colors';

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

const styles = StyleSheet.create({
   icon:{
      fontSize:29,
      color:colors.gray200
   },
   headerView: {
     flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
   },
   title:{
      fontSize:30,
      fontWeight:"800",
      color: colors.gray200,
      paddingBottom:10
   },
})

export default HeaderComponent;

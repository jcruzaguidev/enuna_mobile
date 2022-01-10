import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import {HeaderComponent} from '../../components';
import {colors} from '../../utils/colors';

const SettingsPage = () => {

   return (
      <>
         <SafeAreaView style={ styles.safeArea }>
            <ScrollView style={ styles.scrollBox }>
               <HeaderComponent title="Configuración" />
            </ScrollView>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({
   safeArea:{
      flex:1,
      backgroundColor:"#fff"
   },
   scrollBox:{
      padding:20
   },
   inputBox: {
      flexDirection: 'row',
      borderColor: colors.gray300,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
   },
})

export default SettingsPage;


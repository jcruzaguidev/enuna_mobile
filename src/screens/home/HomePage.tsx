import React from 'react';
import { View, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {HeaderComponent} from '../../components';
import {colors} from '../../utils/colors';

const HomePage = () => {

   return (
      <>
         <SafeAreaView style={ styles.safeArea }>
            <ScrollView style={ styles.scrollBox }>
               <HeaderComponent title="Inicio" />
               <View>
                  <View style={ styles.inputBox }>
                     <Feather 
                        name='search'
                        size={ 20 }
                        color={ colors.gray300 }
                        style={{ marginRight:5 }}
                     />
                     <TextInput placeholder="Buscar comercio" />
                  </View>
               </View>
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

export default HomePage;

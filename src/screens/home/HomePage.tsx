import React, {useEffect, useState} from 'react';
import { View, StyleSheet, TextInput, SafeAreaView, ScrollView, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {HeaderComponent} from '../../components';
import {CategoryData} from '../../interfaces/master.interface';
import {MasterServices} from '../../services/masterServices';
import { COLORS, SIZES } from '../../constants';

const HomePage = () => {
   const { category } = MasterServices();
   const [search, setSearch] = useState("");
   const [categoryList, setCategoryList] = useState<CategoryData[]>([]);

   const handleSchenge = (e:any) => {
      setSearch(e);
      console.log(e);
   }

   useEffect(() => {
      (async () => {
         await category().then(res => {
            res.status === "success" && setCategoryList(res.data);
         })
      })();
   }, []);

   return (
      <>
         <SafeAreaView style={ styles.safeArea }>
            <ScrollView style={ styles.scrollBox }>
               <HeaderComponent title="Inicio" />
               <View style={ styles.inputBox }>
                  <Feather 
                     name='search'
                     size={ SIZES.body2 }
                     color={ COLORS.gray300 }
                     style={{ marginRight:5 }}
                  />
                  <TextInput placeholder="Buscar comercio" onChangeText={ e => handleSchenge(e) } value={ search } />
               </View>
               <View>
                  {
                     categoryList.map(category => (
                        <Text key={ category.categoryKey }>{ category.categoryName }</Text>
                     ))
                  }
               </View>
            </ScrollView>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({
   safeArea:{
      flex:1,
      backgroundColor:COLORS.white
   },
   scrollBox:{
      padding:20
   },
   inputBox: {
      flexDirection: 'row',
      borderColor: COLORS.gray300,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
   }
})

export default HomePage;

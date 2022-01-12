import React, {useEffect, useState} from 'react';
import { View, StyleSheet, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Alert, CategoryCard, HeaderComponent} from '../../components';
import {CategoryData} from '../../interfaces/master.interface';
import {MasterServices} from '../../services/masterServices';
import { COLORS, SIZES } from '../../constants';
import TrendingSection from './TrendingSection';

const HomePage = ({ navigation }:any) => {
   const { category } = MasterServices();
   const [search, setSearch] = useState("");
   const [categoryList, setCategoryList] = useState<CategoryData[]>([]);
   let img = "../../../assets/recipes/laksa.png";

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
                  <FlatList 
                     data={ categoryList }
                     keyExtractor={ item => `${ item.categoryKey }` }
                     keyboardDismissMode="on-drag"
                     showsVerticalScrollIndicator={ false }
                     ListHeaderComponent={
                        <Alert />
                     }
                     renderItem={({ item }) => {
                        return (
                           <CategoryCard
                              item={item}
                              image={img}
                              onPress={() => navigation.navigate("settings-stack", { cattegoryKey:item.categoryKey })}
                           />
                        );
                     }}
                     ListFooterComponent={
                        <View 
                           style={{
                              marginBottom:100
                           }}
                        />
                     }
                  />
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

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { FONTS, SIZES, dummyData } from '../../constants';

const TrendingSection = () => {

   return (
      <>
         <View
            style={{
               marginTop:SIZES.padding
            }}
         >
            <Text
               style={{
                  ...FONTS.h2
               }}
            >
               Trending Recipes
            </Text>

            <FlatList 
               data={ dummyData.trendingRecipes }
               horizontal
               showsHorizontalScrollIndicator={false}
               keyExtractor={item => `${item}`}
               renderItem={({ item, index }) => {
                  return (
                     <View key={ index }>
                        <Text>{ item.name }</Text>
                     </View>
                  )
               }}
            />
         </View>
      </>
   );
};

export default TrendingSection;

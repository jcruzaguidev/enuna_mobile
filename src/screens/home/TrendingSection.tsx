import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { FONTS, SIZES, dummyData } from '../../constants';
import TrendingCard from './TrendingCard';

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
               keyExtractor={item => `${item.id}`}
               renderItem={({ item, index }) => {
                  return (
                     <View key={ index }>
                        <TrendingCard item={ item } onPress={() => {}} />
                     </View>
                  )
               }}
            />
         </View>
      </>
   );
};

export default TrendingSection;

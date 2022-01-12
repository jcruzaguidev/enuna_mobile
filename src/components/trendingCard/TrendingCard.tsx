import React from 'react';
import { View, TouchableOpacity, Image, Text, Platform, StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS, images } from '../../constants';

interface Props {
   item:any,
   onClick:() => void
}

const TrendingCard = (props:Props) => {
   const { item, onClick } = props;

   return (
      <>
         <View>
            <Text>{ item.name }</Text>
         </View>
      </>
   );
};

export default TrendingCard;

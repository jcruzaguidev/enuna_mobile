import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import {CategoryData} from '../../interfaces/master.interface';
import { SIZES, COLORS, FONTS, images } from "../../constants";

interface Props {
   item:CategoryData;
   image:string;
   onPress:() => void;
}

const CategoryCard = (props:Props) => {
   const { item, onPress } = props;
   const { categoryName } = item;

   return (
      <>
         <TouchableOpacity style={ styles.card } onPress={ onPress }>
            <Image 
               source={images.spagetti}
               resizeMode="cover"
               style={ styles.image }
            />
            <View style={ styles.textContainer }>
               <Text style={ styles.title }>{ categoryName }</Text>
               <Text style={ styles.comment }>{ categoryName }</Text>
            </View>
         </TouchableOpacity>
      </>
   );
};

const styles = StyleSheet.create({
   card:{
      flexDirection:"row",
      alignItems:"center",
      padding:10,
      marginTop:10,
      borderRadius:SIZES.radius,
      backgroundColor:COLORS.lightGray
   },
   image: {
      width:100,
      height:100,
      borderRadius:SIZES.radius
   },
   textContainer: {
      width:"65%",
      paddingHorizontal:20
   },
   title: {
      flex:1,
      ...FONTS.h2
   },
   comment: {
      color:COLORS.gray200,
      ...FONTS.body4
   }
})

export default CategoryCard;

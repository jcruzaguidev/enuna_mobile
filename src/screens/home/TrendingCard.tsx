import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import { FONTS, SIZES, dummyData, COLORS, images } from '../../constants';
import { BlurView } from 'expo-blur';


interface Props {
   item:any;
   onPress:() => void;
   props:any;
}

const TrendingCard = ({ item, onPress, ...props }:Props) => {

   const RecipeCardDetail = () => {
      return (
         <>
            <View
               style={{
                  flex:1,
                     flexDirection:"row",
                     justifyContent:"space-between"
               }}
            >
               {/*Name*/}
               <Text
                  style={{
                     width:"70%",
                     color:COLORS.white,
                     ...FONTS.h3,
                     fontSize:18
                  }}
               >
                  {item.name}
               </Text>

               <Image 
                  source={ item.isBookmark ? images.bookmarkFilled : images.bookmark }
                  style={{
                     width:20,
                     height:20,
                     marginRight:SIZES.base,
                     tintColor:COLORS.darkGreen
                  }}
               />

            </View>
            <View>
               {/*Duration*/}
               <Text
                  style={{
                     color:COLORS.lightGray,
                     ...FONTS.h4
                  }}
               >
                  { item.duration } | { item.serving } Serving
               </Text>
            </View>
         </>
      );
   }

   const RecipeCardInfo = () => {
      return (
         <BlurView 
            intensity={60} 
            tint="dark"
            style={{
               position:"absolute",
               bottom:10,
               left:10,
               right:10,
               height:100,
               paddingVertical:SIZES.radius,
               paddingHorizontal:SIZES.base,
               borderRadius:SIZES.radius
            }}
         >
            <RecipeCardDetail />
         </BlurView>
      );
   }

   return (
      <TouchableOpacity
         style={{
            height:350,
            width:250,
            marginTop: SIZES.radius,
            marginRight:20,
            borderRadius:SIZES.radius,
            ...props
         }}
         onPress={ onPress }
      >
         {/*BackgroundImage*/}
         <Image 
            source={ item.image }
            resizeMode="cover"
            style={{
               height:350,
               width:250,
               borderRadius:SIZES.radius
            }}
         />

         {/*Category*/}
         <View
            style={{
               position:"absolute",
                  top:20,
                  left:15,
                  paddingHorizontal:SIZES.radius,
                  paddingVertical:5,
                  backgroundColor:COLORS.transparentGray,
                  borderRadius:SIZES.radius
            }}
         >
            <Text
               style={{
                  color:COLORS.white,
                  ...FONTS.h4
               }}
            >
               {
                  item.category
               }
            </Text>
         </View>

         {/*Info Category*/}
         <RecipeCardInfo />
      </TouchableOpacity>
   );
};

export default TrendingCard;

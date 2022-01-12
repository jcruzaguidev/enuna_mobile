import React from 'react';
import {View, Image, Text} from 'react-native';
import { COLORS, FONTS, SIZES, images } from '../../constants';

const Alert = () => {

   return (
      <>
         <View
            style={{
               flexDirection:'row',
               marginTop:SIZES.padding,
               paddingVertical:10,
               paddingHorizontal:20,
               borderRadius:10,
               backgroundColor: COLORS.lightGreen
            }}
         >
            <View
               style={{
                  width:70,
                  alignSelf:"center",
                  justifyContent:"center"
               }}
            >
               <Image 
                  source={ images.oil }
                  style={{
                     height:50,
                     width:50
                  }}
               />
            </View>
            <View>
               <Text
                  style={{
                     width:"70%",
                     ...FONTS.body4
                  }}
               >
                  You have 12 recipes that you haven't tried yet
               </Text>
            </View>
         </View>
      </>
   );
};

export default Alert;

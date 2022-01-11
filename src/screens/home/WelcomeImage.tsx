import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, SIZES, images } from '../../constants';

interface Props {
   title: string;
}

const WelcomeImage = (props: Props) => {
   const { title } = props;

   return (
      <>
         <View
            style={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <Text
               style={{
                  marginTop: 60,
                  fontSize: SIZES.h1,
                  textAlign: 'center',
                  fontWeight: '700',
                  color: COLORS.gray200,
                  marginBottom: 30,
               }}
            >
               { title }
            </Text>
            <Image
               source={require(images.peopleEat)}
               style={{
                  width: SIZES.width,
               }}
            />
         </View>
      </>
   );
};

export default WelcomeImage;

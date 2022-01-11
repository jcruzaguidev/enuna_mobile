import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
   icon: {
      fontSize: SIZES.h1,
      color: COLORS.gray200,
   },
   headerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
   },
   title: {
      fontSize: SIZES.h1,
      fontWeight: '800',
      color: COLORS.gray200,
      paddingBottom: 10,
   },
});

import { StyleSheet } from "react-native";
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
   menuTop: {
      flex: 1,
   },
   container: {
      backgroundColor: COLORS.purple,
   },
   imageBackground: {
      padding: 20,
   },
   imageUser: {
      height: 80,
      width: 80,
      borderRadius: 40,
      marginBottom: 10,
   },
   primaryText: {
      color: COLORS.white,
      fontSize: 18,
      marginBottom: 5,
   },
   secondaryText: {
      color: COLORS.white,
      marginRight: 5,
   },
   menuOptions: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingTop: 10,
   },
   menuBottom: {
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: COLORS.white2,
   },
   sectionBottom: {
      paddingVertical: 15,
   },
   viewBottom: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   textBottom: {
      fontSize: 15,
      marginLeft: 5,
   },
   textBottomRed: {
      fontSize: 15,
      marginLeft: 5,
      color: COLORS.red
   },
});



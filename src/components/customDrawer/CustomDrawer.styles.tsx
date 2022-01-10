import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
   menuTop: {
      flex: 1,
   },
   container: {
      backgroundColor: colors.purple,
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
      color: '#fff',
      fontSize: 18,
      marginBottom: 5,
   },
   secondaryText: {
      color: '#fff',
      marginRight: 5,
   },
   menuOptions: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 10,
   },
   menuBottom: {
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
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
      color: colors.red
   },
});



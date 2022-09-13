import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
      position: 'relative',
   },
   title: {
      fontSize: 32,
      fontWeight: 'bold', 
      lineHeight: 38,
      color: 'black',
      marginTop: 35,
   },
   text: {
      color: theme.colors.text_gray,
      marginTop: 10,
   },
   search: {
      height: 60,
      marginTop: 25,
      marginBottom: 15,
      backgroundColor: theme.colors.backgroundGray,
      borderRadius: 10,
      padding: 20,
      textAlign: 'center'
   },
   imagePokeball: {
      position: 'absolute',
      width: '100%',
      top: '-40%',
      left: 20,
      opacity: 0.03,
   },
})



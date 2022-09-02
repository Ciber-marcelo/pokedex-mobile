import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: 50,
      borderRadius: 20,
      backgroundColor: theme.colors.types.water,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      fontSize: 14,
      color: theme.colors.text_white,
   }
})



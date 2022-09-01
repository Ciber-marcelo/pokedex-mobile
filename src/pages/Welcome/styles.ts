import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';
// import styled from "styled-components/native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: theme.colors.background,
   },
   content: {
      // display: 'flex',
      height: '70%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   animation: {
      width: 200,
      height: 200
   },
   footer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      height: '30%',
      backgroundColor: theme.colors.backgroundWater
   },
   title: {
      fontSize: 20,
      color: theme.colors.text_white
   },
   subtitle: {
      fontSize: 14,
      marginTop: 20,
      color: theme.colors.text_white
   }
})



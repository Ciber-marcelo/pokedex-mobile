import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';
// import styled from "styled-components/native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundWater,
   },
   content: {
      height: '70%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   wrapperAnimation: {
      width: 200,
      height: 300,
      borderRadius: 100,
      backgroundColor: theme.colors.types.water,
      //transform está sendo usado aqui para inclinar o componente em 30 graus
      transform: [{ rotate: '30deg' }],
      justifyContent: 'center',
      alignItems: 'center',
   },
   wrapperImage: {
      transform: [{ rotate: '-30deg' }],
   },
   footer: {
      height: '30%',
      padding: 20,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
   },
   title: {
      fontSize: 40,
      marginTop: 20,
      color: theme.colors.text_white,
   },
   subtitle: {
      fontSize: 14,
      marginTop: 20,
      color: theme.colors.text_white
   }
})



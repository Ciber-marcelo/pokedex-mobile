import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

//importação da biblioteca "styled-components"
import styled, { css } from 'styled-components/native';

//aqui estou tipando o "PokemonType" pra evitar um erro.
type PokemonType = {
   type: string
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//aqui estou usando a biblioteca "styled-components" para estilizar o PokemonCard, tive q usar o "styled-components" 
//para deixar a cor de fundo dinamica, já q n consegui com o "StyleSheet", pesquise mais sobre caso tenha duvidas.
export const PokemonCard = styled.TouchableOpacity<PokemonType>`
   ${({ type }) => css`
      border-radius: 10px;
      margin-top: 30px;
      flex-direction: row;
      padding: 20px;
      background: ${theme.colors.backgroundTypes[type]}
   `}
`

//tive q usar a biblioteca "styled-components" aqui tb, para deixar a cor dinamica.
export const PokemonType = styled.View<PokemonType>`
   ${({ type }) => css`
      // width: 65px;
      height: 25px;
      padding: 5px;
      border-radius: 3px;
      // margin-left: 5px;
      margin-top: 5px;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
      background: ${theme.colors.types[type]}
   `}
`
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const styles = StyleSheet.create({
   leftCard: {
      width: '60%',
      position: 'relative',
      // backgroundColor: 'red'
   },
   image10x5: {
      position: 'absolute',
      width: 161,
      height: 75,
      left: 3,
      top: 3,
      opacity: 0.1,
   },
   pokemonId: {
      fontWeight: 'bold',
      fontSize: 12,
      lineHeight: 14,
      color: theme.colors.text_light
   },
   pokemonName: {
      fontWeight: 'bold',
      fontSize: 26,
      lineHeight: 31,
      marginTop: 5,
      textTransform: 'capitalize',
      color: theme.colors.text_white
   },
   pokemonContentType: {
      flexDirection: 'row',
   },
   pokemonTypeText: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 14,
      color: theme.colors.text_white,
      textTransform: 'capitalize',
   },
   rightCard: {
   },
   
});



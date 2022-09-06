import React from "react";
import { View, Text, Image, TouchableOpacityProps} from 'react-native';
import image10x5 from '../../assets/images/10x5.png';

import { styles } from './styles';
import * as SC from './styles';

type Props = TouchableOpacityProps & {
   data: Pokemon
}

type Pokemon = {
   name: string
   url: string
   id: number
   types: PokemonType[]
}

type PokemonType = {
   type: {
      name: string
   }
}

export function Card({data, ...rest}: Props) {
   return (
      //"SC.PokemonCard" é uma tag que eu criei com a biblioteca "styled-components", essa tag foi criada no styles.ts dessa pagina.
      <SC.PokemonCard type={data.types[0].type.name} {...rest}>
         <View style={styles.leftCard}>
            <Text style={styles.pokemonId}>#{data.id} </Text>
            <Text style={styles.pokemonName}>{data.name}</Text>
            <Image style={styles.image10x5} source={image10x5}/>


            <View style={styles.pokemonContentType}>
               {data.types.map(pokemonType =>
                  <SC.PokemonType type="grass">
                     {/* "key={}" ta aqui pra evitar um erro, aqui estou declarando q o nome é a chave. */}
                     <Text style={styles.pokemonTypeText} key={pokemonType.type.name}>
                        {pokemonType.type.name}
                     </Text>
                  </SC.PokemonType>
               )}
            </View>

         </View>
         
         {/* <View style={styles.rightCard}>

         </View> */}
      </SC.PokemonCard>
   );
}
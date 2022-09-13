import React from "react";
import { View, Text, Image, TouchableOpacityProps} from 'react-native';
import image6x3 from '../../assets/images/6x3.png';
import imagePokeball from '../../assets/images/Pokeball.png';

import { styles } from './styles';
import * as SC from './styles';

//to esportanto o "Pokemon" e "PokemonType" pq esses tipos estã sendo usados na tela Home.
export type Pokemon = {
   name: string
   url: string
   id: number
   types: PokemonType[]
}

export type PokemonType = {
   type: {
      name: string
   }
}

type Props = TouchableOpacityProps & {
   data: Pokemon
}

export function Card({data, ...rest}: Props) {
   return (
      //"SC.PokemonCard" é uma tag que eu criei com a biblioteca "styled-components", essa tag foi criada no "styles.ts" dessa pagina.
      <SC.PokemonCard type={data.types[0].type.name} {...rest}>
         <View style={styles.leftCard}>
            <Image style={styles.image6x3} source={image6x3}/>
            <Text style={styles.pokemonId}>#{data.id} </Text>
            <Text style={styles.pokemonName}>{data.name}</Text>
            
            <View style={styles.pokemonContentType}>
               {data.types.map(pokemonType =>
                  <SC.PokemonType type={pokemonType.type.name}>
                     {/* "key={}" ta aqui pra evitar um erro, aqui estou declarando q o nome do pokemon é a chave/id. */}
                     <Text style={styles.pokemonTypeText} key={pokemonType.type.name}>
                        {pokemonType.type.name}
                     </Text>
                  </SC.PokemonType>
               )}
            </View>
         </View>
         
         <View style={styles.rightCard}>
            <Image style={styles.imagePokeball} source={imagePokeball}/>
            <Image style={styles.pokemonImage} 
               source={{ uri:
                  //esse link facilita MUITO pra pegar as imagens dos pokemons, mas depois tenta pegar elas pela API pra estudar.
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
               }}
            /> 
         </View>
      </SC.PokemonCard>
   );
}
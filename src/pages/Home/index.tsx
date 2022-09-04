import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import api from "../../service/api";
import { styles } from './styles';

type Pokemon = {
   name: string
   url: string
   id: number
   types: PokemonType[]
}
type PokemonType = {
   type: string
}
type Request = {
   id: number
   types: PokemonType[]
}

export function Home() {
   //<Pokemon[]> esta tipando o useState pra um array do tipo "Pokemon"
   const [pokemons, setPokemons] = useState<Pokemon[]>([])

   //",[]" serve para que o useEffect chame a função apenas uma vez.
   useEffect(() => {
      getAllPokemon()
   }, [])

   //"await" é usado em funções "async", serve para a função só retornar depois de ter conseguido buscar os dados
   //nessa requisição estou usando comandos da biblioteca "axios", elas são: ".get" e o ".data"
   //"api" foi criado com a bibliotea axios na pasta "src/service/api"
   async function getAllPokemon() {
      const response = await api.get('/pokemon')
      //a baixo estamos usando a pratica de "desestruturação" para deixar o codigo menor, normalemte a linha de baixo seria asim: "const resultados = response.data.results;".
      const { results } = response.data;
      //"promise.all" é usado quando vc faz varias requisições a API, o "promise.all" só finaliza depois de receber todas as requisições evitanto q as requisiçoes buguem.
      const loadPokemons = await Promise.all(
         //"pokemon: Pokemon" o obj/item está sendo tipado para q possa apenas receber os atributos especificados no "type: Pokemon = {}" acima.
         results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getMoreInfo(pokemon.url)
            return {
               name: pokemon.name,
               id,
               types
            }
         })
      )
      setPokemons(loadPokemons)
   }

   //"url: string", está aqui pq estamos usando typesScript, então tipamos a "url" como "string" para facilitar o uso dela no codigo.
   //": Promise<Request>" serve para tipar a requisição, (n é realmente nescesario, mas facilita a codar)
   async function getMoreInfo(url: string): Promise<Request> {
      const response = await api.get(url)
      //a baixo estamos usando a pratica de "desestruturação", normalemte a linha de baixo seria asim: "const id = response.data.id;" e "const types = response.data.types;".
      const { id, types } = response.data;
      return {
         id, types
      }
   }

   return (
      <View style={styles.container}>
         {/* {
            pokemons.map(item => 
               <Text>{item.name}</Text>   
            )
         } */}
      </View>
   );
}
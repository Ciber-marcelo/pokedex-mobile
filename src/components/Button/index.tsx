import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

//"type Props ={}" serve para criar uma propiedade obrigatoria pro componente, no caso o "title", então sempre que esse
//componente for usado em um arquivo, um "title" terá que ser colocado nele, na tela Welcome eu uso esse componente.
type Props = TouchableOpacityProps & {
   title: string;
}

//"{title}: Props" está ai pq eu coloquei que a propiedade "title" deve ser colocado quando o componente for passado 
//para uma tela, eu fiz isso para que esse botão possa ter um titulo diferente em cada tela que eu precisar dele.
export function Button({title}: Props) {
   return (
      <TouchableOpacity style={styles.container}>
         <Text style={styles.title}>
            {title}
         </Text>
      </TouchableOpacity>
   );
}
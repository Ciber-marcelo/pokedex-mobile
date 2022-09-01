import React from "react";
import { View, Text } from 'react-native';

import { styles } from './styles';
import LottieView from "lottie-react-native";

export function Welcome() {
   return (
      <View style={styles.container}> 
         <View style={styles.content}>
            <LottieView
               autoPlay
               loop
               source={require('./pokeball.json')}
               style={styles.animation}
            />
         </View>

         <View style={styles.footer}>
            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.subtitle}>Encontre todos os pokémons em um só lugar</Text>
         </View>
      </View>
   );
}
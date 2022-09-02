import React from "react";
import { View, Text } from 'react-native';

import { styles } from './styles';
//"lottie-react-native" é uma biblioteca que da suporte a animções em formato json, no site deles tem varias animações: https://lottiefiles.com/
import LottieView from "lottie-react-native";
import { Button } from "../../components/Button";

export function Welcome() {
   return (
      <View style={styles.container}>
         <View style={styles.content}>
            <View style={styles.wrapperAnimation}>
               <View style={styles.wrapperImage}>
                  <LottieView
                     autoPlay
                     loop
                     source={require('./pokeball.json')}
                     style={{ width: 150 }} 
                  />
               </View>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Encontre todos os pokémons em um só lugar.</Text>
         </View>

         <View style={styles.footer}>
            <Button 
               title="Iniciar"
            />
         </View>
      </View>
   );
}
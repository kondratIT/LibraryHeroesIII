import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

import { ListOfCreatures } from "./Components/ListOfCreatures/ListOfCreatures"
import {statistics} from "./Data/Statistics"

export default function App() {
  let stats = statistics;
  return (
    <ImageBackground
      source={require('./Images/Interface/BlueBackground.bmp')}
      resizeMode="cover"
       style={styles.tlo}>
      <View style={styles.container}>
        <Text style={styles.appTitle}>Biblioteka Heroes III</Text>
        <ListOfCreatures/>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    color:'#ffffff'
  },
  tlo: {
    flex: 1,
  },
  appTitle: {
    fontSize:20,
    color:'#ffffff',
  }
});

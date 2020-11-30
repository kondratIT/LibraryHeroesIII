import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

import { ListOfCreatures } from "./Components/ListOfCreatures/ListOfCreatures"
import {StaticticListView} from "./Components/StaticticListView/StaticticListView"

export default function App() {
  return (
    <ImageBackground
      source={require('./Background.bmp')}
      resizeMode="cover"
       style={styles.tlo}>
      <View style={styles.container}>
        <Text style={styles.appTitle}>Biblioteka Heroes III</Text>
        <ListOfCreatures/>
        <StatusBar style="auto" />
      </View>
      <StaticticListView/>
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

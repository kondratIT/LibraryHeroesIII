import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

import { ListOfCreatures } from "./Components/ListOfCreatures/ListOfCreatures"
import {StatisticView} from  "./Components/StatisticView/StatisticView"

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
      <StatisticView image={require('./Images/Interface/att.jpg')} name="Atak" value="3(14)" />
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
    //backgroundColor: '#fff',
  },
  tlo: {
    flex: 1,
  },
  appTitle: {
    fontSize:20,
    color:'#ffffff',
  }
});

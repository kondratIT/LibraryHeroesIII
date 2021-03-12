import React, { Component } from "react";
import { StyleSheet, Text, Image, View, FlatList, ImageBackground } from "react-native";
import { CreaturesView } from  "./../CreaturesView/CreaturesView"
import { creatures } from "../../Data/Creatures";

export class ListOfCreatures extends Component{
    _addKeyToCreatures = creatures => {
        return creatures.map(creature => {
            return Object.assign(creature, { key: creature.name });
        });
    };

    _renderCreature = ({item}) => {
        return (
            <CreaturesView
                image={item.image}
                info={item.specialAbilities}
                name={item.name}
                level={item.level}
                statistics={item.statistics}
                heroesWithSpeciality= {item.heroesWithSpeciality}
                secondHeroesWithSpeciality= {item.secondHeroesWithSpeciality}
            />
        );
    };

    render() {
        return (
            <View>
                <FlatList data={creatures} renderItem={this._renderCreature} />
            </View>
        );
    }
}

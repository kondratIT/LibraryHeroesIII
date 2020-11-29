import React, { Component } from "react";
import { StyleSheet, Text, Image, View, FlatList, ImageBackground } from "react-native";
import { CreaturesView } from  "./../CreaturesView/CreaturesView"


const testsCreatures = [
    {
        name: "Nereida",
        level:1,
        attack: 5,
        defence: 2,
        arrows: "-",
        health: 4,
        minimumDamage: 1,
        maximumDamage: 2,
        speed: 6,
        growth: 16,
        value: 57,
        cost: 35,
        specialAbilities: null,
        heroesWithSpeciality:"Cassiopeia",
        image: require('../../Creature_Nymph_1.gif'),
        toCompare: false,
        favorite: false,

    },
    // {
    //     name: "Oceana",
    //     level:1,
    //     attack: 5,
    //     defence: 2,
    //     arrows: "-",
    //     health: 4,
    //     minimumDamage: 1,
    //     maximumDamage: 2,
    //     speed: 6,
    //     growth: 16,
    //     value: 57,
    //     cost: 35,
    //     specialAbilities: null,
    //     heroesWithSpeciality:"Cassiopeia",
    //     image: Creature_Nymph.gif,
    //     toCompare: false,
    //     favorite: false,

    // },

];
export class ListOfCreatures extends Component{
    constructor(props) {
        super(props);
        this.state = { creatures: this._addKeyToCreatures(testsCreatures) };
        // this.state = {
        //     creatures: [
        //         { key: "Nereida" },
        //         { key: "Oceanida" },
        //         { key: "Marynarz" },
        //         { key: "Żeglarz" },
        //         { key: "Pirat" },
        //         { key: "Korsarz" },
        //         { key: "Wilk morski" },
        //         { key: "Bestia sztormów" },
        //         { key: "Assid" },
        //         { key: "Zaklinaczka" },
        //         { key: "Czarodziejka" },
        //         { key: "Niksa" },
        //         { key: "Zbrojna niksa" },
        //         { key: "Wąż morski" },
        //         { key: "Haspid" }
        //     ]
        // };
    }

    _addKeyToCreatures = creatures => {
        return creatures.map(creature => {
            return Object.assign(creature, { key: creature.name });
        });
    };


    _renderCreature = ({item}) => {
        return (
            <ImageBackground
                source={require('../../BlueBackground.bmp')}
                resizeMode="cover"
                style={styles.tlo}>
                <CreaturesView
                    image={item.image}
                    info={item.info}
                    name={item.name}
                />
            </ImageBackground>
        );
    };

    render() {
        return (
            <View style={styles.kontener}>
                <FlatList data={this.state.creatures} renderItem={this._renderCreature} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    kontener: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },
    wiersz: {
        fontSize: 24,
        padding: 42,
        borderWidth: 1,
        borderColor: "#c6a954",
    },
    tlo: {
        flex: 1,
        }
    });
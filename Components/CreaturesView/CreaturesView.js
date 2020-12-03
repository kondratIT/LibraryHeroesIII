import React, { Component } from "react";
import {StyleSheet, Text, Image,ImageBackground, View} from "react-native";
import { StaticticListView } from "../StaticticListView/StaticticListView";
import {TextWithStyled} from "../TextWithStyled/TextWithStyled";

export class CreaturesView extends Component{
    render() {
        return (
            <ImageBackground
            source={require('../../Images/Interface/BackgroundSmall.bmp')}
            resizeMode="cover"
            style={styles.tlo}>
                <View style={styles.creature}>
                    <View style={styles.center}>
                        <View style={styles.left}>
                            <TextWithStyled type="gold">
                                {this.props.name}
                            </TextWithStyled>
                            <Image
                                source={this.props.image}
                            />
                            <View style={styles.under}>
                                <TextWithStyled type="empty" style={styles.text}> Poziom </TextWithStyled>
                                <TextWithStyled> {this.props.level} </TextWithStyled>
                            </View>
                            <View style={styles.hero}>
                                <Image
                                    source={this.props.heroesWithSpeciality}
                                />
                            </View>
                        </View>
                        <StaticticListView stats={this.props.statistics} />
                    </View>
                    <View style={styles.info}>
                        <TextWithStyled type="empty" style={styles.description} >{this.props.info}</TextWithStyled>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    creature: {
        alignItems: "center",
        flexDirection: "column",
        width: 283,
        borderColor: "#6e5d4b",
        borderWidth: 1.2,
        marginVertical: 1,
    },
    center: {
        flexDirection: "row",
        marginVertical: 2,
    },
    left: {
        flexDirection: "column",
        marginHorizontal: 1,
        justifyContent: 'space-between',
        width: 100,
    },
    hero: {
        alignSelf: "center",
        marginTop:1,
    },
    text: {
        flex:1,
        alignItems: "center",
        backgroundColor: "#00000050",

    },
    description: {
        backgroundColor: "#00000050",
        width: 281,
    },
    under: {
        justifyContent: 'space-between',
        flexDirection: "row",
    },
    tlo: {
        marginBottom: 1,
    }
});
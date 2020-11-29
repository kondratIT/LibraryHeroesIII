import React, { Component } from "react";
import {StyleSheet, Text, Image,ImageBackground, View} from "react-native";

const styles = StyleSheet.create({
    creature: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#AAAAAA",
        borderBottomWidth: 2,
        padding: 5,
        height: 175,
    },
    image: {
        flex: 1,
    },
    info: {
        flex: 3,
        alignItems: "flex-end",
        flexDirection: "column",
        alignSelf: "center",
        padding: 20
    },
});

export class CreaturesView extends Component{
    render() {
        return (
            <View >
                <Image
                    style={styles.image}
                    source={this.props.image}
                />
                <View style={styles.info}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
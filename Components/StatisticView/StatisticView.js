import React, { Component } from "react";
import { ImageBackground,StyleSheet,Image, Text, View } from "react-native";

export class StatisticView extends Component{
    render() {
        return (
            <View
            style={styles.statistic}
            >
                <Image
                    style={styles.image}
                    source={this.props.image}
                />
                <ImageBackground
                    source={require('../../Images/Interface/empty.png')}
                    resizeMode="stretch"
                    style={styles.tloStatistic}
                >
                    <Text style={styles.text} >{this.props.name}</Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../../Images/Interface/empty.png')}
                    resizeMode="stretch"
                    style={styles.tloValue}
                >
                    <Text style={styles.value} >{this.props.value}</Text>
                </ImageBackground>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    image: {
        flex: 3,
    },
    statistic:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        maxWidth:180,
    },
    text: {
        flex: 4,
        paddingLeft: 5,
        color: "#ffffff",
    },
    value: {
        paddingLeft: 4,
        color: "#ffffff",
        alignItems:'flex-end',
    },
    tloStatistic: {
        flex: 13,
        marginLeft:1,
    },
    tloValue: {
        flex: 6,
        marginLeft:1,
    },
});
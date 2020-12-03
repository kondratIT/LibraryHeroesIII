import React, { Component } from "react";
import { StyleSheet,Image, View } from "react-native";
import { TextWithStyled } from "../TextWithStyled/TextWithStyled";
import { ImageWithStyled } from "../ImageWithStyled/ImageWithStyled";
export class StatisticView extends Component{
    render() {
        return (
            <View
                style={styles.statistic}
            >
                <ImageWithStyled>
                <Image
                    resizeMode="stretch"
                    source={this.props.image}
                />
                </ImageWithStyled>
                <TextWithStyled style={styles.name}>
                    {this.props.name}
                </TextWithStyled>
                <TextWithStyled style={styles.value}>
                    {this.props.value}
                </TextWithStyled>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    statistic:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: 180,
    },
    name: {
        flex: 4,
    },
    value: {
        flex: 2,
    },

});
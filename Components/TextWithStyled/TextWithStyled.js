import React, { Component } from "react";
import { StyleSheet,Text,View } from "react-native";

export class TextWithStyled extends Component{
    render() {
        let type = styles.text;
        if (this.props.type === "gold") type = styles.gold;
        if (this.props.type === "empty") {
            type = styles.empty;

        };
        return (
            <View style={this.props.style}>
                {/* <View style={styles.border}> */}
                    {/* <View style={styles.background}> */}
                        <Text style={type}>
                            {this.props.children}
                        </Text>
                    {/* </View> */}
                {/* </View > */}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    // border: {
    //     borderColor: "#6e5d4b",
    //     borderWidth: 1.2,
    //     margin: 0.5,
    // },
    // background: {
    //     borderColor:"#5d4a36",
    //     borderWidth: 1.2,
    //     backgroundColor: "#00000050"
    // },
    text: {
        paddingHorizontal: 3,
        color: "#ffffff",
        backgroundColor: "#00000050",
        margin: 0.5,
    },
    gold: {
        paddingHorizontal: 3,
        color: "#efd98f",
        backgroundColor: "#00000050",
        textAlign: "center",
    },
    empty: {
        paddingHorizontal: 3,
        color: "#ffffff",
    },

})
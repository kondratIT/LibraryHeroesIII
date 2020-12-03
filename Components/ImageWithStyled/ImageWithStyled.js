import React, { Component } from "react";
import { StyleSheet,View } from "react-native";

export class ImageWithStyled extends Component{
    render() {
        return (
            <View style={this.props.style}>
                {/* <View style={styles.border}> */}
                    <View style={styles.background}>
                        {this.props.children}
                    </View>
                {/* </View > */}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    border: {
        // borderColor: "#6e5d4b",
        // borderWidth: 1.2,
        // margin: 0.5,
    },
    background: {
        // borderColor:"#5d4a36",
        // borderWidth: 1.2,
        margin: 0.5,
        backgroundColor: "#00000050",
    },

})
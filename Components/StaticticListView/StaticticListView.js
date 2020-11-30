import React, { Component } from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";

import { StatisticView } from "../StatisticView/StatisticView";
import {statistics} from "../../Data/Statistics"


export class StaticticListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statistics: statistics
        };
    };
    _renderStatistic = ({item}) => {
        return (
            <StatisticView image={item.image} name={item.name} value="78845" />
        );
    };

    render() {
        return (
            <View>
                <FlatList data={this.state.statistics} renderItem={this._renderStatistic} />
            </View>
        );
    }
};
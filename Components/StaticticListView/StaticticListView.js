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
    _renderStatistic = ({ item }) => {

        let value = "";
        switch (item.key) {
            case "attack":
                value = this.props.stats.attack;
                break;
            case "deffence":
                value = this.props.stats.deffence;
                break;
            case "shots":
                value = this.props.stats.shots;
                break;
            case "health":
                value = this.props.stats.health;
                break;
            case "dmg":
                value = this.props.stats.minimumDamage + " - " + this.props.stats.maximumDamage;
                break;
            case "speed":
                value = this.props.stats.speed;
                break;
            case "growth":
                value = this.props.stats.growth;
                break;
            case "value":
                value = this.props.stats.value;
                break;
            case "cost":
                value = this.props.stats.cost;
                break;
            default:
                value="-";
        }

        return (
            <StatisticView
                image={item.image}
                name={item.name}
                value={value} />
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
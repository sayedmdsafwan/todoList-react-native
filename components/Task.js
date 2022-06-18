import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    itemLeft: {},
    square: {},
    itemText: {},
    circular: {},
});

export default Task;

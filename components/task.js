import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginRight: 30,
        opacity: 0.5,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        maxWidth: '80%',
    },
    circular: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#ccc',
        marginLeft: 10,

    },
})

export default Task;
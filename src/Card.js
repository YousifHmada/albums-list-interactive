import React from 'react';
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const CardItem = (props) => {
    return (
        <View style={styles.item}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        justifyContent: 'center',
        elevation: 1,
        position: 'relative',
    },
    item: {
        padding: 5,
        flexDirection: 'row',
        borderColor: '#ddd',
        borderBottomWidth: 1
    }
})


module.exports = { Card, CardItem }
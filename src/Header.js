import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.headerName}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {width:0,height:10},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    text: {
        fontSize: 20
    }
})

module.exports = { Header }
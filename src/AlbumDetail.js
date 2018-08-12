import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card, CardItem } from './Card'

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardItem>
                <Text style={styles.text}>{props.itemData.title}</Text>
            </CardItem>
            <CardItem>
                <Text style={styles.text}>{props.itemData.title}</Text>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})

module.exports = { AlbumDetail }
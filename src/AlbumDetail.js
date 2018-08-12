import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { Card, CardItem } from './Card'

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardItem>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{uri: props.itemData.thumbnail_image}} />
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.headerTextStyle}>{props.itemData.title}</Text>
                    <Text >{props.itemData.artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image style={styles.imageStyle} source={{uri: props.itemData.image}} />
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    imageStyle: {
        width: null,
        flex:1,
        height: 300
    },
    headerTextStyle: {
        fontSize: 18
    },
    dataContainer: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'column'
    }
})

module.exports = { AlbumDetail }
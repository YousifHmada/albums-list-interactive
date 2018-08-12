import React from 'react'
import { Header } from './Header'
import {View} from 'react-native'
import {AlbumList} from './AlbumList'

class AppComponent extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerName={'Albums!'} />
                <AlbumList />
            </View>
        )
    }
}


module.exports = AppComponent
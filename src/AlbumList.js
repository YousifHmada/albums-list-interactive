import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { AlbumDetail } from './AlbumDetail'
import Axios from 'axios';

class AlbumList extends React.Component {
    componentWillMount() {
        var call = (NumSeconds) => {
            Axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((r) => {
                this.setState({
                    listItems: r.data,
                    loading: false
                })
            }).catch(() => {
                let i = NumSeconds
                let m = setInterval(() => {
                    if (i == 0) {
                        clearInterval(m);
                        this.setState({
                            loadingMessage: 'loading ...'
                        })
                        return call(NumSeconds * 2)
                    }
                    this.setState({
                        loadingMessage: 'retrying after ' + i + ' ...'
                    })
                    i--;
                }, 1000)
            })
        }
        call(5)
    }
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            loadingMessage: 'loading...'
        }
    }
    render() {
        let getListAlbums = () => {
            return this.state.listItems.map((c, i) => (
                <AlbumDetail itemData={c} key={i} />
            ))
        }
        return (
            <ScrollView>{this.state.loading ? (<Text style={styles.Text}>{this.state.loadingMessage}</Text>) : getListAlbums()}</ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        paddingTop: 20
    }
})

module.exports = { AlbumList }
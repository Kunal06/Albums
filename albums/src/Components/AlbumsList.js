import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumsList extends Component{
  state= {albums: []};

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
    .then(response => this.setState({albums: response.data}));
    console.log('\n componentWillMount in AlbumsList');
  }
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} record= {album} />
    );
  }
  render() {
    console.log(this.state);

    return (
      <ScrollView>

      {this.renderAlbums()}
      </ScrollView>
    );
  }
}


export default AlbumsList;
/* add Style Property of flex 1 to root view component( index.ios.js)*/

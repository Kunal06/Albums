//index.ios.js -place code in here for ios!!
// import a library to help create a Component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/Components/header';
import AlbumList from './src/Components/AlbumsList';
//create a Component
const App = () => (
  <View style= {{flex: 1}}>
    <Header headText= {'Albums'} />
    <AlbumList />
  </View>
);



//render to device
AppRegistry.registerComponent('albums', () => App);

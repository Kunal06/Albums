import React from 'react';
import {Text,View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail= ({record}) => {
  const {title, artist, thumbnail_image, image, url} = record;
  const {imageStyle, Textverticalstyle, thumbnailContainerStyle, headerTextStyle, artworkStyle} = styles;
    return (
      <Card>
        <CardSection>
        <View style = {thumbnailContainerStyle}>
         <Image
         style= {imageStyle}
         source= {{ uri: thumbnail_image }}
         />
        </View>
        <View style={Textverticalstyle}>
          <Text style= {headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
        <Image
        style={artworkStyle}
         source= {{uri: image}}
         />
        </CardSection>

        <CardSection>
         <Button Pressed={() => Linking.openURL(url)} >
          Buy now
         </Button>
        </CardSection>

      </Card>

    );
};

const styles = {
  Textverticalstyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle : {
    fontSize: 18
  },
  imageStyle : {
      height: 50,
      width: 50
    },
  artworkStyle : {
        height: 300,
        flex: 1,
        width: null
      },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  }
};



export default AlbumDetail;
/*const AlbumDetail= (props) => {
    return (
      <Card>
        <CardSection>
        <View>
         <Image source= {{ uri: props.record.thumbnail_image }} />
        </View>
        <View style={styles.Textverticalstyle}>
          <Text>{props.record.title}</Text>
          <Text>{props.record.artist}</Text>
          </View>
        </CardSection>
      </Card>

    )
*/

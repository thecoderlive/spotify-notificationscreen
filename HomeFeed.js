import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.song_cover}
    source={{uri: item.song_cover}}
    />
<Text style={styles.updated_time}>{item.updated_time}</Text>
<Text style={styles.song_name}>{item.song_name}</Text>
<Text style={styles.about_song}>{item.about_song}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'song_cover': {
        'width': '25vw',
        'height': '25vw',
        'marginLeft': 10,
        'marginTop': 5
    },
    'updated_time': {
        'color': '#6a6868',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'song_name': {
        'color': '#080707',
        'fontSize': 22,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_song': {
        'fontSize': 15,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'marginBottom': 10
    }
});
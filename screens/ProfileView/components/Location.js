import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {gs, colors} from '../../../styles';

export default function Location() {
  return (
    <View style={styles.container}>
      <View style={{width: 75, height: 75}}>
        <Image
          source={require('../../../assets/map-marker.png')}
          style={{flex: 1, width: undefined}}
          resizeMode="center"
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.location}>Westlands</Text>
        <Text style={styles.distance}>224km away</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={colors.darkHl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.rowCenter,
    backgroundColor: colors.lightBg,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  location: {
    fontSize: 18,
    color: colors.text,
    fontWeight: '500',
  },
  distance: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 4,
    textTransform: 'uppercase',
  },
});

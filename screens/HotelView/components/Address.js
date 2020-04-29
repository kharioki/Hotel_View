import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {gs, colors} from '../../../styles';

Entypo.loadFont();

export default function Address() {
  return (
    <View>
      <View style={{backgroundColor: '#000'}}>
        <Image
          source={require('../../../assets/map.png')}
          style={{height: 200, opacity: 0.2}}
        />
      </View>

      <View style={styles.addressContainer}>
        <Image
          source={require('../../../assets/red.png')}
          style={{width: 32, height: 32, opacity: 0.5}}
        />

        <View style={{marginLeft: 8, marginTop: 12}}>
          <Text style={gs.sectionTitle}>Address</Text>
          <Text
            style={
              styles.address
            }>{`49, Lord Tony Street, Nanyuki\n012000, Kenya`}</Text>

          <View style={{marginTop: 16}}>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={gs.smallText}>Check It</Text>
              <Entypo
                name="chevron-right"
                size={12}
                color="#fff"
                style={{marginLeft: 4}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    ...gs.absoluteFull,
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  address: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20,
  },
  checkButton: {
    ...gs.button,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
});

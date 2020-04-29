import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {gs, colors} from '../../../styles';

Ionicons.loadFont();
Entypo.loadFont();

export default function Header() {
  return (
    <View style={{marginHorizontal: 32, paddingVertical: 64}}>
      <View style={gs.rowBetween}>
        <Ionicons name="md-arrow-back" color={colors.text} size={32} />
        <Entypo name="dots-three-vertical" color={colors.text} size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

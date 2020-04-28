import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from '../../styles';

import Header from './components/Header';

export default function HotelView() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});

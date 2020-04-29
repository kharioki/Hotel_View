import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {gs, colors} from '../../styles';

import Header from './components/Header';

export default function ProvileView() {
  return (
    <ScrollView style={styles.container}>
      <Header />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
});

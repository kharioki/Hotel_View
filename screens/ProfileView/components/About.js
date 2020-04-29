import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {gs, colors} from '../../../styles';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>ABOUT ME</Text>

      <Text style={styles.about}>
        I am a software engineer, maker, indie hacker and a nomad. Essentially I
        travel and do Web development, Mobile development and Tech-consulting
        for startups too while at it too.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  about: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.darkHl,
    marginTop: 8,
    lineHeight: 22,
  },
});

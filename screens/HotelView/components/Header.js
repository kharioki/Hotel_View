import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function Header() {
  return (
    <View>
      <Image
        source={require('../../../assets/diani.jpg')}
        style={{width: '100%', height: 400}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

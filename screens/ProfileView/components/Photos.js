import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {gs} from '../../../styles';

const photos = [
  require('../../../assets/travel/taj.jpg'),
  require('../../../assets/travel/travel1.jpg'),
  require('../../../assets/travel/travel2.jpg'),
  require('../../../assets/travel/travel3.jpg'),
  require('../../../assets/travel/travel4.jpg'),
  require('../../../assets/travel/travel5.jpg'),
  require('../../../assets/travel/travel6.jpg'),
  require('../../../assets/travel/travel7.jpg'),
  require('../../../assets/travel/travel8.jpg'),
  require('../../../assets/travel/travel9.jpg'),
  require('../../../assets/travel/travel10.jpg'),
  require('../../../assets/travel/travel11.jpg'),
  require('../../../assets/travel/travel12.jpg'),
  require('../../../assets/travel/travel13.jpg'),
  require('../../../assets/travel/travel14.jpg'),
  require('../../../assets/travel/travel15.jpg'),
];

export default function Photos() {
  return (
    <View style={[gs.sectionContainer, {marginTop: 8}]}>
      <Text style={gs.sectionTitle}>My Photos</Text>

      <View style={styles.photosContainer}>
        {photos.map((photo, index) => {
          return (
            <Image
              source={photo}
              key={index}
              style={[
                styles.photo,
                {marginRight: (index + 1) % 3 === 0 ? 0 : 12},
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  photo: {
    width: 108,
    height: 108,
    marginBottom: 12,
    borderRadius: 8,
  },
});

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from './styles';

import HotelView from './screens/HotelView';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <HotelView />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});

export default App;

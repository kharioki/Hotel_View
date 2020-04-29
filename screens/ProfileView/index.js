import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {gs, colors} from '../../styles';

import Header from './components/Header';
import Stats from './components/Stats';
import About from './components/About';
import Location from './components/Location';
import Photos from './components/Photos';

export default function ProvileView() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://randomuser.me/api/?inc=name,picture,location&noinfo',
      );
      const users = await res.json();
      setData(users.results[0]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={[gs.center, styles.container]}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header user={data} />
      <Stats />
      <About />
      <Location />
      <Photos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
});

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CardsScreen from './CardsScreen';
import FavoritesScreen from './FavoritesScreen';
import { StatusBarHeight } from '../util/dimensions';
const cardsIcon = require('../../assets/images/black-cat.png');
const favoritesIcon = require('../../assets/images/favoritesIcon.png');

const HomeScreen = () => {
  const [tab, setTab] = useState('cards');

  const onPressTab = (tabName: string) => {
    setTab(tabName);
  };

  const renderTopTabs = () => (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        testID="cardsTabButton"
        onPress={() => onPressTab('cards')}
        style={[
          styles.tab,
          { backgroundColor: tab === 'cards' ? 'white' : 'transparent' },
        ]}>
        <Image
          resizeMode="contain"
          source={cardsIcon}
          style={[
            styles.tabIcon,
            {
              tintColor:
                tab === 'cards' ? 'rgb(253,3,125)' : 'rgb(191,191,192)',
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        testID="favoritesTabButton"
        onPress={() => onPressTab('favorites')}
        style={[
          styles.tab,
          {
            backgroundColor: tab === 'favorites' ? 'white' : 'transparent',
          },
        ]}>
        <Image
          resizeMode="center"
          style={[
            styles.tabIcon,
            {
              tintColor:
                tab === 'favorites' ? 'rgb(253,3,125)' : 'rgb(191,191,192)',
            },
          ]}
          source={favoritesIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderTopTabs()}
      {tab === 'cards' ? <CardsScreen /> : <FavoritesScreen />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tabContainer: {
    width: 84,
    height: 28,
    borderRadius: 28,
    backgroundColor: '#e3e3e4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
    marginTop: StatusBarHeight + 40,
  },
  tab: {
    width: 40,
    height: 24,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 40,
    height: 24,
  },
});

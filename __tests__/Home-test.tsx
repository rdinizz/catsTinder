/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

it('renders HomeScreen correctly', () => {
  render(<HomeScreen />);
  const cardsTabButton = screen.getByTestId('cardsTabButton');
  const favoritesTabButton = screen.getByTestId('favoritesTabButton');
  expect(cardsTabButton).toBeOnTheScreen();
  expect(favoritesTabButton).toBeOnTheScreen();
});

it('changes tabs correctly', () => {
  render(<HomeScreen />);
  const cardsTabButton = screen.getByTestId('cardsTabButton');
  const favoritesTabButton = screen.getByTestId('favoritesTabButton');
  fireEvent.press(favoritesTabButton);
  expect(screen.getByTestId('favoritesContainer')).toBeOnTheScreen();
  fireEvent.press(cardsTabButton);
});

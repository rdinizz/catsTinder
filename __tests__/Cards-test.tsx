/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CardsScreen from '../src/screens/CardsScreen';

it('renders cards correctly', () => {
  render(<CardsScreen />);
  const cards = screen.getByTestId('cardsSwiper');
});

import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

interface Breed {
  name?: string;
  origin?: string;
}

export interface CardData {
  id: string;
  url: string;
  breeds: [Breed] | [];
}

const Card = ({ cardData }: { cardData: CardData }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={{ uri: cardData.url }} />
      {cardData.breeds && cardData.breeds[0] && (
        <View style={styles.breedContainer}>
          <Text style={styles.breedName}>{cardData.breeds[0].name}</Text>
          <Text style={styles.originName}>{cardData.breeds[0].name}</Text>
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 20,
    width: '100%',
    height: height * 0.5,
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    elevation: 5,
  },
  cardImage: {
    height: height * 0.5,
    width: '100%',
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  breedContainer: {
    justifyContent: 'space-around',
    width: 307,
    height: 48,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  breedName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#434141',
  },
  originName: {
    marginLeft: 12,
    fontSize: 8,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 10,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#bfbfc0',
  },
});

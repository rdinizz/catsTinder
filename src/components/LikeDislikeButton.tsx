import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
const likeImg = require('../../assets/images/like.png');
const dislikeImg = require('../../assets/images/dislike.png');

const LikeDislikeButton = ({
  type,
  onPress,
}: {
  type: 'like' | 'dislike';
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Image
        resizeMode="center"
        style={styles.image}
        source={type === 'like' ? likeImg : dislikeImg}
      />
    </TouchableOpacity>
  );
};

export default LikeDislikeButton;

const styles = StyleSheet.create({
  image: {
    width: 52,
    height: 52,
  },
  buttonStyle: {
    width: 52,
    height: 52,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0,0,0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    marginHorizontal: 30,
  },
});

import React, { useRef } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import useApi from '../hooks/useApi';
import Card from '../components/Card';
import LikeDislikeButton from '../components/LikeDislikeButton';

const CardsScreen = () => {
  const { data, fetchMoreData, likeCat } = useApi();
  const swiperRef = useRef();

  const handleSwipe = (cardIndex: number) => {
    if (cardIndex >= data.length - 5) {
      fetchMoreData();
    }
  };

  const handleLike = (cardIndex: number) => {
    const card = data[cardIndex];
    likeCat(card);
  };

  const handleDislike = (cardIndex: number) => {};

  const onPressLike = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  const onPressDislike = () => {
    console.log('like');
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  return (
    <View style={styles.container}>
      {data && data.length > 0 ? (
        <>
          <Swiper
            testID="cardsSwiper"
            ref={swiperRef}
            cards={data}
            renderCard={card => <Card cardData={card} />}
            onSwiped={handleSwipe}
            onSwipedLeft={handleDislike}
            onSwipedRight={handleLike}
            onSwipedAll={() => {
              console.log('onSwipedAll');
            }}
            cardIndex={0}
            backgroundColor={'#FFF'}
            animateCardOpacity
            showSecondCard
            disableBottomSwipe
            disableTopSwipe
            stackSize={5}
            stackSeparation={0}
            containerStyle={styles.swiperContainer}
          />
          <View
            testID="likeDislikeButtonsView"
            style={styles.likeDislikeButtons}>
            <LikeDislikeButton onPress={onPressDislike} type="dislike" />
            <LikeDislikeButton onPress={onPressLike} type="like" />
          </View>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeDislikeButtons: {
    zIndex: 1,
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
  },
  swiperContainer: {},
});

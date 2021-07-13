import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';

import Styled from 'styled-components/native';

import IconButton from '~/Components/IconButton';

interface Props {
  id: number;
  images: Array<String>;
}

const FeedBody = ({id, images}: Props) => {
  const [indicatorIndex, setIndicatorIndex] = useState<number>(0);
  const imageLength = images.length;

  return (
    <Container>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={imageLength > 1}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          setIndicatorIndex(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
          );
        }}>
        {images.map((image, index) => (
          <ImageContainer key={`FeedImages-${id}-${index}`}>
            <Image
              source={{uri: image as string}}
              style={{width: Dimensions.get('window').width, height: 400}}
            />
          </ImageContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default FeedBody;

const Container = Styled.View``;

const ImageContainer = Styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #D3D3D3;
  width: ${Dimensions.get('window').width}px;
  height: 400px;
`;

const FeedImageIndicatorContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FeedImageIndicator = Styled.View`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin: 2px;
`;

const FeedMenuContainer = Styled.View`
  flex-direction: row;
`;
const MenuContainer = Styled.View`
  flex: 1;
  flex-direction: row;
`;

import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import moment from 'moment';

import {Theme} from '~/styles/Theme';
import {Mixin} from '~/styles/Mixin';

interface Props {
  title: string;
}

const DailySpecial = ({title}: Props) => {
  const [hours, setHours] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);
  const [secs, setSecs] = useState<number>(0);
  const [eventDate, setEventDate] = useState<any>(
    moment.duration().add({hours: 13, minutes: 30, seconds: 60}),
  );

  useEffect(() => {
    updateTimer();
  }, []);

  const updateTimer = () => {
    const x = setInterval(() => {
      if (eventDate <= 0) {
        clearInterval(x);
      } else {
        setEventDate(eventDate.subtract(1, 's'));
        setHours(eventDate.hours());
        setMins(eventDate.minutes());
        setSecs(eventDate.seconds());
      }
    }, 1000);
  };

  return (
    <Container>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 8}}>
        {title}
      </Text>
      <Text style={{color: '#949494'}}>24시간 한정 특가</Text>
      <CountBackground />
      <CountContainer>
        <CountText>{`${hours}:${mins}:${secs}`}</CountText>
        <CountText> 남음</CountText>
      </CountContainer>
      <DailyImg source={{uri: 'https://ifh.cc/g/1NGUL0.jpg'}} />
      <Text style={{marginBottom: 8, marginTop: 8, fontSize: 18}}>
        [우주인피자] 허니 고르곤졸라
      </Text>
      <PriceContainer>
        <PriceText style={{fontWeight: 'bold', color: '#ff3b3b'}}>
          42%
        </PriceText>
        <PriceText style={{fontWeight: 'bold'}}>6,900원</PriceText>
        <PriceText
          style={{
            fontSize: 20,
            color: '#949494',
            textDecorationLine: 'line-through',
          }}>
          11,900원
        </PriceText>
      </PriceContainer>
    </Container>
  );
};

export default DailySpecial;

const Container = Styled.View`
  flex: 1;
  margin: 0 16px 48px 16px;
`;

const Text = Styled.Text`
  margin-bottom: 16px;
  font-size: 16px;
`;

const CountBackground = Styled.View`
 ${Mixin.flexSet('center', 'center', 'row')};
  width: 100%;
  height: 56px;
  position: absolute;
  top: 226px;
  z-index: 1;
  opacity: 0.5;
  background-color: ${Theme.colors.mainColor};
`;

const CountContainer = Styled.View`
  ${Mixin.flexSet('center', 'center', 'row')};
  width: 100%;
  height: 56px;
  position: absolute;
  top: 226px;
  z-index: 1;
`;

const CountText = Styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: white;
`;

const DailyImg = Styled.Image`
  width: 100%;
  height: 220px;
`;

const PriceContainer = Styled.View`
  ${Mixin.flexSet('null', 'null', 'row')};
`;

const PriceText = Styled.Text`
  font-size: 18px;
  margin-right: 8px;
`;

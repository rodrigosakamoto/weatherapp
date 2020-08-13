import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  WeatherDetailsItemInfo,
  WeatherDetailsItemInfoTitle,
  WeatherDetailsItemInfoText,
} from './styles';

const WeatherDetailsItem = ({text, title, icon, max}) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#fff" />
      <WeatherDetailsItemInfo>
        <WeatherDetailsItemInfoTitle>{title}</WeatherDetailsItemInfoTitle>
        <WeatherDetailsItemInfoText>
          {text} {max && `/ ${max}º`}
          {title === 'Umidade' && '%'}
          {title === 'Sensação' && 'º'}
          {title === 'Nuvens' && '%'}
          {title === 'Vento' && 'm/s'}
          {title === 'Pressão' && 'hPa'}
        </WeatherDetailsItemInfoText>
      </WeatherDetailsItemInfo>
    </Container>
  );
};

export default WeatherDetailsItem;

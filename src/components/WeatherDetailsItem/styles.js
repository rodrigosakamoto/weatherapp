import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const WeatherDetailsItemInfo = styled.View`
  margin-left: 6px;
`;

export const WeatherDetailsItemInfoTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;

export const WeatherDetailsItemInfoText = styled.Text`
  font-size: 14px;
  color: #f3f3f3;
  font-family: 'Roboto-Regular';
`;

import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs((props) => ({
  colors: props.hour > 18 ? ['#7159c1', '#333'] : ['#7159c1', '#19c3fb'],
}))`
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const UpdateButton = styled.TouchableOpacity``;

export const LocaleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocaleContainerText = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 32px;
  color: #fff;
`;

export const SearchButton = styled.TouchableOpacity``;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateContainerText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;

export const WeatherContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 30% 0;
`;

export const WeatherIcon = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Temperature = styled.Text`
  font-size: 60px;
  color: #fff;
  font-family: 'Roboto-Bold';
`;

export const TemperatureDescription = styled.Text`
  font-size: 18px;
  color: #f3f3f3;
  font-family: 'Roboto-Regular';
`;

export const WeatherDetails = styled.View`
  flex-direction: row;
  background: rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  margin: 10px;
`;

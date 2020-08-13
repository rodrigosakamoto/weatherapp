import React, {useState, useEffect, useCallback, useMemo} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Geolocation from '@react-native-community/geolocation';
import {OPENWEATHER_API_KEY} from '@env';

import WeatherDetailsItem from '../../components/WeatherDetailsItem';

import api from '../../services/api';

import {
  Container,
  Header,
  UpdateButton,
  DateContainer,
  DateContainerText,
  WeatherContainer,
  LocaleContainer,
  LocaleContainerText,
  WeatherIcon,
  TemperatureContainer,
  Temperature,
  TemperatureDescription,
  WeatherDetails,
  Background,
} from './styles';

const Home = () => {
  const [data, setData] = useState([]);

  const getLocation = useCallback(async () => {
    Geolocation.getCurrentPosition(async (position) => {
      const {latitude, longitude} = position.coords;
      await fetchData(latitude, longitude);
    });
  }, [fetchData]);

  const fetchData = useCallback(async (latitude, longitude) => {
    const response = await api.get('weather', {
      params: {
        lon: longitude,
        lat: latitude,
        appid: OPENWEATHER_API_KEY,
        lang: 'pt_br',
        units: 'metric',
      },
    });

    let date = new Date();
    const formattedDate = format(date, "EEEE',' d 'de' LLLL 'de' yyyy", {
      locale: ptBR,
    });
    const hours = date.getHours();

    setData({
      name: response.data.name,
      temp: response.data.main.temp.toFixed(0),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: formattedDate,
      hours,
      main: response.data.weather[0].main,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      feels_like: response.data.main.feels_like.toFixed(0),
      min: response.data.main.temp_min.toFixed(0),
      max: response.data.main.temp_max.toFixed(0),
      cloud: response.data.clouds.all,
    });
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation, fetchData]);

  return (
    <Background hour={data.hours}>
      <Container background={data.main}>
        <Header>
          <DateContainer>
            <Icon name="calendar" size={24} color="#f3f3f3" />
            <DateContainerText> {data.date}</DateContainerText>
          </DateContainer>

          <UpdateButton onPress={getLocation}>
            <Icon name="rotate-cw" size={24} color="#f3f3f3" />
          </UpdateButton>
        </Header>

        <WeatherContainer>
          <LocaleContainer>
            <Icon name="map-pin" size={24} color="#f3f3f3" />
            <LocaleContainerText> {data.name}</LocaleContainerText>
          </LocaleContainer>

          <TemperatureDescription>{data.description}</TemperatureDescription>

          <TemperatureContainer>
            <Temperature>{data.temp}º</Temperature>
            <WeatherIcon
              source={{
                uri: `https://openweathermap.org/img/wn/${data.icon}@2x.png`,
              }}
            />
          </TemperatureContainer>
        </WeatherContainer>

        <WeatherDetails>
          <WeatherDetailsItem
            icon="droplet"
            title="Umidade"
            text={data.humidity}
          />
          <WeatherDetailsItem icon="wind" title="Vento" text={data.wind} />
          <WeatherDetailsItem
            icon="thermometer"
            title="Min/Max"
            text={data.min}
            max={data.max}
          />
        </WeatherDetails>

        <WeatherDetails>
          <WeatherDetailsItem
            icon="thermometer"
            title="Sensação"
            text={data.feels_like}
          />
          <WeatherDetailsItem
            icon="compass"
            title="Pressão"
            text={data.pressure}
          />
          <WeatherDetailsItem icon="cloud" title="Nuvens" text={data.cloud} />
        </WeatherDetails>
      </Container>
    </Background>
  );
};

export default Home;

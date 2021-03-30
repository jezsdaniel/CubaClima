import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForCity';
import {fetchWeather} from './utils/api';

const App: () => Node = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [city, setCity] = useState('Habana');
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const fetchLocationWeather = async () => {
      try {
        const {apiWeather, apiTemperature} = await fetchWeather(city);

        setError(false);
        setTemperature(apiTemperature);
        setWeather(apiWeather);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };
    fetchLocationWeather();
  }, [city]);

  const submitCity = selectedCity => {
    setCity(selectedCity);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={getImageForWeather(city)}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <View style={styles.detailsContainer}>
          <ActivityIndicator animating={loading} color="white" size="large" />

          {!loading && (
            <View>
              {error && (
                <Text style={[styles.smallText, styles.textStyleError]}>
                  Could not load weather, please try a different city.
                </Text>
              )}
              {!error && (
                <View>
                  <Text style={[styles.textStyle, styles.smallText]}>
                    {weather}
                  </Text>
                  <Text style={[styles.textStyle, styles.largeText]}>
                    {`${Math.round(temperature)}°C`}
                  </Text>
                </View>
              )}
              <SearchInput
                placeholder="Search any cuban city"
                onSubmit={submitCity}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: 'white',
  },
  textStyleError: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});

export default App;

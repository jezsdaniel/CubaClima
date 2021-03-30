export const fetchWeather = async city => {
  const response = await fetch(
    `https://www.redcuba.cu/api/weather_get_summary/${city}`,
  );
  const {data} = await response.json();
  const {cityName, temp, descriptionWeather} = data;

  return {
    apiWeather: descriptionWeather,
    apiTemperature: temp,
  };
};

import type { Meta, StoryObj } from '@storybook/react';
import WeatherWidget from './WeatherWidget';
import createMockPConnect from './mock';

const meta = {
  title: 'Pega Constellation/WeatherWidget',
  component: WeatherWidget,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof WeatherWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Current Weather',
    locationProperty: '.WeatherLocation',
    temperatureProperty: '.WeatherTemperature',
    conditionProperty: '.WeatherCondition',
    humidityProperty: '.WeatherHumidity',
    temperatureUnit: 'C',
    testId: 'weather-widget-default',
    getPConnect: createMockPConnect()
  }
};

export const Fahrenheit: Story = {
  args: {
    heading: 'Weather Today',
    locationProperty: '.WeatherLocation',
    temperatureProperty: '.WeatherTemperature',
    conditionProperty: '.WeatherCondition',
    humidityProperty: '.WeatherHumidity',
    temperatureUnit: 'F',
    testId: 'weather-widget-fahrenheit',
    getPConnect: createMockPConnect({
      '.WeatherLocation': 'New York, NY',
      '.WeatherTemperature': 72,
      '.WeatherCondition': 'Sunny',
      '.WeatherHumidity': 45
    })
  }
};

export const NoData: Story = {
  args: {
    heading: 'Weather',
    locationProperty: '.WeatherLocation',
    temperatureProperty: '.WeatherTemperature',
    conditionProperty: '.WeatherCondition',
    humidityProperty: '.WeatherHumidity',
    temperatureUnit: 'C',
    testId: 'weather-widget-nodata',
    getPConnect: createMockPConnect({
      '.WeatherLocation': '',
      '.WeatherTemperature': '',
      '.WeatherCondition': '',
      '.WeatherHumidity': ''
    })
  }
};

export const RainyWeather: Story = {
  args: {
    heading: 'Rainy Day',
    locationProperty: '.WeatherLocation',
    temperatureProperty: '.WeatherTemperature',
    conditionProperty: '.WeatherCondition',
    humidityProperty: '.WeatherHumidity',
    temperatureUnit: 'C',
    testId: 'weather-widget-rainy',
    getPConnect: createMockPConnect({
      '.WeatherLocation': 'London, UK',
      '.WeatherTemperature': 12,
      '.WeatherCondition': 'Light Rain',
      '.WeatherHumidity': 89
    })
  }
};

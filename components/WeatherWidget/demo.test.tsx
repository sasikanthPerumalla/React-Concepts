import { render, screen } from '@testing-library/react';
import WeatherWidget from './WeatherWidget';
import createMockPConnect from './mock';

describe('WeatherWidget', () => {
  it('renders with default weather data', () => {
    render(
      <WeatherWidget
        heading="Current Weather"
        getPConnect={getPConnect}
      />
    );

    expect(screen.getByText('Current Weather')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
    expect(screen.getByText('22°C')).toBeInTheDocument();
    expect(screen.getByText('Partly Cloudy')).toBeInTheDocument();
    expect(screen.getByText('65%')).toBeInTheDocument();
  });

  it('renders with Fahrenheit unit', () => {
    render(
      <WeatherWidget
        heading="Weather"
        temperatureUnit="F"
        getPConnect={getPConnect}
      />
    );

    expect(screen.getByText('72°F')).toBeInTheDocument();
  });

  it('renders placeholder when no data is available', () => {
    render(
      <WeatherWidget
        heading="Weather"
        getPConnect={getPConnect}
      />
    );

    expect(screen.getByText('--')).toBeInTheDocument();
    expect(screen.getByText('Unknown Location')).toBeInTheDocument();
  });

  it('renders with custom test ID', () => {
    render(
      <WeatherWidget
        heading="Weather"
        testId="custom-weather-test"
        getPConnect={getPConnect}
      />
    );

    expect(screen.getByTestId('custom-weather-test')).toBeInTheDocument();
  });

  it('renders humidity display correctly', () => {
    render(
      <WeatherWidget
        heading="Weather"
        getPConnect={getPConnect}
      />
    );

    expect(screen.getByText('89%')).toBeInTheDocument();
  });

  it('reads from custom property paths', () => {
    const getPConnect = createMockPConnect({
      '.CustomLocation': 'Tokyo, Japan',
      '.CustomTemp': 28,
      '.CustomCondition': 'Clear Sky',
      '.CustomHumidity': 55
    });
    render(
      <WeatherWidget
        heading="Tokyo Weather"
        locationProperty=".CustomLocation"
        temperatureProperty=".CustomTemp"
        conditionProperty=".CustomCondition"
        humidityProperty=".CustomHumidity"
        getPConnect={getPConnect}
      />
    );

    expect(screen.getByText('Tokyo, Japan')).toBeInTheDocument();
    expect(screen.getByText('28°C')).toBeInTheDocument();
    expect(screen.getByText('Clear Sky')).toBeInTheDocument();
    expect(screen.getByText('55%')).toBeInTheDocument();
  });
});

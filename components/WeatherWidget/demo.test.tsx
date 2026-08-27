import { render, screen } from '@testing-library/react';
import WeatherWidget from './WeatherWidget';
import createMockPConnect from './mock';

describe('WeatherWidget', () => {
  it('renders the current temperature', () => {
    render(
      <WeatherWidget
        getPConnect={getPConnect}
        temperature="30"
        weatherCondition="Clear day"
        currentTime="07:20"
      />
    );
    expect(screen.getByText(/30/)).toBeInTheDocument();
  });

  it('renders the weather condition text', () => {
    render(
      <WeatherWidget
        getPConnect={getPConnect}
        temperature="30"
        weatherCondition="Clear day"
        currentTime="07:20"
      />
    );
    expect(screen.getByText('Clear day')).toBeInTheDocument();
  });

  it('renders the current time', () => {
    render(
      <WeatherWidget
        getPConnect={getPConnect}
        temperature="30"
        weatherCondition="Clear day"
        currentTime="07:20"
      />
    );
    expect(screen.getByText('07:20')).toBeInTheDocument();
  });

  it('renders all forecast days', () => {
    render(
      <WeatherWidget
        getPConnect={getPConnect}
        temperature="30"
        weatherCondition="Clear day"
        currentTime="07:20"
      />
    );
    expect(screen.getByText('THU')).toBeInTheDocument();
    expect(screen.getByText('FRI')).toBeInTheDocument();
    expect(screen.getByText('SAT')).toBeInTheDocument();
    expect(screen.getByText('SUN')).toBeInTheDocument();
  });

  it('renders temperature ranges for forecast days', () => {
    render(
      <WeatherWidget
        getPConnect={getPConnect}
        temperature="30"
        weatherCondition="Clear day"
        currentTime="07:20"
      />
    );
    const tempRanges = screen.getAllByText('18/20');
    expect(tempRanges).toHaveLength(4);
  });

  it('renders with custom temperature', () => {
    render(
      <WeatherWidget
        getPConnect={getPConnect}
        temperature="42"
        weatherCondition="Sunny"
        currentTime="14:30"
      />
    );
    expect(screen.getByText(/42/)).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('14:30')).toBeInTheDocument();
  });

  it('renders with a test ID when provided', () => {
    const getPConnect = createMockPConnect();
    render(
      <WeatherWidget
        getPConnect={getPConnect}
        temperature="30"
        weatherCondition="Clear day"
        currentTime="07:20"
        testId="weather-widget-test"
      />
    );
    expect(screen.getByTestId('weather-widget-test')).toBeInTheDocument();
  });
});

import { withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from './PConnProps';
import {
  StyledWidgetContainer,
  StyledCurrentWeather,
  StyledSunIcon,
  StyledCloudOverlay,
  StyledTemperatureSection,
  StyledTemperature,
  StyledDegreeSymbol,
  StyledTime,
  StyledConditionText,
  StyledForecastRow,
  StyledForecastDay,
  StyledDayLabel,
  StyledForecastIcon,
  StyledTempRange,
  StyledIconContainer
} from './styles';

interface WeatherWidgetProps extends PConnFieldProps {
  heading?: string;
  temperature?: string;
  weatherCondition?: string;
  currentTime?: string;
  testId?: string;
}

interface ForecastDay {
  id: string;
  day: string;
  iconType: string;
  tempLow: string;
  tempHigh: string;
}

const FORECAST_DATA: ForecastDay[] = [
  { id: 'thu', day: 'THU', iconType: 'partly-cloudy', tempLow: '18', tempHigh: '20' },
  { id: 'fri', day: 'FRI', iconType: 'thunderstorm', tempLow: '18', tempHigh: '20' },
  { id: 'sat', day: 'SAT', iconType: 'fog', tempLow: '18', tempHigh: '20' },
  { id: 'sun', day: 'SUN', iconType: 'cloudy', tempLow: '18', tempHigh: '20' }
];

function renderWeatherIcon(iconType: string): JSX.Element {
  if (iconType === 'partly-cloudy') {
    return (
      <StyledForecastIcon>
        <span role="img" aria-label="partly cloudy">\u26C5</span>
      </StyledForecastIcon>
    );
  }
  if (iconType === 'thunderstorm') {
    return (
      <StyledForecastIcon>
        <span role="img" aria-label="thunderstorm">\u26C8\uFE0F</span>
      </StyledForecastIcon>
    );
  }
  if (iconType === 'fog') {
    return (
      <StyledForecastIcon>
        <span role="img" aria-label="fog">\uD83C\uDF2B\uFE0F</span>
      </StyledForecastIcon>
    );
  }
  return (
    <StyledForecastIcon>
      <span role="img" aria-label="cloudy">\u2601\uFE0F</span>
    </StyledForecastIcon>
  );
}

function WeatherWidget(props: WeatherWidgetProps) {
  const {
    temperature = '30',
    weatherCondition = 'Clear day',
    currentTime = '07:20',
    testId
  } = props;

  return (
    <StyledWidgetContainer data-testid={testId}>
      <StyledCurrentWeather>
        <StyledIconContainer>
          <StyledSunIcon />
          <StyledCloudOverlay />
          <StyledConditionText>{weatherCondition}</StyledConditionText>
        </StyledIconContainer>
        <StyledTemperatureSection>
          <StyledTemperature>
            {temperature}<StyledDegreeSymbol>/0</StyledDegreeSymbol>
          </StyledTemperature>
          <StyledTime>{currentTime}</StyledTime>
        </StyledTemperatureSection>
      </StyledCurrentWeather>
      <StyledForecastRow>
        {FORECAST_DATA.map((day) => (
          <StyledForecastDay key={day.id}>
            <StyledDayLabel>{day.day}</StyledDayLabel>
            {renderWeatherIcon(day.iconType)}
            <StyledTempRange>{`${day.tempLow}/${day.tempHigh}`}</StyledTempRange>
          </StyledForecastDay>
        ))}
      </StyledForecastRow>
    </StyledWidgetContainer>
  );
}

export default withConfiguration(WeatherWidget);

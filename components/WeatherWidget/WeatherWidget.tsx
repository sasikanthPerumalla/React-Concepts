import { withConfiguration, Card, CardHeader, CardContent, Flex, Text, Icon } from '@pega/cosmos-react-core';
import {
  StyledWeatherContainer,
  StyledTemperatureDisplay,
  StyledDetailRow,
  StyledConditionText
} from './styles';

interface WeatherWidgetProps {
  heading?: string;
  locationProperty?: string;
  temperatureProperty?: string;
  conditionProperty?: string;
  humidityProperty?: string;
  temperatureUnit?: string;
  testId?: string;
  getPConnect: () => any;
}

function getWeatherIconName(condition: string): string {
  const lowerCondition = condition.toLowerCase();
  if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
    return 'sun';
  }
  if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
    return 'cloud';
  }
  if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
    return 'warn';
  }
  if (lowerCondition.includes('snow') || lowerCondition.includes('ice')) {
    return 'information';
  }
  return 'cloud';
}

function WeatherWidget(props: WeatherWidgetProps) {
  const {
    heading = 'Weather',
    locationProperty = '.WeatherLocation',
    temperatureProperty = '.WeatherTemperature',
    conditionProperty = '.WeatherCondition',
    humidityProperty = '.WeatherHumidity',
    temperatureUnit = 'C',
    testId = 'weather-widget',
    getPConnect
  } = props;

  const pConn = getPConnect();

  const location = String(pConn.getValue(locationProperty) || 'Unknown Location');
  const temperature = pConn.getValue(temperatureProperty);
  const condition = String(pConn.getValue(conditionProperty) || 'Unknown');
  const humidity = pConn.getValue(humidityProperty);

  const unitSymbol = temperatureUnit === 'F' ? '°F' : '°C';
  const temperatureDisplay = temperature !== undefined && temperature !== null && temperature !== ''
    ? `${temperature}${unitSymbol}`
    : '--';
  const humidityDisplay = humidity !== undefined && humidity !== null && humidity !== ''
    ? `${humidity}%`
    : '--';

  const iconName = getWeatherIconName(condition);

  return (
    <StyledWeatherContainer data-testid={testId}>
      <Card>
        <CardHeader>
          <Text variant="h2">{heading}</Text>
        </CardHeader>
        <CardContent>
          <Flex container={{ direction: 'column', gap: 1 }}>
            <Flex container={{ direction: 'row', alignItems: 'center', gap: 1 }}>
              <Icon name={iconName} />
              <Text variant="h3">{location}</Text>
            </Flex>

            <StyledTemperatureDisplay>
              <Text variant="h1">{temperatureDisplay}</Text>
            </StyledTemperatureDisplay>

            <StyledConditionText>
              <Text>{condition}</Text>
            </StyledConditionText>

            <StyledDetailRow>
              <Flex container={{ direction: 'row', justifyContent: 'space-between' }}>
                <Text variant="secondary">Humidity</Text>
                <Text>{humidityDisplay}</Text>
              </Flex>
            </StyledDetailRow>
          </Flex>
        </CardContent>
      </Card>
    </StyledWeatherContainer>
  );
}

export default withConfiguration(WeatherWidget);

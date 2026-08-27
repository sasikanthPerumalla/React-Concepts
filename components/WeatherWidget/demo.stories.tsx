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
    getPConnect: createMockPConnect(),
    heading: 'Weather Widget',
    temperature: '30',
    weatherCondition: 'Clear day',
    currentTime: '07:20'
  }
};

export const HotDay: Story = {
  args: {
    getPConnect: createMockPConnect({
      '.Temperature': '42',
      '.WeatherCondition': 'Sunny',
      '.CurrentTime': '14:30'
    }),
    heading: 'Weather Widget',
    temperature: '42',
    weatherCondition: 'Sunny',
    currentTime: '14:30'
  }
};

export const ColdDay: Story = {
  args: {
    getPConnect: createMockPConnect({
      '.Temperature': '5',
      '.WeatherCondition': 'Overcast',
      '.CurrentTime': '06:45'
    }),
    heading: 'Weather Widget',
    temperature: '5',
    weatherCondition: 'Overcast',
    currentTime: '06:45'
  }
};

export const RainyDay: Story = {
  args: {
    getPConnect: createMockPConnect({
      '.Temperature': '18',
      '.WeatherCondition': 'Rainy',
      '.CurrentTime': '11:00'
    }),
    heading: 'Weather Widget',
    temperature: '18',
    weatherCondition: 'Rainy',
    currentTime: '11:00'
  }
};

const createMockPConnect = (overrides: Record<string, any> = {}) => {
  const values: Record<string, any> = {
    '.WeatherLocation': 'San Francisco, CA',
    '.WeatherTemperature': 22,
    '.WeatherCondition': 'Partly Cloudy',
    '.WeatherHumidity': 65,
    ...overrides
  };

  const setValue = overrides.setValue ?? (() => {});

  return () => ({
    getValue: (path: string) => values[path] ?? '',
    setValue,
    getListData: () => [],
    getCaseInfo: () => ({}),
    getStateProps: () => ({}),
    getConfigProps: () => ({}),
    resolveConfigProps: (val: any) => val
  });
};

export default createMockPConnect;

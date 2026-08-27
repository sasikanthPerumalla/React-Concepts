const createMockPConnect = (overrides: Record<string, any> = {}) => {
  const values: Record<string, any> = {
    '.Temperature': '30',
    '.WeatherCondition': 'Clear day',
    '.CurrentTime': '07:20',
    '.Heading': 'Weather Widget',
    ...overrides
  };

  const setValue = overrides.setValue ?? (() => {});

  return () => ({
    getValue: (path: string) => values[path] ?? '',
    setValue,
    getListData: () => [],
    getCaseInfo: () => ({}),
    getStateProps: () => ({}),
    getConfigProps: () => ({
      heading: values['.Heading'],
      temperature: values['.Temperature'],
      weatherCondition: values['.WeatherCondition'],
      currentTime: values['.CurrentTime']
    }),
    resolveConfigProps: (val: any) => val
  });
};

export default createMockPConnect;

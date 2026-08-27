const createMockPConnect = (overrides: Record<string, any> = {}) => {
  const values: Record<string, any> = {
    '.DueDate': 'March 25th',
    '.TaskTitle': 'Customize every button and chip instance primary color',
    '.AssignedTo': 'Lucas Smith',
    '.AssignedToAvatarUrl': 'https://i.pravatar.cc/150?img=11',
    '.ProgressPercent': 60,
    ...overrides
  };

  const setValue = overrides.setValue ?? ((_path: string, _val: any) => { /* no-op */ });

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

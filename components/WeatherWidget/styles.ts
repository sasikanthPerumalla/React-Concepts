import styled from 'styled-components';

export const StyledWeatherContainer = styled.div`
  width: 100%;
  max-width: 24rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const StyledTemperatureDisplay = styled.div`
  text-align: center;
  padding: 1rem 0;
  color: var(app -= 1-primary-color);
`;

export const StyledConditionText = styled.div`
  text-align: center;
  color: var(app -= 1-secondary-text-color);
  padding-bottom: 0.5rem;
`;

export const StyledDetailRow = styled.div`
  padding: 0.5rem 0;
  border-top: 1px solid var(app -= 1-neutral-light-color);
`;

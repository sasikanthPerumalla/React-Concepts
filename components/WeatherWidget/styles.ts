import styled from 'styled-components';

export const StyledWidgetContainer = styled.div`
  background: linear-gradient(180deg, #4da0ff 0%, #87ceeb 50%, #a8e0f7 100%);
  border-radius: 1.5rem;
  padding: 1.5rem;
  min-width: 280px;
  max-width: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #ffffff;
`;

export const StyledCurrentWeather = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
`;

export const StyledIconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSunIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, #fff4a3, #ffc107, #ff9800);
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.4);
`;

export const StyledCloudOverlay = styled.div`
  position: absolute;
  bottom: 30px;
  left: -5px;
  width: 70px;
  height: 35px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 15px;
    width: 30px;
    height: 30px;
    background: #ffffff;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 35px;
    width: 22px;
    height: 22px;
    background: #ffffff;
    border-radius: 50%;
  }
`;

export const StyledConditionText = styled.span`
  margin-top: 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const StyledTemperatureSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledTemperature = styled.div`
  font-size: 4rem;
  font-weight: 300;
  line-height: 1;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledDegreeSymbol = styled.span`
  font-size: 2rem;
  vertical-align: super;
`;

export const StyledTime = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-top: 0.25rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledForecastRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
`;

export const StyledForecastDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;

export const StyledDayLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
`;

export const StyledForecastIcon = styled.div`
  font-size: 1.75rem;
  line-height: 1;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
`;

export const StyledTempRange = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
`;

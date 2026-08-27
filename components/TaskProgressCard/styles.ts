import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  background: linear-gradient(135deg, #2979ff 0%, #1565c0 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  color: #ffffff;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(21, 101, 192, 0.35);
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledDateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  opacity: 0.95;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    fill: #ffffff;
    color: #ffffff;
  }

  span {
    color: #ffffff;
    font-weight: 500;
    font-size: 0.9375rem;
  }
`;

export const StyledCodeIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.25rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #ffffff;
    color: #ffffff;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  color: #ffffff;
`;

export const StyledAssigneeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const StyledAvatarWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2.5px solid rgba(255, 255, 255, 0.7);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
`;

export const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledAvatarFallback = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
`;

export const StyledAssigneeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const StyledAssigneeLabel = styled.span`
  font-size: 0.75rem;
  opacity: 0.8;
  font-weight: 400;
  color: #ffffff;
`;

export const StyledAssigneeName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

export const StyledProgressSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const StyledProgressTrack = styled.div`
  flex: 1;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const StyledProgressFill = styled.div`
  height: 100%;
  background: #ffffff;
  border-radius: 0.25rem;
  transition: width 0.4s ease;
`;

export const StyledProgressText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  min-width: 2.5rem;
  text-align: right;
`;

import { useState, useEffect } from 'react';
import { withConfiguration, Icon, Text } from '@pega/cosmos-react-core';
import {
  StyledCardWrapper,
  StyledDateRow,
  StyledCodeIcon,
  StyledTitle,
  StyledAssigneeRow,
  StyledAvatarWrapper,
  StyledAvatarImage,
  StyledAvatarFallback,
  StyledAssigneeInfo,
  StyledAssigneeLabel,
  StyledAssigneeName,
  StyledProgressSection,
  StyledProgressTrack,
  StyledProgressFill,
  StyledProgressText
} from './styles';

interface TaskProgressCardProps {
  getPConnect: () => any;
  dueDate?: string;
  taskTitle?: string;
  assignedTo?: string;
  assignedToAvatarUrl?: string;
  progressPercent?: number;
  testId?: string;
}

function TaskProgressCard(props: TaskProgressCardProps) {
  const { getPConnect, testId } = props;
  const pConn = getPConnect();

  const [dueDate, setDueDate] = useState<string>('');
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [assignedTo, setAssignedTo] = useState<string>('');
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [avatarError, setAvatarError] = useState<boolean>(false);

  useEffect(() => {
    const resolvedDueDate = pConn.getValue('.DueDate') || props.dueDate || '';
    const resolvedTitle = pConn.getValue('.TaskTitle') || props.taskTitle || '';
    const resolvedAssignee = pConn.getValue('.AssignedTo') || props.assignedTo || '';
    const resolvedAvatar = pConn.getValue('.AssignedToAvatarUrl') || props.assignedToAvatarUrl || '';
    const resolvedProgress = pConn.getValue('.ProgressPercent') ?? props.progressPercent ?? 0;

    setDueDate(resolvedDueDate);
    setTaskTitle(resolvedTitle);
    setAssignedTo(resolvedAssignee);
    setAvatarUrl(resolvedAvatar);
    setProgress(Number(resolvedProgress));
  }, [pConn, props.dueDate, props.taskTitle, props.assignedTo, props.assignedToAvatarUrl, props.progressPercent]);

  const clampedProgress = Math.min(100, Math.max(0, progress));
  const initials = assignedTo
    .split(' ')
    .map((word: string) => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <StyledCardWrapper data-testid={testId || 'task-progress-card'}>
      <StyledDateRow>
        <Icon name="clock" role="img" aria-label="Due date" />
        <Text variant="h4" as="span">{dueDate}</Text>
      </StyledDateRow>

      <StyledCodeIcon>
        <Icon name="code" role="img" aria-label="Development task" />
      </StyledCodeIcon>

      <StyledTitle>{taskTitle}</StyledTitle>

      <StyledAssigneeRow>
        <StyledAvatarWrapper>
          {avatarUrl && !avatarError ? (
            <StyledAvatarImage
              src={avatarUrl}
              alt={assignedTo}
              onError={() => setAvatarError(true)}
            />
          ) : (
            <StyledAvatarFallback>{initials}</StyledAvatarFallback>
          )}
        </StyledAvatarWrapper>
        <StyledAssigneeInfo>
          <StyledAssigneeLabel>Assigned to</StyledAssigneeLabel>
          <StyledAssigneeName>{assignedTo}</StyledAssigneeName>
        </StyledAssigneeInfo>
      </StyledAssigneeRow>

      <StyledProgressSection>
        <StyledProgressTrack>
          <StyledProgressFill style={{ width: `${clampedProgress}%` }} />
        </StyledProgressTrack>
        <StyledProgressText>{clampedProgress}%</StyledProgressText>
      </StyledProgressSection>
    </StyledCardWrapper>
  );
}

export default withConfiguration(TaskProgressCard);

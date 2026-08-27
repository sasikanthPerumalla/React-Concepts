import { render, screen } from '@testing-library/react';
import TaskProgressCard from './TaskProgressCard';
import createMockPConnect from './mock';

describe('TaskProgressCard', () => {
  it('renders the due date', () => {
    const getPConnect = createMockPConnect();
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByText('March 25th')).toBeInTheDocument();
  });

  it('renders the task title', () => {
    const getPConnect = createMockPConnect();
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByText('Customize every button and chip instance primary color')).toBeInTheDocument();
  });

  it('renders the assignee name', () => {
    const getPConnect = createMockPConnect();
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByText('Lucas Smith')).toBeInTheDocument();
  });

  it('renders the Assigned to label', () => {
    const getPConnect = createMockPConnect();
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByText('Assigned to')).toBeInTheDocument();
  });

  it('renders the progress percentage text', () => {
    const getPConnect = createMockPConnect();
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByText('60%')).toBeInTheDocument();
  });

  it('renders avatar image when URL is provided', () => {
    const getPConnect = createMockPConnect();
    render(<TaskProgressCard getPConnect={getPConnect} />);
    const img = screen.getByAlt('Lucas Smith') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('pravatar');
  });

  it('renders initials fallback when avatar URL is empty', () => {
    const getPConnect = createMockPConnect({
      '.AssignedToAvatarUrl': '',
      '.AssignedTo': 'Jane Doe'
    });
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('clamps progress to 100 when value exceeds 100', () => {
    const getPConnect = createMockPConnect({ '.ProgressPercent': 150 });
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('clamps progress to 0 when value is negative', () => {
    const getPConnect = createMockPConnect({ '.ProgressPercent': -10 });
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('applies the testId data attribute', () => {
    const getPConnect = createMockPConnect();
    render(<TaskProgressCard getPConnect={getPConnect} testId="my-card" />);
    expect(screen.getByTestId('my-card')).toBeInTheDocument();
  });

  it('uses default testId when none provided', () => {
    const getPConnect = createMockPConnect();
    render(<TaskProgressCard getPConnect={getPConnect} />);
    expect(screen.getByTestId('task-progress-card')).toBeInTheDocument();
  });
});

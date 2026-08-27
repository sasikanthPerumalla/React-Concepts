import type { Meta, StoryObj } from '@storybook/react';
import TaskProgressCard from './TaskProgressCard';
import createMockPConnect from './mock';

const meta = {
  title: 'Pega Constellation/TaskProgressCard',
  component: TaskProgressCard,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TaskProgressCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    getPConnect: createMockPConnect()
  }
};

export const NoAvatar: Story = {
  args: {
    getPConnect: createMockPConnect({
      '.AssignedToAvatarUrl': '',
      '.AssignedTo': 'Jane Doe',
      '.TaskTitle': 'Review accessibility compliance for all form fields'
    })
  }
};

export const LowProgress: Story = {
  args: {
    getPConnect: createMockPConnect({
      '.ProgressPercent': 15,
      '.DueDate': 'April 10th',
      '.TaskTitle': 'Set up CI/CD pipeline for staging environment',
      '.AssignedTo': 'Alex Johnson'
    })
  }
};

export const Complete: Story = {
  args: {
    getPConnect: createMockPConnect({
      '.ProgressPercent': 100,
      '.DueDate': 'March 20th',
      '.TaskTitle': 'Deploy final release to production',
      '.AssignedTo': 'Maria Garcia'
    })
  }
};

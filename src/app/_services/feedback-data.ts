import { Feedback } from '../models/feedback';

export const feedbackData: Feedback[] = [
  {
    id: 'feed-1',
    title: 'More Projects with different ideas',
    category: 'enhancement',
    description:
      'More Projects with different ideas will help developers working in real project',
    votes: 136,
    status: 'suggestion',
    comments: [
      {
        id: 'comment-1',
        content: 'Good idea, I hope we can see that soon',
        userId: 'user-1',
        replyTo: null,
      },
      {
        id: 'comment-2',
        content: 'Awesome idea',
        userId: 'user-2',
        replyTo: null,
      },
      {
        id: 'comment-3',
        content: 'very good idea',
        userId: 'user-3',
        replyTo: null,
      },
      {
        id: 'comment-4',
        content: 'yes, we need that to can simulate real project',
        userId: 'user-4',
        replyTo: null,
      },
      /////////////////////// nested Comments to comment-1
      {
        id: 'comment-5',
        content: 'I agree with you',
        userId: 'user-4',
        replyTo: 'comment-1',
      },
      {
        id: 'comment-6',
        content: 'Nice :)',
        userId: 'user-3',
        replyTo: 'comment-1',
      },
      {
        id: 'comment-7',
        content: 'simply dummy text of the printing and typesetting industry',
        userId: 'user-2',
        replyTo: 'comment-1',
      },
      //////////////////////////// more nested to comment-5 as comment-1
      {
        id: 'comment-9',
        content:
          'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
        userId: 'user-3',
        replyTo: 'comment-5',
      },
    ],
  },
  {
    id: 'feed-2',
    title: 'Add a dark theme option',
    category: 'feature',
    description:
      'It would help people with light sensitivities and who prefer dark mode.',
    votes: 10,
    status: 'suggestion',
    comments: [],
  },
  {
    id: 'feed-3',
    title: 'Add image/video upload to feedback',
    category: 'enhancement',
    description: 'Images and screencasts can enhance comments on solutions.',
    votes: 22,
    status: 'suggestion',
    comments: [],
  },
  {
    id: 'feed-4',
    title: 'Preview images not loading',
    category: 'bug',
    description:
      'Challenge preview images are missing when you apply a filter.',
    votes: 5,
    status: 'suggestion',
    comments: [],
  },
  {
    id: 'feed-5',
    title: 'More comprehensive reports',
    category: 'feature',
    description:
      'It would be great to see a more detailed breakdown of solutions.',
    votes: 5,
    status: 'planned',
    comments: [],
  },
  {
    id: 'feed-6',
    title: 'Learning paths',
    category: 'feature',
    description:
      'Sequenced projects for different goals to help people improve.',
    votes: 17,
    status: 'planned',
    comments: [],
  },
  {
    id: 'feed-7',
    title: 'One-click portfolio generation',
    category: 'feature',
    description:
      'Add ability to create professional looking portfolio from profile.',
    votes: 30,
    status: 'in-progress',
    comments: [],
  },
  {
    id: 'feed-8',
    title: 'Bookmark challenges',
    category: 'feature',
    description: 'Be able to bookmark challenges to take later on.',
    votes: 9,
    status: 'in-progress',
    comments: [],
  },
  {
    id: 'feed-9',
    title: 'Add micro-interactions',
    category: 'enhancement',
    description: 'Small animations at specific points can add delight.',
    votes: 33,
    status: 'live',
    comments: [],
  },
];

export const getFeedback = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(feedbackData);
    }, 300);
  });
};

import { Feedback } from '../models/feedback';

let Users = {
  'user-1': {
    id: 'user-1',
    userName: 'khaled123',
    fullName: 'khaled ahmad',
    image: 'user-1',
  },
  'user-2': {
    id: 'user-2',
    userName: 'ali987',
    fullName: 'Ali Ali',
    image: 'user-2',
  },
  'user-3': {
    id: 'user-3',
    userName: 'mohammad976',
    fullName: 'Mohammad Khaled',
    image: 'user-3',
  },
  'user-4': {
    id: 'user-4',
    userName: 'sami3868',
    fullName: 'Sami Abed',
    image: 'user-4',
  },
};

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
        userInfo: Users['user-1'],
        replies: [
          {
            id: 'comment-5',
            content: 'I agree with you',
            userInfo: Users['user-4'],
            replies: [
              {
                id: 'comment-9',
                content:
                  'Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
                userInfo: Users['user-3'],
              },
            ],
          },
          {
            id: 'comment-6',
            content: 'Nice :)',
            userInfo: Users['user-3'],
          },
          {
            id: 'comment-7',
            content:
              'simply dummy text of the printing and typesetting industry',
            userInfo: Users['user-2'],
          },
        ],
      },
      {
        id: 'comment-2',
        content: 'Awesome idea',
        userInfo: Users['user-2'],
      },
      {
        id: 'comment-3',
        content: 'very good idea',
        userInfo: Users['user-3'],
      },
      {
        id: 'comment-4',
        content: 'yes, we need that to can simulate real project',
        userInfo: Users['user-4'],
      },
    ],
  },
  {
    id: 'feed-2',
    title: 'Add a dark theme option',
    category: 'feature',
    description:
      'It would help people with light sensitivities and who prefer dark mode.',
    votes: 31,
    status: 'in-progress',
    comments: [
      {
        id: 'comment-1',
        content: 'Good idea',
        userInfo: Users['user-2'],
      },
      {
        id: 'comment-2',
        content: 'very nice!',
        userInfo: Users['user-2'],
      },
    ],
  },
  {
    id: 'feed-3',
    title: 'Add image/video upload to feedback',
    category: 'enhancement',
    description: 'Images and screencasts can enhance comments on solutions.',
    votes: 40,
    status: 'planned',
    comments: [
      {
        id: 'comment-1',
        content: 'Good idea',
        userInfo: Users['user-3'],
      },
    ],
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

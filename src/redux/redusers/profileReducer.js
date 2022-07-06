/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
const initialState = {
  userInfo: {
    id: 12345,
    name: 'Gustav Header',
    login: '@gustav_header',
    birthday: '25.05.1986',
    city: 'Amsterdam',
    website: 'none',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa quam tempore unde totam ipsum quis aspernatur et reprehenderit ad iure aliquam dicta, officia, praesentium illum cum nisi! Excepturi, a!',
    photo: 'https://images.squarespace-cdn.com/content/v1/5b6a682125bf02f85e285689/1546478840771-HG0TE1RQUIZGUHHY2TKW/edited.jpg?format=1000w',
  },
  posts: [
    {
      id: 1,
      date: '30 May 2022',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo culpa repellat.',
      likesCount: 42,
      commentsCount: 0,
    },
    {
      id: 2,
      date: '5 May 2022',
      text: 'I would like to buy a hamburger...',
      likesCount: 31,
      commentsCount: 2,
    },
    {
      id: 3,
      date: '26 April 2022',
      text: 'Hello there!',
      likesCount: 3,
      commentsCount: 0,
    },
  ],
};

const profileReducer = (state = initialState, action) => state;

export default profileReducer;

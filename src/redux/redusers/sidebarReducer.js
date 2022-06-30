/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
const initialState = {
  friends: [
    {
      id: 1,
      name: 'Emma Watson',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
    },
    {
      id: 2,
      name: 'Carlo Ancelotti',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
    },
  ],
};

const sidebarReducer = (state = initialState, action) => state;

export default sidebarReducer;

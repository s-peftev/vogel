/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
const ACTIONS = {
  SET_PROFILE_INFO: 'SET_PROFILE_INFO',
  TOGGLE_PROFILE_INFO_IS_FETCHING: 'TOGGLE_PROFILE_INFO_IS_FETCHING',
};

const initialState = {
  isFetching: false,
  profileInfo: {},
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

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: { ...action.profileInfo },
      };
    case ACTIONS.TOGGLE_PROFILE_INFO_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setProfileInfo = (profileInfo) => ({ type: ACTIONS.SET_PROFILE_INFO, profileInfo });
export const toggleProfileInfoIsFetching = (isFetching) => ({
  type: ACTIONS.TOGGLE_PROFILE_INFO_IS_FETCHING, isFetching,
});

export default profileReducer;

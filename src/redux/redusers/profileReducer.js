/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import { profileAPI } from '../../api/api';
import { authUser } from './authReducer';

const ACTIONS = {
  SET_PROFILE_INFO: 'SET_PROFILE_INFO',
  SET_PROFILE_PHOTO: 'SET_PROFILE_PHOTO',
  TOGGLE_PROFILE_INFO_IS_FETCHING: 'TOGGLE_PROFILE_INFO_IS_FETCHING',
  TOGGLE_MAIN_PHOTO_CHANGING_IS_FETCHING: 'TOGGLE_MAIN_PHOTO_CHANGING_IS_FETCHING',
};

const initialState = {
  profileInfoIsFetching: false,
  mainPhotoChangingIsFetching: false,
  profileInfo: {
    photo: '',
    name: '',
    login: '',
    birthday: '',
    city: '',
    website: '',
    about: '',
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

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: { ...action.profileInfo },
      };
    case ACTIONS.SET_PROFILE_PHOTO:
      return {
        ...state,
        profileInfo: { ...state.profileInfo, photo: action.profilePhoto },
      };
    case ACTIONS.TOGGLE_PROFILE_INFO_IS_FETCHING:
      return {
        ...state,
        profileInfoIsFetching: action.isFetching,
      };
    case ACTIONS.TOGGLE_MAIN_PHOTO_CHANGING_IS_FETCHING:
      return {
        ...state,
        mainPhotoChangingIsFetching: action.isFetching,
      };
    default:
      return state;
  }
};

const setProfileInfo = (profileInfo) => ({ type: ACTIONS.SET_PROFILE_INFO, profileInfo });
const setProfilePhoto = (profilePhoto) => ({ type: ACTIONS.SET_PROFILE_PHOTO, profilePhoto });
const toggleProfileInfoIsFetching = (isFetching) => ({
  type: ACTIONS.TOGGLE_PROFILE_INFO_IS_FETCHING, isFetching,
});
const toggleIsFetchingMainPhotoChanging = (isFetching) => ({
  type: ACTIONS.TOGGLE_MAIN_PHOTO_CHANGING_IS_FETCHING, isFetching,
});

export const getProfileInfo = (userId) => (dispatch) => {
  dispatch(toggleProfileInfoIsFetching(true));
  profileAPI.getProfileInfo(userId).then((data) => {
    dispatch(toggleProfileInfoIsFetching(false));
    dispatch(setProfileInfo(data));
  });
};

export const changeMainPhoto = (photo) => (dispatch) => {
  dispatch(toggleIsFetchingMainPhotoChanging(true));
  profileAPI.saveNewMainPhoto(photo).then((data) => {
    dispatch(toggleProfileInfoIsFetching(false));
    if (data.resultCode === 0) {
      dispatch(setProfilePhoto(data.photo));
      dispatch(authUser());
    }
  });
};

export default profileReducer;

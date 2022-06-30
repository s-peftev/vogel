/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
const ACTIONS = {
  INPUT_MESSAGE: 'INPUT_MESSAGE',
  SEND_MESSAGE: 'SEND_MESSAGE',
};

const initialState = {
  dialogs: [
    {
      id: 1,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
      name: 'Emma Watson',
    },
    {
      id: 2,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
      name: 'Carlo Ancelotti',
    },
  ],
  messages: [
    {
      id: 1,
      text: 'Hello',
      isUsersMessage: false,
    },
    {
      id: 2,
      text: 'What are u doing next Sat?',
      isUsersMessage: false,
    },
    {
      id: 3,
      text: 'if u know what i mean))))',
      isUsersMessage: false,
    },
    {
      id: 4,
      text: 'i like the way u think))',
      isUsersMessage: true,
    },
    {
      id: 5,
      text: 'so???))',
      isUsersMessage: false,
    },
  ],
  messageInput: '',
  messageInputPlaceholder: 'Write a message...',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_MESSAGE:
      return {
        ...state,
        messageInput: action.inputedText,
      };
    case ACTIONS.SEND_MESSAGE:
      const newMessage = {
        id: 6,
        text: state.messageInput,
        isUsersMessage: true,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        messageInput: '',
      };
    default:
      return state;
  }
};

export const inputMessageAction = (inputedText) => ({ type: ACTIONS.INPUT_MESSAGE, inputedText });
export const sendMessageAction = () => ({ type: ACTIONS.SEND_MESSAGE });

export default messagesReducer;

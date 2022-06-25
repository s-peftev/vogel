const ACTIONS = {
    INPUT_MESSAGE: 'INPUT_MESSAGE',
    SEND_MESSAGE: 'SEND_MESSAGE',
};

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INPUT_MESSAGE:
            state.messageInput = action.inputedText;
            return state;
        case ACTIONS.SEND_MESSAGE:
            const newMessage = {
                id: 6,
                text: state.messageInput,
                isUsersMessage: true,
            };
            state.messages.push(newMessage);
            state.messageInput = '';
            return state;
        default:
            return state;
    }
}

export const inputMessageAction = (inputedText) => ({ type: ACTIONS.INPUT_MESSAGE, inputedText });
export const sendMessageAction = () => ({ type: ACTIONS.SEND_MESSAGE });

export default messagesReducer;
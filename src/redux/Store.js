import headerReducer from './redusers/headerReducer.js';
import profileReducer from './redusers/profileReducer.js';
import messagesReducer from './redusers/messagesReducer.js';
import sidebarReducer from './redusers/sidebarReducer.js';

class Store {
    constructor() {
        this._state = {
            header: {
                burger_menu: {
                    isActive: false,
                }
            },
            content: {
                profilePage: {
                    user_info: {
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
                            name: 'Gustav Header',
                            login: '@gustav-header',
                            photo: 'https://images.squarespace-cdn.com/content/v1/5b6a682125bf02f85e285689/1546478840771-HG0TE1RQUIZGUHHY2TKW/edited.jpg?format=1000w',
                            date: '30 May 2022',
                            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo culpa repellat.',
                            likes_count: '42',
                            comments_count: '2',
                        },
                        {
                            id: 2,
                            name: 'Emma Watson',
                            login: '@emma-watson',
                            photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
                            date: '5 May 2022',
                            text: 'Hello! Glad to see you here!',
                            likes_count: '31',
                            comments_count: '0',
                        },
                        {
                            id: 3,
                            name: 'Carlo Ancelotti',
                            login: '@mrancelotti',
                            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
                            date: '26 April 2022',
                            text: 'Hello there! See my Instagram photos and videos! (@mrancelotti)',
                            likes_count: '3',
                            comments_count: '0',
                        },
                    ]
                },
                messagesPage: {
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
                }
            },
            sidebar: {
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
                ]
            },
        };
    };

    getState() {
        return this._state;
    };

    dispatch = (action) => {
        this._state.header = headerReducer(this._state.header, action);
        this._state.content.profilePage = profileReducer(this._state.content.profilePage, action);
        this._state.content.messagesPage = messagesReducer(this._state.content.messagesPage, action);
        this._state.content.sidebar = sidebarReducer(this._state.content.sidebar, action);

        this._observer(this);
    };

    subscribe = (observer) => {
        this._observer = observer;
    }
};

export default Store;
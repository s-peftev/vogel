import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const user_info = {
  id: 12345,
  name: 'Gustav Header',
  login: '@gustav_header',
  birthday: '25.05.1986',
  city: 'Amsterdam',
  website: 'none',
  about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa quam tempore unde totam ipsum quis aspernatur et reprehenderit ad iure aliquam dicta, officia, praesentium illum cum nisi! Excepturi, a!',
  photo: 'https://images.squarespace-cdn.com/content/v1/5b6a682125bf02f85e285689/1546478840771-HG0TE1RQUIZGUHHY2TKW/edited.jpg?format=1000w',
}

const posts = [
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

const dialogs = [
  {
    id: 1,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
    name: 'Emma Watson',
  },
  {
    id: 2,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
    name: 'Carlo Ancelotti',
  }
];

const messages = [
  {
    id: 1,
    text: 'Hello',
  },
  {
    id: 2,
    text: 'What are u doing next Sat?',
  },
  {
    id: 3,
    text: '=)',
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App user_info={user_info} posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

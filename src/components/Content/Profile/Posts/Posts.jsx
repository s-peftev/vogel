import React from 'react';
import NewPost from './NewPost/NewPost.jsx';
import Post from './Post/Post.jsx';
import s from './Posts.module.css';

class Posts extends React.Component {
  render() {
    const { parrentClass } = this.props;

    const post1Props = {
      name: 'Gustav Header',
      login: '@gustav-header',
      photo: 'https://images.squarespace-cdn.com/content/v1/5b6a682125bf02f85e285689/1546478840771-HG0TE1RQUIZGUHHY2TKW/edited.jpg?format=1000w',
      date: '30 May 2022',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo culpa repellat.',
      likes_count: '42',
      comments_count: '2',
    }
    const post2Props = {
      name: 'Emma Watson',
      login: '@emma-watson',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg',
      date: '5 May 2022',
      text: 'Hello! Glad to see you here!',
      likes_count: '31',
      comments_count: '0',
    }
    const post3Props = {
      name: 'Carlo Ancelotti',
      login: '@mrancelotti',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg',
      date: '26 April 2022',
      text: 'Hello there! See my Instagram photos and videos! (@mrancelotti)',
      likes_count: '3',
      comments_count: '0',
    }

    return (
      <div className={`${parrentClass} ${s.posts}`}>
        <NewPost parrentClass={s.new_post} />
        <Post parrentClass={s.post} {...post1Props} />
        <Post parrentClass={s.post} {...post2Props}/>
        <Post parrentClass={s.post} {...post3Props}/>
      </div>
    );
  }
}

export default Posts;
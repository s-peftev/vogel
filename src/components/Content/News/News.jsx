import React from 'react';
import s from './News.module.css';

class News extends React.Component {
  render() {
    const { parrentClass } = this.props;
    return (
      <main className={`${parrentClass} ${s.news}`}>
        News HERE
      </main>
    );
  }
}
  
export default News;
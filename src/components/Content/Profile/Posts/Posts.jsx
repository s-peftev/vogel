import NewPost from './NewPost/NewPost.jsx';
import Post from './Post/Post.jsx';
import s from './Posts.module.css';

const Posts = (props) => {
    return (
      <div className={`${props.parrentClass} ${s.posts}`}>
        <NewPost parrentClass={s.new_post} />
        <Post parrentClass={s.post} name='Gustav Header' login='@gustav-header' photo='https://images.squarespace-cdn.com/content/v1/5b6a682125bf02f85e285689/1546478840771-HG0TE1RQUIZGUHHY2TKW/edited.jpg?format=1000w' date='30 May 2022' text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo culpa repellat. Cumque autem ipsum officiis laboriosam debitis quasi fugit, ut provident mollitia, corrupti, consequatur iure saepe. Nostrum, nisi quaerat!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sunt eum commodi a voluptates reiciendis consectetur corporis sint, eligendi facilis cumque architecto, impedit suscipit corrupti, consequuntur aspernatur at cum voluptatum.
            Sunt dolorum repellendus deserunt, nemo quo sed est debitis, fuga hic fugit doloribus velit totam ipsam cumque quos ab harum. Amet perferendis quidem error itaque laboriosam, adipisci cum cumque nam.
            Lorem ipsum dolor sit amet." likes_count='42' comments_count='2' />
        <Post parrentClass={s.post} name='Emma Watson' login='@emma-watson' photo='https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg' date='5 May 2022' text='Hello! Glad to see you here!' likes_count='31' comments_count='0'/>
        <Post parrentClass={s.post} name='Carlo Ancelotti' login='@mrancelotti' photo='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/640px-Carlo_Ancelotti_2016_%28cropped%29.jpg' date='26 April 2022' text='Hello there! See my Instagram photos and videos! (@mrancelotti)' likes_count='3' comments_count='0'/>
      </div>
    );
  }
  
  export default Posts;
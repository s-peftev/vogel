import s from './Post.module.css';

function Post() {
    return (
      <div className={s.post}>
        <div className={s.photo}>
          <img src='https://images.squarespace-cdn.com/content/v1/5b6a682125bf02f85e285689/1546478840771-HG0TE1RQUIZGUHHY2TKW/edited.jpg?format=1000w' alt='post avatar'></img>
        </div>
        <div className={s.body}>
          <div className={s.header}>
            <div className={s.user}>
              <h6 className={s.name}>Gustav Header</h6>
              <p className={s.login}>@gustav-header</p>
            </div>
            <p className={s.date}>30 May</p>
          </div>
          <div className={s.content}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo culpa repellat. Cumque autem ipsum officiis laboriosam debitis quasi fugit, ut provident mollitia, corrupti, consequatur iure saepe. Nostrum, nisi quaerat!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sunt eum commodi a voluptates reiciendis consectetur corporis sint, eligendi facilis cumque architecto, impedit suscipit corrupti, consequuntur aspernatur at cum voluptatum.
            Sunt dolorum repellendus deserunt, nemo quo sed est debitis, fuga hic fugit doloribus velit totam ipsam cumque quos ab harum. Amet perferendis quidem error itaque laboriosam, adipisci cum cumque nam.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Post;
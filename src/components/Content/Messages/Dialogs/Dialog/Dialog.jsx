import { NavLink } from 'react-router-dom';
import css from './Dialog.module.css';

const Dialog = (props) => {
  const { parrentClass, id, photo, name } = props;

  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? `${parrentClass} ${css.dialog} ${css.active}` : `${parrentClass} ${css.dialog}`;
      }}
      to={`${id}`}
    >
      <div className={css.photo}>
        <img src={photo} alt="" />
      </div>
      <div className={css.name}>
        <p>{name}</p>
      </div>
    </NavLink>
  );
};

export default Dialog;
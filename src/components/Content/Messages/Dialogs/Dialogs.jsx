import css from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';

const Dialogs = (props) => {
  const { dialogs } = props;

  const dialogElements = dialogs
    .map((dialog) =>
      <Dialog
        key={dialog.id}
        parrentClass={css.dialog}
        {...dialog}
      />)

  return (
    <div className={css.dialogs}>
      {dialogElements}
    </div>
  );
};

export default Dialogs;
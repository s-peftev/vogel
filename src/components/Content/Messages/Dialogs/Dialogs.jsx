import React from 'react';
import PropTypes from 'prop-types';
import css from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';

const Dialogs = (props) => {
  const { dialogs } = props;

  const dialogElements = dialogs
    .map((dialog) => <Dialog
        key={dialog.id}
        parrentClass={css.dialog}
        {...dialog}
      />);

  return (
    <div className={css.dialogs}>
      {dialogElements}
    </div>
  );
};

Dialogs.propTypes = {
  dialogs: PropTypes.array.isRequired,
};

export default Dialogs;

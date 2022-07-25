import { connect } from 'react-redux';
import Dialogs from './Dialogs.jsx';
import * as selector from '../../../../redux/selectors';

const mapStateToProps = (state) => ({
  dialogs: selector.selectDialogs(state),
});

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;

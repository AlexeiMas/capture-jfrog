import { connect } from 'react-redux';
import Self from './ModalFooter';
import { hideModal } from '../../../../actions/modal/Modal.actions';

const mapDispatchToProps = {
  hideModal,
};

export default connect(null, mapDispatchToProps)(Self);

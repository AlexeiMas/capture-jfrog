import { IRootState } from '../../store/store';
import { connect } from 'react-redux';

import Self from './Modal';
import { hideModal } from '../../actions/modal/Modal.actions';

const mapStateToProps = ({ modal }: IRootState) => ({
  ModalComponent: modal.ModalComponent,
  componentProps: modal.componentProps,
  isVisible: modal.isVisible,
  modalIsHiding: modal.modalIsHiding,
});

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Self);

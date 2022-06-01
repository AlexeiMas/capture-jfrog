import { connect } from 'react-redux';
import Self from './EndOfGameModal';
import { hideModal } from '../../../../actions/modal/Modal.actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Self);

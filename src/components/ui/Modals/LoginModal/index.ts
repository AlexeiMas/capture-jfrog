import { connect } from 'react-redux';
import { IRootState } from '../../../../store/store';
import Self from './LoginModal';
import { hideModal } from '../../../../actions/modal/Modal.actions';

const mapStateToProps = (state: IRootState) => ({});

const mapDispatchToProps = { hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(Self);

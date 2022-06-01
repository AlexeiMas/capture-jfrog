import { connect } from 'react-redux';

import { SunWheel as Self } from './SunWheel';
import { showModal } from '../../actions/modal/Modal.actions';
import { getTask } from '../../actions/rubricPage/RubricPage.actions';

const mapDispatchToProps = {
  showModal,
  getTask,
};

export const SunWheel = connect(
  null,
  mapDispatchToProps
)(Self);

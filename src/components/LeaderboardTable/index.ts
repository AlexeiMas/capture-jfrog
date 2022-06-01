import { connect } from 'react-redux';

import { LeaderboardTable as Self } from './LeaderboardTable';
import { showModal } from '../../actions/modal/Modal.actions';

const mapDispatchToProps = {
  showModal,
};

export const LeaderboardTable = connect(
  null,
  mapDispatchToProps
)(Self);

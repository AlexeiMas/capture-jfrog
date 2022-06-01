import { connect } from 'react-redux';
import Self from './LeaderboardLayout';
import { IRootState } from '../../../store/store';

const mapStateToProps = (state: IRootState) => ({
});

export default connect(mapStateToProps)(Self);

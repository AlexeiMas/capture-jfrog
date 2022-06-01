import { connect } from 'react-redux';
import { LeaderboardPage as Self } from './LeaderboardPage';
import { getRatingItems } from '../../actions/leaderboardPage/leaderboardPage.actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  getRatingItems,
};

const LeaderboardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Self);

export default LeaderboardPage;

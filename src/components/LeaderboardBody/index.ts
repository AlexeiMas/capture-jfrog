import { connect } from 'react-redux';

import { LeaderboardBody as Self } from './LeaderboardBody';
import { getRatingItems } from '../../actions/leaderboardPage/leaderboardPage.actions';
import { IRootState } from '../../store/store';

const mapStateToProps = ({ leaderboardPage }: IRootState) => ({
  getLeaderboardItemsData: leaderboardPage.getLeaderboardItemsData,
  currentPage: leaderboardPage.currentPage, 
  pagesCount: leaderboardPage.pagesCount,
});

const mapDispatchToProps = {
  getRatingItems,
};

export const LeaderboardBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Self);

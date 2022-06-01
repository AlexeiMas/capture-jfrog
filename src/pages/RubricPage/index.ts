import { connect } from 'react-redux';
import { IRootState } from '../../store/store';
import { RubricPage as Self } from './RubricPage';
import { showModal } from "../../actions/modal/Modal.actions";
import { getСontests } from "../../actions/user/User.actions";
import { joinСontest, getNominations, getTasksSponsors, getRandomTask } from '../../actions/rubricPage/RubricPage.actions';

const mapStateToProps = ({ user, rubricPage, app }: IRootState) => ({
  getContestsError: user.getContestsError,
  getContestsData: user.getContestsData,
  joinContestError: rubricPage.joinContestError,
  getNominationsData: rubricPage.getNominationsData,
  getNominationsError: rubricPage.getNominationsError,
  getTasksSponsorsData: rubricPage.getTasksSponsorsData,
  getContestsInfoData: app.getContestsInfoData,
});

const mapDispatchToProps = {
  showModal,
  getСontests,
  joinСontest,
  getNominations,
  getTasksSponsors,
  getRandomTask,
};

const RubricPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Self);

export default RubricPage;

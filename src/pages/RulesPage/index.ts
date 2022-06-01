import {showModal} from "actions/modal/Modal.actions";
import { connect } from 'react-redux';
import { RulesPage as Self } from './RulesPage';
import { IRootState } from '../../store/store';

const mapStateToProps = ({ app, user }: IRootState) => ({
  getContestsInfoData: app.getContestsInfoData,
  token: user.token
});

const mapDispatchToProps = {
  showModal,
};

const RulestPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Self);

export default RulestPage;

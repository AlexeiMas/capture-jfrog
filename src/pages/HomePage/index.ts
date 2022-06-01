import {setToken} from "actions/user/User.actions";
import { connect } from 'react-redux';
import { HomePage as Self } from './HomePage';
import { IRootState } from '../../store/store';
import { showModal } from '../../actions/modal/Modal.actions';

const mapStateToProps = ({ app, user }: IRootState) => ({
  getContestsInfoData: app.getContestsInfoData,
  token: user.token,
});

const mapDispatchToProps = {
  showModal,
  setToken,
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(Self);

export default HomePage;

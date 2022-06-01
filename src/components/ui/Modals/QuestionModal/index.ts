import { connect } from 'react-redux';
import { IRootState } from '../../../../store/store';
import Self from './QuestionModal';
import { hideModal } from '../../../../actions/modal/Modal.actions';
import { sendReanswer, getNominations } from '../../../../actions/rubricPage/RubricPage.actions';

const mapStateToProps = (state: IRootState) => ({
  currentTask: state.rubricPage.getTaskData,
  sendAnswerLoading: state.rubricPage.sendAnswerLoading,
  sendAnswerData: state.rubricPage.sendAnswerData,
});

const mapDispatchToProps = {
  hideModal,
  getNominations,
  sendReanswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Self);

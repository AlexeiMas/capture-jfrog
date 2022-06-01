import React, { useState } from 'react';
import AnswerButton from '../../AnswerButton';
import ModalContainer from '../../../Modal/components/ModalContainer';
import { IoClose } from 'react-icons/io5';

import * as S from './QuestionModal.styles';
import { INomination, IReanswerSolution, ITask } from '../../../../reducers/RubricPage.reducer';

export interface IQuestionModal {
  sendReanswer: (contest_id: number, nomination_id: number, task_id: number, answer: number, onSuccess?: (data: IReanswerSolution) => void) => any;
  getNominations: (contest_id: number) => any;
  currentTask: ITask | null;
  sendAnswerLoading: boolean;
  sendAnswerData: IReanswerSolution | null;
  nomination: INomination;
  contest_id: number;
  nomination_id: number;
  task_id: number;
  hideModal: any;
  img?: string;
  type?: string;
  label?: string;
}

const QuestionModal: React.FC<IQuestionModal> = ({
  sendReanswer,
  getNominations,
  currentTask,
  sendAnswerData,
  sendAnswerLoading,
  nomination,
  hideModal,
  img,
  type,
  label,
}: IQuestionModal) => {

  const getFromString = (html: string) => {
    return (
      <div className="content" dangerouslySetInnerHTML={{ __html: html }}></div>
    );
  }

  const [selected, setSelected] = useState<number>()
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleAnswer = (answer: number, contest_id: number, nomination_id: number, task_id: number) => {
    setSelected(answer);
    if (!disabled) {
      sendReanswer(nomination.contest_id, nomination_id, task_id, answer, (data) => {
        setDisabled(true);
        if (data.is_right) {
          getNominations(contest_id);
        }
      });
    }
  }

  return (
    <ModalContainer>
      <S.HeaderWrap>
        {img && type !== "sponsor" ? <S.HeaderImg src={img} /> : ''}
        {label ? <S.HeaderSpan>{label}</S.HeaderSpan> : ''}
      </S.HeaderWrap>
      <S.CloseButton onClick={hideModal}><IoClose /></S.CloseButton>
      <S.QuestionModalWrapper>
        {currentTask ?
          <S.ContentWrapper>
            <S.WelcomeContainer>
              {getFromString(currentTask.description)}
            </S.WelcomeContainer>
            {currentTask.options.map((option, index) => {
              if (sendAnswerData && !sendAnswerLoading && sendAnswerData.solution.task_id === currentTask.id) {
                if (selected !== undefined && sendAnswerData.is_right && index === selected) {
                  return (<AnswerButton disabled={disabled} key={option} numeration={index + 1} onClick={() =>
                    handleAnswer(index, nomination.contest_id, nomination.id, currentTask.id)
                  } type="true">{option}</AnswerButton>)
                } else if (selected !== undefined && !sendAnswerData.is_right && index === selected) {
                  return (
                    <AnswerButton disabled={disabled} key={option} numeration={index + 1} onClick={() =>
                      handleAnswer(index, nomination.contest_id, nomination.id, currentTask.id)
                    } type="false">{option}</AnswerButton>
                  )
                }
              }

              if (selected !== undefined && selected === index && sendAnswerLoading) {
                return (<AnswerButton disabled={disabled} key={option} numeration={index + 1} onClick={() =>
                  handleAnswer(index, nomination.contest_id, nomination.id, currentTask.id)
                } type="active">{option}</AnswerButton>)
              } else {
                return (
                  <AnswerButton disabled={disabled} key={option} numeration={index + 1} onClick={() =>
                    handleAnswer(index, nomination.contest_id, nomination.id, currentTask.id)} >{option}</AnswerButton>
                )
              }
            })}
            {img && type === "sponsor" ? <S.FooterImg src={img} /> : ''}
          </S.ContentWrapper>
          :
          <S.ContentWrapper style={{ opacity: 0 }}>
            <S.WelcomeContainer>
              Who built C-3po
            </S.WelcomeContainer>
            <AnswerButton numeration={1} type='false'>R2D2</AnswerButton>
            <AnswerButton numeration={2} type='true'>Gollum</AnswerButton>
            <AnswerButton numeration={3} type='active'>Boba fett</AnswerButton>
            <AnswerButton numeration={4} >Jabba</AnswerButton>
          </S.ContentWrapper>}
      </S.QuestionModalWrapper>
    </ModalContainer>
  );
};

export default QuestionModal;

import LoginModal from "components/ui/Modals/LoginModal/LoginModal";
import {PATH_RUBRIC} from "helpers/urlList";
import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import CommonLayout from '../../components/Layout/CommonLayout';
import { InfoBody } from "../../components/InfoBody";
import * as S from './RulesPage.styles';
import AstroFrogImage from '../../assets/frog_1.svg';
import { Helmet } from "react-helmet-async";
import { RulesDescription, RegistrationIsOver } from "../../helpers/descriptions";
import { IContestInfo } from "../../reducers/App.reducer";
import { RegistrationOverBody } from "../../components/RegistrationOverBody";

interface IRulesPageProps {
  token: string | null;
  showModal: Function;
  getContestsInfoData: IContestInfo | null;
}

export const RulesPage: React.FunctionComponent<IRulesPageProps> = ({ token, showModal, getContestsInfoData }: IRulesPageProps) => {
  const navigate = useNavigate();

  const playCallback = useCallback(() => {
    if (token) {
      navigate(PATH_RUBRIC);
    } else {
      showModal(LoginModal, { state: 'sign-up' }, 'login');
    }
  }, [navigate, showModal, token]);
  return (
    <CommonLayout>
      <Helmet>
        <title>Rules - Capture the frog</title>
      </Helmet>
      <S.RulesPageWrapper>
        <S.Container>
          <S.Body>
            {getContestsInfoData ?
              new Date(getContestsInfoData.end_date) < new Date() ?
                <RegistrationOverBody
                  smallText={RegistrationIsOver.headerText}
                  largeText={RegistrationIsOver.subtext}
                  description={RegistrationIsOver.description}
                /> :
                <InfoBody
                  smallText={RulesDescription.headerText}
                  largeText={RulesDescription.subtext}
                  description={RulesDescription.description}
                  onPlay={playCallback}
                />
              : ""}
          </S.Body>
        </S.Container>
      </S.RulesPageWrapper>
      <S.AstroFrogEarth />
      <S.AstroFrog src={AstroFrogImage} />
    </CommonLayout>
  )
}

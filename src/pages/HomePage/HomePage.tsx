import {PATH_RUBRIC} from "helpers/urlList";
import React, {useCallback, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import CommonLayout from '../../components/Layout/CommonLayout';
import { InfoBody } from "../../components/InfoBody";
import * as S from './HomePage.styles';
import AstroFrogImage from "../../assets/frog_1.svg";
import { Helmet } from "react-helmet-async";
import { HomeDescription, RegistrationIsOver } from "../../helpers/descriptions";
import { RegistrationOverBody } from "../../components/RegistrationOverBody";
import { IContestInfo } from "../../reducers/App.reducer";
import SocialImage from "../../assets/social_image.png";
import LoginModal from 'components/ui/Modals/LoginModal/LoginModal';

const APP_URL = process.env.REACT_APP_URL;

interface IHomePage {
  token: string | null;
  showModal: Function;
  setToken: (token: string) => void;
  getContestsInfoData: IContestInfo | null;
}

export const HomePage: React.FC<IHomePage> = ({ token, showModal, setToken, getContestsInfoData }: IHomePage) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // We need to handle token this way to use oauth redirects from sso and embedded versions
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setToken(token)
      navigate(PATH_RUBRIC);
    }
  }, [navigate, searchParams, setToken]);

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
        <title>Home - Capture the frog</title>
        <meta property="og:title" content="JFrog - Capture the frog" />
        <meta property="og:description" content="Your mission… to Capture the Frog starts now! Each planet is a question relating to a JFrog developer tool and varies in difficulty" />
        <meta property="og:image" content={`${APP_URL}${SocialImage}`} />
      </Helmet>
      <S.HomePageWrapper>
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
                  smallText={HomeDescription.headerText}
                  largeText={HomeDescription.subtext}
                  description={HomeDescription.description}
                  onPlay={playCallback}
                />
              : ""}
          </S.Body>
        </S.Container>
      </S.HomePageWrapper>
      <S.AstroFrogEarth />
      <S.AstroFrog src={AstroFrogImage} />
    </CommonLayout>
  );
};

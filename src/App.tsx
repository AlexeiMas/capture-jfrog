import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { RestAPIProvider } from 'pkg/tulula/auth/context';
import Router from './routes';
import { connect } from 'react-redux';
import { IRootState } from './store/store';
import GlobalStyle from './helpers/globalStyles';
import { defaultTheme } from './helpers/themes';
import Modal from './components/Modal';
import './App.css';
import { getContestInfo } from './actions/app/App.actions';
import { setToken } from './actions/user/User.actions';

const CONTEST_ID = process.env.REACT_APP_CONTEST_ID;
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_ENDPOINT;

interface IAppProps {
  getContestInfo: (contest_id: number) => void;
  setToken: (token: string) => void;
  userToken: string | null;
}

const App = ({ getContestInfo, setToken, userToken }: IAppProps) => {
  // Take token from the local storage and initialize in redux.
  // XXX(slava): it's better to use token from redux storage everywhere.
  useEffect(() => {
    if (userToken) {
      return;
    }
    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
      setToken(authToken);
    }
  }, [setToken, userToken]);

  useEffect(() => {
    getContestInfo(CONTEST_ID ? Number(CONTEST_ID) : 6);
  }, [getContestInfo]);

  return (
    <RestAPIProvider host={AUTH_API_URL ? AUTH_API_URL : "https://tulu.la"}>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <Modal />
        <GlobalStyle theme={defaultTheme} />
      </ThemeProvider>
    </RestAPIProvider>
  );
};

const mapStateToProps = ({ app, user }: IRootState) => ({
  getContestsInfoData: app.getContestsInfoData,
  userToken: user.token,
});

const mapDispatchToProps = {
  getContestInfo,
  setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

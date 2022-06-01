import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CommonLayout from '../../components/Layout/CommonLayout';
import * as S from './RubricPage.styles';
import QuestionModal from '../../components/ui/Modals/QuestionModal';
import EndOfGameModal from "../../components/ui/Modals/EndOfGameModal";
import { PlanetButtonTemplate } from '../../components/ui/PlanetButton';
import { INomination, ITaskList, ITaskProps } from "../../reducers/RubricPage.reducer";
import { IContest } from "../../reducers/User.reducer";
import { IContestInfo } from "../../reducers/App.reducer";
import { SunWheel } from '../../components/SunWheel';
import { Helmet } from "react-helmet-async";

import {
  AqlPlanet,
  AutomationPlanet,
  BuildInfoPlanet,
  ConanPlanet,
  IdePluginPlanet,
  IPlanetTemplate,
  JfrogArtifactoryPlanet,
  JfrogCliPlanet,
  JfrogConnectPlanet,
  PipelinesPlanet,
  PrysiaPlanet,
  ReplicationPlanet,
  RestApiXrayPlanet
} from "../../components/ui/PlanetButton/planets";

import {
  Aql,
  Automation,
  BuildInfo,
  Conan,
  IdePlugin,
  JfrogArtifactory,
  JfrogCli,
  JfrogConnect,
  Pipelines,
  Prysia,
  Replication,
  Restapixray
} from "../../helpers/planetsImages";

const CONTEST_ID = process.env.REACT_APP_CONTEST_ID;

interface IRubricPage {
  showModal: Function;
  getСontests: () => void;
  getContestsError: string | null;
  getContestsData: IContest[] | null;
  joinСontest: (contest_id: number, onSuccess?: () => void) => any;
  joinContestError: string | null;
  getNominations: (contest_id: number) => any;
  getNominationsData: INomination[] | null,
  getNominationsError: string | null,
  getTasksSponsors: (contest_id: number, nomination_id: number) => any;
  getRandomTask: (contest_id: number, nomination_id: number, onSuccess?: () => void) => any;
  getTasksSponsorsData: ITaskList[] | null;
  getContestsInfoData: IContestInfo | null;
}

export const RubricPage: React.FC<IRubricPage> = ({
  showModal,
  getСontests,
  getContestsError,
  getContestsData,
  joinСontest,
  joinContestError,
  getNominations,
  getNominationsData,
  getNominationsError,
  getTasksSponsors,
  getTasksSponsorsData,
  getContestsInfoData,
  getRandomTask,
}: IRubricPage) => {

  const [sponsorTasks, setSponsorTasks] = useState<ITaskProps[]>();

  const [sponsorsNomination, setSponsorsNomination] = useState<INomination | undefined>();
  const navigate = useNavigate();
  const contest_id = CONTEST_ID ? Number(CONTEST_ID) : -1;

  useEffect(() => {
    if (getContestsInfoData && new Date(getContestsInfoData.end_date) < new Date()) {
      navigate('/');
    }
  })

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token || getContestsError || joinContestError || getNominationsError) { navigate('/'); }
    getСontests();
  }, [getСontests, getContestsError, joinContestError, getNominationsError, navigate]);

  useEffect(() => {
    if (getContestsData) {
      const contest = getContestsData.find(contest => contest.id === contest_id);
      if (contest) {
        getNominations(contest_id);
      } else {
        joinСontest(contest_id, () => getСontests());
      }
    }
  }, [contest_id, getContestsData, getNominations, getСontests, joinСontest]);

  useEffect(() => {
    if (getNominationsData && getTasksSponsorsData) {
      const nominations = getNominationsData.filter(nomination => nomination.name !== "Planets" && nomination.name !== "Sponsors");
      const sponsorsNomination = getNominationsData.find(nomination => nomination.name === "Sponsors");
      if (nominations.every(nomination => nomination.right_solutions_count > 0 &&
        sponsorsNomination?.right_solutions_count === getTasksSponsorsData.length
      )) {
        showModal(EndOfGameModal, {}, "end-of-game");
      }
    }
  })

  useEffect(() => {
    if (getNominationsData) {
      setSponsorsNomination(getNominationsData.find(nomination => nomination.name === 'Sponsors'));
    }
  }, [getNominationsData]);

  useEffect(() => {
    if (sponsorsNomination) {
      getTasksSponsors(sponsorsNomination.contest_id, sponsorsNomination.id);
    }
  }, [getTasksSponsors, sponsorsNomination]);

  useEffect(() => {
    if (getTasksSponsorsData && sponsorsNomination) {
      setSponsorTasks(getTasksSponsorsData.map(task => {
        return {
          contest_id: contest_id,
          nomination_id: sponsorsNomination.id,
          task_id: task.id,
          scoreNotNull: task.solutions.some(solution => Number(solution.score) > 0)
        }
      }));
    }
  }, [contest_id, getTasksSponsorsData, sponsorsNomination]);


  const commonPlanetProps = {
    getNominationsData,
    getRandomTask,
    contestId: contest_id,
    showModal
  }

  return (
    <CommonLayout>
      <Helmet>
        <title>Game - Capture the frog</title>
      </Helmet>
      <S.PlanetOrbitWrapper>
        <S.PlanetOrbitContainer>
          <S.PlanetOrbit6>
            <Planet key={"pyrsia"} nominationName="Pyrsia"  img={Prysia} template={PrysiaPlanet} {...commonPlanetProps} />
            <Planet key={"AQL"} nominationName="AQL"  img={Aql} template={AqlPlanet} {...commonPlanetProps} />
          </S.PlanetOrbit6>
        </S.PlanetOrbitContainer>
        <S.PlanetOrbitContainer>
          <S.PlanetOrbit5>
            <Planet key={"Xray"} nominationName="Xray"  img={Restapixray} template={RestApiXrayPlanet} {...commonPlanetProps} />
            <Planet key={"Build info"} nominationName="Build info"  img={BuildInfo} template={BuildInfoPlanet} {...commonPlanetProps} />
          </S.PlanetOrbit5>
        </S.PlanetOrbitContainer>
        <S.PlanetOrbitContainer>
          <S.PlanetOrbit4>
            <Planet key={"JFrog Pipelines"} nominationName="JFrog Pipelines"  img={Pipelines} template={PipelinesPlanet} {...commonPlanetProps} />
            <Planet key={"Conan"} nominationName="Conan"  img={Conan} template={ConanPlanet} {...commonPlanetProps} />
          </S.PlanetOrbit4>
        </S.PlanetOrbitContainer>
        <S.PlanetOrbitContainer>
          <S.PlanetOrbit3>
            <Planet key={"Automation"} nominationName="Automation"  img={Automation} template={AutomationPlanet} {...commonPlanetProps} />
            <Planet key={"IDE integration"} nominationName="IDE integration"  img={IdePlugin} template={IdePluginPlanet} {...commonPlanetProps} />
            <Planet key={"JFrog CLI"} nominationName="JFrog CLI"  img={JfrogCli} template={JfrogCliPlanet} {...commonPlanetProps} />
          </S.PlanetOrbit3>
        </S.PlanetOrbitContainer>
        <S.PlanetOrbitContainer>
          <S.PlanetOrbit2>
            <Planet key={"JFrog Connect"} nominationName="JFrog Connect"  img={JfrogConnect} template={JfrogConnectPlanet} {...commonPlanetProps} />
            <Planet key={"Replication"} nominationName="Replication"  img={Replication} template={ReplicationPlanet} {...commonPlanetProps} />
          </S.PlanetOrbit2>
        </S.PlanetOrbitContainer>
        <S.PlanetOrbitContainer>
          <S.PlanetOrbit1>
            <Planet key={"JFrog Artifactory"} nominationName="JFrog Artifactory"  img={JfrogArtifactory} template={JfrogArtifactoryPlanet} {...commonPlanetProps} />
          </S.PlanetOrbit1>
        </S.PlanetOrbitContainer>
      </S.PlanetOrbitWrapper>
      <S.SunWrapper><SunWheel taskProps={sponsorTasks} /></S.SunWrapper>
    </CommonLayout>
  )
}

interface IPlanetProps {
  nominationName: string
  getNominationsData: INomination[] | null
  getRandomTask: (contest_id: number, nomination_id: number, onSuccess?: () => void) => any;
  contestId: number
  showModal: Function;
  img: string
  template: IPlanetTemplate
}

const PlanetComponent = ({getNominationsData, getRandomTask, contestId, nominationName, showModal, img, template}: IPlanetProps) => {
  if (!getNominationsData) {
    return null
  }
  const nomination = getNominationsData.find(nomination => nomination.name === nominationName)
  if (!nomination) {
    return null
  }
  const isFilled = nomination.right_solutions_count > 0;
  return (
    <PlanetButtonTemplate planetTemplate={template} isFilled={isFilled} onClick={() => {
      if (nomination.right_solutions_count === 0) {
        getRandomTask(contestId, nomination.id, () => {
          showModal(QuestionModal, {
            img: img,
            label: template.label,
            nomination: nomination,
          }, "question")
        });
      }
    }} />
  );
}

const Planet = React.memo(PlanetComponent)

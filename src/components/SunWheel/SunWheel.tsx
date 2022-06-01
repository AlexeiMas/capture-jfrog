import React from 'react';
import * as S from './SunWheel.styles';
import DockerLogo from '../../assets/partner-logos/docker.svg';
import DoitInternationalLogo from '../../assets/partner-logos/doit-international.svg';
import DynatraceLogo from '../../assets/partner-logos/dynatrace.svg';
import EnvoLogo from '../../assets/partner-logos/envo.svg';
import FireflyLogo from '../../assets/partner-logos/firefly.svg';
import GoogleCloudLogo from '../../assets/partner-logos/google-cloud.svg';
import LightstepLogo from '../../assets/partner-logos/lightstep.svg';
import MicrosoftLogo from '../../assets/partner-logos/microsoft.svg';
import NginxLogo from '../../assets/partner-logos/nginx.svg';
import PagerdutyLogo from '../../assets/partner-logos/pagerduty.svg';
import QualiLogo from '../../assets/partner-logos/quali.svg';
import ReplicatedLogo from '../../assets/partner-logos/replicated.svg';
import ShipaLogo from '../../assets/partner-logos/shipa.svg';
import TideliftLogo from '../../assets/partner-logos/tidelift.svg';
import CycodeLogo from '../../assets/partner-logos/cycode.svg';
import CodefreshLogo from '../../assets/partner-logos/codefresh.svg';
import CloudNativeLogo from '../../assets/partner-logos/cloud-native.svg';
import CloudbeesLogo from '../../assets/partner-logos/cloudbees.svg';
import CdFoundationLogo from '../../assets/partner-logos/cd-foundation.svg';
import AwsLogo from '../../assets/partner-logos/aws.svg';
import ArnicaLogo from '../../assets/partner-logos/arnica.svg';
import ActivestateLogo from '../../assets/partner-logos/activestate.svg';
import QuestionModal from '../ui/Modals/QuestionModal';
import { ITaskProps } from '../../reducers/RubricPage.reducer';

const partners = [
  {
    logo: DynatraceLogo
  }, {
    logo: AwsLogo
  }, {
    logo: PagerdutyLogo
  }, {
    logo: DoitInternationalLogo
  }, {
    logo: CloudbeesLogo
  }, {
    logo: GoogleCloudLogo
  }, {
    logo: MicrosoftLogo
  }, {
    logo: LightstepLogo
  }, {
    logo: ActivestateLogo
  }, {
    logo: TideliftLogo
  }, {
    logo: ArnicaLogo
  }, {
    logo: ReplicatedLogo
  }, {
    logo: CodefreshLogo
  }, {
    logo: CycodeLogo
  }, {
    logo: EnvoLogo
  }, {
    logo: NginxLogo
  }, {
    logo: ShipaLogo
  }, {
    logo: QualiLogo
  }, {
    logo: CdFoundationLogo
  }, {
    logo: CloudNativeLogo
  }, {
    logo: FireflyLogo
  }, {
    logo: DockerLogo
  },
]

interface ISunWheelProps {
  getTask: (contest_id: number, nomination_id: number, task_id: number, onSuccess?: () => void) => any;
  showModal: Function,
  taskProps: ITaskProps[] | undefined,
}

export const SunWheel: React.FC<ISunWheelProps> = ({
  getTask,
  showModal,
  taskProps,
}: ISunWheelProps) => (
  <S.SunWheelWrapper>
    <S.Sun>
      {partners.map((partner, index) => {
        if (taskProps && !taskProps[index]) return null;
        return (
          taskProps ? <S.Planet
            position={(360 / partners.length) * (index + 1)}
            logo={partner.logo}
            isActive={taskProps[index].scoreNotNull}
            onClick={() =>
              taskProps[index].scoreNotNull ? () => { } :
                getTask(taskProps[index].contest_id, taskProps[index].nomination_id, taskProps[index].task_id, () => {
                  showModal(QuestionModal, {
                    img: partner.logo,
                    type: "sponsor",
                    nomination: {
                      id: taskProps[index].nomination_id,
                      contest_id: taskProps[index].contest_id
                    },
                  }, "question");
                })
            }
            key={`Planet/${index}`}
          /> : null);
      })}
    </S.Sun>
  </S.SunWheelWrapper>
);

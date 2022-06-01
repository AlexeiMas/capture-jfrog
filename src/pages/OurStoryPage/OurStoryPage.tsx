import React from "react";
import CommonLayout from '../../components/Layout/CommonLayout';
import { InfoBody } from "../../components/InfoBody";
import * as S from './OurStoryPage.styles';
import AstroFrogImage from '../../assets/frog_2.png';
import { Helmet } from "react-helmet-async";

export const OurStoryPage: React.FunctionComponent<null> = () => {
  return (
    <CommonLayout>
      <Helmet>
        <title>Our Story</title>
      </Helmet>
      <S.HomePageWrapper>
        <S.Container>
          <S.Body>
            <InfoBody
              smallText="Our story"
              largeText="capture the frog"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, sapien at iaculis tempor, mauris dui vehicula felis,
      vitae vulputate tortor nulla eu justo. Curabitur luctus rhoncus neque, in sollicitudin tellus suscipit ac. Aliquam orci dolor,
      pellentesque at condimentum eu, blandit vitae enim. "
            />
          </S.Body>
        </S.Container>
      </S.HomePageWrapper>
      <S.AstroFrog src={AstroFrogImage} />
    </CommonLayout>
  )
}

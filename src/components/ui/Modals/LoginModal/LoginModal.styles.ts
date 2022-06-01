import styled from 'styled-components/macro';
import background from '../../../../assets/background.svg';

export const LoginModalWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-image: url(${background});
  border: 1px solid #FFF;
  border-radius: 12px;
`;

export const WelcomeContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  letter-spacing: 1.2px;
  margin: 30px 0;
  display: block;
  font-size: 30px;
`;

export const WelcomeIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 24px;
  height: 24px;
  border: none;

`;

export const WelcomeIcon = styled.img`
  width: 32px;
  margin: 5px 0;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  max-width: 710px;
`;

export const ButtonContentWrapper = styled.div`
  max-width: 710px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    // margin: 0 60px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    // margin: 0 30px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0 60px;
  width: 320px;

  @media (max-width: 480px) {
    margin: 0 25px;
    width: 280px;
  }

  @media (max-width: 320px) {
    margin: 0 5px;
    width: 280px;
  }
`;

export const HrContainer = styled.div`
  display: flex;
  font-size: 28px;
  font-weight: 400;
  width: 100%;
  align-items: center;
`;

export const Hr = styled.div`
  height: 2px;
  width: 100%;
  background-color: #FFF;
`;

export const HrText = styled.div`
  font-size: 16px;
  margin: 0 15px;
`;

export const SignUpContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px 0;
  letter-spacing: 1.3px;
  font-size: 16px;
`;

export const SignUpLink = styled.a`
  cursor: pointer;
  color: #40BE46;
  text-decoration: none;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;

  @media (max-width: 480px) {
    margin: 15px 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 24px;
  padding: 13px 0;
  padding-left: 24px;
  background: transparent;
  border: 1.5px solid #fff;
  color: #fff;
`;

export const ErrorContainer = styled.div`
  font-size: 28px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  letter-spacing: 1.3px;
  color: red;

  @media (max-width: 1768px) {
    font-size: 16px;
  }
`;

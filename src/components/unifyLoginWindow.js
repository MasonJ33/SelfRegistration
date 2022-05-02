import pawsLogo from "../assests/paws-logo.png";
import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";

export const UnifyLoginWindow = ({ setProgress, tutorial }) => {

  const progressClick = () => {
    localStorage.setItem('pawsTutorialProgress', 64);
    setProgress(localStorage.getItem('pawsTutorialProgress'));
  }
  return (
    <Window>
      <Header>
        <img src={pawsLogo} alt="Logo" height={90} width={260} />
      </Header>
      <Page>
        <LoginPortal>
          <PortalHeader>UNIFY SIGN IN</PortalHeader>
          <FormContainer>
          <form>
            <Stack spacing={5}>
              <input></input>
              <input></input>   
              <StyledButton onClick={() => progressClick()}>Sign In</StyledButton>
            </Stack>
          </form>
          </FormContainer>
        </LoginPortal>
      </Page>
    </Window>
  )
}



const StyledButton = styled(Button)`
  color: white;
  background-color: #001580;
`;

const FormContainer = styled.div`
  padding: 20px 5px 20px 5px;
`;

const PortalHeader = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  padding: 3px 2px 3px 3px;
  background-color: #001580;
`;

const LoginPortal = styled.div`
  height: 300px;
  width: 400px;
  background-color: #FFFFFF;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 10px;
  padding-left: 10px;
  color: #001580;
  Background-color: #F9F9F9;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 12px;
  padding-left: 40px;
  height: 120px;
  width: 100%;
  background-color: #001580;
`;


const Window = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  min-width: 1600px;
  background-color: white;
  overflow: auto;
  border-style: solid;
  border-width: 5px;
  border-color: #005028;
  border-radius: 5px 5px 0 0;
  overflow-y: auto;
`;
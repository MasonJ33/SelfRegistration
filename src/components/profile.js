import styled from "@emotion/styled";
import React from "react";
import AuthenticationDataService from "../services/authentication.service";

export const Profile = () => {
    const userInfo = AuthenticationDataService.getCurrentUser();

    return (
        <Page>
          <h1>Profile Settings</h1>
          <p>
            Email: {userInfo.email}
          </p>
        </Page>
    )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #176122;
`;
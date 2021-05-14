import React, { useState } from "react";
import * as S from "./styled";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const AuthPage = () => {
  // const UserData = useSelector((state) => state)
  // const { user, signUpError, loading } = useSelector((state) => state.user);

  const history = useHistory();
  const [signUp, setSignUp] = useState(false);
  const { user, signUpData } = useSelector((state) => state.user);
  return (
    <S.Container>
      <S.FormWrapper>
        {!signUp && !user && (
          <>
            <SignInForm />
            <S.GoToSignUp onClick={() => setSignUp(true)}>
              Don't have an account? Sign up!
            </S.GoToSignUp>
          </>
        )}

        {user && !signUp && (
          <>
            <S.Title>You are signed in as {user.username}</S.Title>
            <S.GoToStartPage onClick={() => history.push("/")}>
              Go to the home page
            </S.GoToStartPage>
          </>
        )}

        {signUp && !signUpData && (
          <>
            <SignUpForm />
            <S.GoToSignIn onClick={() => setSignUp(false)}>
              Already have an account? Sign in!
            </S.GoToSignIn>
          </>
        )}

        {signUp && signUpData && (
          <>
            <S.Title>
              Account created with the username: {signUpData.username}
            </S.Title>
            <S.GoToSignIn onClick={() => setSignUp(false)}>
              Sign in with your new account!
            </S.GoToSignIn>
          </>
        )}
      </S.FormWrapper>
    </S.Container>
  );
};

export default AuthPage;

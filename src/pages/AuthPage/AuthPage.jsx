import React, { useState } from "react";
import * as S from "./styled";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

const AuthPage = () => {
  // const UserData = useSelector((state) => state)
  // const { user, signUpError, loading } = useSelector((state) => state.user);

  const [signUp, setSignUp] = useState(false);

  return (
    <S.Container>
      <S.FormWrapper>
        {!signUp && (
          <>
            <SignInForm />
            <S.GoToSignUp onClick={() => setSignUp(true)}>
              Don't have an account? Sign up!
            </S.GoToSignUp>
          </>
        )}

        {signUp && (
          <>
            <SignUpForm />
            <S.GoToSignIn onClick={() => setSignUp(false)}>
              Already have an account? Sign in!
            </S.GoToSignIn>
          </>
        )}
      </S.FormWrapper>
    </S.Container>
  );
};

export default AuthPage;

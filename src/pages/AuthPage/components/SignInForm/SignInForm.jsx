import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../components/Input";
import signinSchema from "../../../../validation/signinSchema";
import { userActions } from "../../../../redux/user";
import * as S from "./styled";
import Button from "../../../../components/Button";

const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signinSchema),
  });
  const dispatch = useDispatch();
  const { signInError } = useSelector((state) => state.user);

  const handleSignIn = (data) => {
    console.log("In handleSignIn");
    console.log(data);

    dispatch(userActions.signIn(data));
  };

  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <S.Form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          className="input"
          name="email"
          register={register}
          error={errors.email?.message}
          type="email"
          label="Email"
          required
        />
        <Input
          className="input"
          name="password"
          register={register}
          error={errors.password?.message}
          type="password"
          label="Password"
          required
        />

        <Button type="submit" title="Sign In" className="submit-btn" />
      </S.Form>
      {signInError && <span>{signInError}</span>}
    </S.Container>
  );
};

export default SignInForm;

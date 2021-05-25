import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../components/Input";
import signupSchema from "../../../../validation/signupSchema";
import { userActions } from "../../../../redux/user";
import * as S from "./styled";
import Button from "../../../../components/Button";

const SignUpForm = () => {
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const dispatch = useDispatch();
  const { signUpError } = useSelector((state) => state.user);

  const handleSignUp = (data) => {
    if (data.password !== data.confirmPassword) {
      return setError("confirmPassword", {
        type: "manual",
        message: "The password and confirm password do not match",
      });
    }
    dispatch(userActions.signUp(data));
  };

  return (
    <S.Container>
      <S.Title>Sign Up</S.Title>
      <S.Form onSubmit={handleSubmit(handleSignUp)}>
        <Input
          name="username"
          register={register}
          error={errors.username?.message}
          type="text"
          label="Username"
          required
        />
        <Input
          name="email"
          register={register}
          error={errors.email?.message}
          type="email"
          label="Email"
          required
        />
        <Input
          name="password"
          register={register}
          error={errors.password?.message}
          type="password"
          label="Password"
          required
        />
        <Input
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword?.message}
          type="password"
          label="Confirm password"
          required
        />
        <Button type="submit" title="Sign Up" className="submit-btn" />
      </S.Form>
      {signUpError && <span>{signUpError}</span>}
    </S.Container>
  );
};

export default SignUpForm;

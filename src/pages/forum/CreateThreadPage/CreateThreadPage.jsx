import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { threadActions } from "../../../redux/forum/threads";
import createThreadSchema from "../../../validation/createThreadSchema";
import * as S from "./styled";

const CreateThreadPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(createThreadSchema),
  });
  const dispatch = useDispatch();

  const { createdThread, createThreadError } = useSelector(
    (state) => state.forum.threads
  );
  const handleCreateThread = (data) => {
    console.log("In handleSignIn");
    console.log(data);

    dispatch(threadActions.createThread(data));
  };

  return (
    <S.Container>
      <PageTitle>Create Thread</PageTitle>

      <S.Form onSubmit={handleSubmit(handleCreateThread)}>
        <S.TitleInput
          name="title"
          register={register}
          error={errors.title?.message}
          type="text"
          label="Title"
          required
        />

        <S.BodyInput
          name="body"
          label="Body"
          multiline
          rows={4}
          variant="outlined"
          required
          inputRef={register}
          helperText={errors.body?.message}
          errors={errors.body}
        />

        <S.CategorySelect
          name="category"
          // register={register}
          error={errors.title?.message}
          type="text"
          label="Category"
          required
        />
        <S.TagsInput
          name="tags"
          // register={register}
          error={errors.title?.message}
          type="text"
          label="Tags"
          required
        />

        <S.SubmitButton type="submit" title="Create Thread" />
        {createThreadError && <span>{createThreadError}</span>}
        {createdThread && <span>{createdThread.title}</span>}
      </S.Form>
    </S.Container>
  );
};

export default CreateThreadPage;

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { threadActions } from "../../../redux/forum/threads";
import createThreadSchema from "../../../validation/createThreadSchema";
import * as S from "./styled";

const CreateThreadPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(createThreadSchema),
  });
  const { createThreadError } = useSelector((state) => state.forum.threads);

  const handleCreateThread = (data) => {
    dispatch(threadActions.createThread(data, history));
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
          label="Category"
          control={control}
          defaultValue="uncategorized"
          options={[
            { text: "Uncategorized", value: "uncategorized" },
            { text: "Review", value: "review" },
            { text: "Serum", value: "serum" },
          ]}
        />
        <S.TagsInput
          name="tags"
          error={errors.title?.message}
          type="text"
          label="Tags"
        />

        <S.SubmitButton type="submit" title="Create Thread" />
        {createThreadError && <span>{createThreadError}</span>}
      </S.Form>
    </S.Container>
  );
};

export default CreateThreadPage;

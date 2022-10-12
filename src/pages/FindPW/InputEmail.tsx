import React from 'react';
import { Input, Button, ErrorMessage } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { mailAPI } from '../../apis/auth';

type FormValues = {
  email: string;
};

const formSchema = Yup.object()
  .shape({
    email: Yup.string()
      .required('이메일을 입력해주세요')
      .email('이메일을 입력해주세요'),
  })
  .required();

const InputEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(formSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await mailAPI(data);
      })}
    >
      <p className="text-xl text-center my-7">
        가입하신 이메일을 입력해주세요
        <br />
        이메일 인증을 통해 비밀번호를 변경합니다.
      </p>
      <Input {...register('email')} error={errors.email} type="email" placeholder="이메일 입력" />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      <Button disabled={isSubmitting} type="submit" className="mt-7">
        이메일 인증
      </Button>
    </form>
  );
};

export default InputEmail;

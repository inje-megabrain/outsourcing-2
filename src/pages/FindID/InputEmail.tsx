import React from 'react';
import { Input, Button, ErrorMessage } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type FormValues = {
  name: string;
  email: string;
};

const formSchema = Yup.object()
  .shape({
    email: Yup.string()
      .required('이메일을 입력해주세요')
      .email('이메일을 입력해주세요'),
    name: Yup.string().required('이름을 입력해주세요'),
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
    <form onSubmit={handleSubmit(async (data) => {})}>
      <Input
        placeholder="이름 입력"
        error={errors.name}
        {...register('name')}
      />
      {<ErrorMessage>{errors.name?.message}</ErrorMessage>}
      <Input
        {...register('email')}
        error={errors.email}
        type="email"
        placeholder="이메일 입력"
      />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      <Button disabled={isSubmitting} type="submit" className="mt-7">
        아이디 찾기
      </Button>
    </form>
  );
};

export default InputEmail;

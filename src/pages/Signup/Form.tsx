import React from 'react';
import formSchema from './formSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, ErrorMessage } from '../../components';
import { signUpAPI } from '../../apis/member';

type FormValues = {
  name: string;
  company: string;
  username: string;
  password: string;
  passwordcheck: string;
  birthdate: number;
  email: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const inSubmit = (data: FormValues) => {
    signUpAPI(data);
  };

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        inSubmit(data);
      })}
    >
      <Input
        placeholder="이름 입력"
        error={errors.name}
        {...register('name')}
      />
      {<ErrorMessage>{errors.name?.message}</ErrorMessage>}
      <Input
        placeholder="기업명 입력"
        error={errors.company}
        {...register('company')}
      />
      {<ErrorMessage>{errors.company?.message}</ErrorMessage>}
      <Input
        placeholder="아이디 입력"
        error={errors.username}
        {...register('username')}
      />
      {<ErrorMessage>{errors.username?.message}</ErrorMessage>}
      <Input
        type="password"
        placeholder="비밀번호 입력"
        error={errors.password}
        {...register('password')}
      />
      {<ErrorMessage>{errors.password?.message}</ErrorMessage>}
      <Input
        type="password"
        placeholder="비밀번호 재입력"
        error={errors.passwordcheck}
        {...register('passwordcheck')}
      />
      {<ErrorMessage>{errors.passwordcheck?.message}</ErrorMessage>}
      <Input
        placeholder="생년월일 입력 (숫자 6자리)"
        error={errors.birthdate}
        {...register('birthdate')}
      />
      {<ErrorMessage>{errors.birthdate?.message}</ErrorMessage>}
      <Input
        type="email"
        placeholder="이메일 입력"
        error={errors.email}
        {...register('email')}
      />
      {<ErrorMessage>{errors.email?.message}</ErrorMessage>}
      <Button className="mt-3" type="submit" disabled={isSubmitting}>
        완료
      </Button>
    </form>
  );
};

export default Form;

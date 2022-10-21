import React from 'react';
import formSchema from './formSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, ErrorMessage } from '../../components';
import { signUpAPI } from '../../apis/member';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  name: string;
  companyName: string;
  username: string;
  password: string;
  passwordcheck?: string;
  birthDay: number;
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
  const navigate = useNavigate();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        delete data['passwordcheck'];
        signUpAPI(data, navigate);
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
        error={errors.companyName}
        {...register('companyName')}
      />
      {<ErrorMessage>{errors.companyName?.message}</ErrorMessage>}
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
        error={errors.birthDay}
        {...register('birthDay')}
      />
      {<ErrorMessage>{errors.birthDay?.message}</ErrorMessage>}
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

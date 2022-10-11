import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../apis/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Logo from '../../assets/logo.png';
import { Button, ErrorMessage, Input, MemberContainer } from '../../components';
import formSchema from './formSchema';

type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
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

  const onGuestModeButtonClick = (e: any) => {
    navigate('/mode/guest');
  };
  return (
    <MemberContainer>
      <img className="mx-auto mb-4" src={Logo} />
      <form
        onSubmit={handleSubmit(async (data) => {
          await loginAPI(data);
        })}
      >
        <Input
          type="text"
          placeholder="아이디 입력"
          className="mb-2"
          {...register('username')}
        />
        <Input
          type="password"
          placeholder="비밀번호 입력"
          {...register('password')}
        />
        {(errors.username || errors.password) && (
          <ErrorMessage>
            {errors.username?.message || errors.password?.message}
          </ErrorMessage>
        )}
        <h6 className="text-right my-7">
          <Link className="underline" to="/findid">
            아이디
          </Link>{' '}
          또는{' '}
          <Link className="underline" to="/findpw">
            비밀번호 찾기
          </Link>
        </h6>
        <Button type="submit" disabled={isSubmitting} className="mb-2">
          로그인
        </Button>
      </form>
      <Button className="mb-2" onClick={onGuestModeButtonClick}>
        게스트 모드
      </Button>
      <Link to="/signup">
        <h6 className="underline text-center mt-7">회원가입</h6>
      </Link>
    </MemberContainer>
  );
};
export default Login;

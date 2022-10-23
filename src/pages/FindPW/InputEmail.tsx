import React, { useEffect, useState } from 'react';
import { Input, Button, ErrorMessage, Loading } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { mailAPI } from '../../apis/auth';

interface Props {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPwLevel: React.Dispatch<React.SetStateAction<number>>;
}

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

const InputEmail: React.FC<Props> = ({ setEmail, setPwLevel }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    console.log('handleSUbmit: ' + isSubmitting);
  }, [isSubmitting]);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await mailAPI(data, setEmail, setPwLevel);
      })}
    >
      <p className="text-2xl text-center my-7">
        가입하신 이메일을 입력해주세요
        <br />
        이메일 인증을 통해 비밀번호를 변경합니다.
      </p>
      <Input
        {...register('email')}
        error={errors.email}
        type="email"
        disabled={isSubmitting}
        placeholder="이메일 입력"
      />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      <Button
        disabled={isSubmitting}
        type="submit"
        className="mt-7 flex items-center justify-center space-x-2"
      >
        <>
          {isSubmitting ? (
            <>
              <Loading title="" />
              이메일 전송 중...
            </>
          ) : (
            '이메일 인증'
          )}
        </>
      </Button>
    </form>
  );
};

export default InputEmail;

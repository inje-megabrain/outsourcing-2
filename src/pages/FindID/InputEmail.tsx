import React, { useState } from 'react';
import { Input, Button, ErrorMessage } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { findIdAPI } from '../../apis/member';
import ResultFindId from './ResultFindId';

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
  const [findedId, setFindedId] = useState('');
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
    <>
      {findedId === '' ? (
        <form
          className="mt-[83px]"
          onSubmit={handleSubmit((data) => {
            findIdAPI(data, setFindedId);
          })}
        >
          <Input
            placeholder="이름 입력"
            error={errors.name}
            className="mb-2 text-center"
            {...register('name')}
          />
          <Input
            {...register('email')}
            error={errors.email}
            className="text-center"
            type="email"
            placeholder="이메일 입력"
          />
          <Button disabled={isSubmitting} type="submit" className="mt-[73px]">
            아이디 찾기
          </Button>
        </form>
      ) : (
        <ResultFindId username={findedId} />
      )}
    </>
  );
};

export default InputEmail;

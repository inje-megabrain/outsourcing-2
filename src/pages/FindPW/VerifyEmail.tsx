import React from 'react';
import { Input, Button, ErrorMessage } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { mailcheckAPI } from '../../apis/auth';

interface Props {
  email: string;
  setPwLevel: React.Dispatch<React.SetStateAction<number>>;
}
type FormValues = {
  code: string;
  email: string;
};

const formSchema = Yup.object()
  .shape({
    code: Yup.string()
      .required('코드를 입력해주세요')
      .matches(/^[0-9]+$/, '코드를 입력해주세요'),
  })
  .required();

const VerifyEmail: React.FC<Props> = ({ email, setPwLevel }) => {
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
        mailcheckAPI(data, setPwLevel);
      })}
    >
      <Input
        {...register('email')}
        error={errors.email}
        value={email}
        type="email"
        disabled
        placeholder="이메일 입력"
      />
      <div className="grid grid-cols-3 gap-1 mt-2">
        <Input
          {...register('code')}
          error={errors.code}
          type="text"
          placeholder="인증번호 입력"
          className="col-span-2"
        />
        <Button className="w-auto">재전송</Button>
        <ErrorMessage>{errors.code?.message}</ErrorMessage>
      </div>
      <Button disabled={isSubmitting} type="submit">
        다음
      </Button>
    </form>
  );
};

export default VerifyEmail;

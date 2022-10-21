import React from 'react';
import { Button, ErrorMessage, Input } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newPasswordAPI } from '../../apis/member';
import * as Yup from 'yup';
interface Props {
  email: string;
  setPwLevel: React.Dispatch<React.SetStateAction<number>>;
}
type FormValues = {
  password: string;
  passwordcheck?: string;
};

const formSchema = Yup.object()
  .shape({
    password: Yup.string()
      .required('8-16자 영문 대소문자, 숫자, 특수문자를 1개씩 포함해주세요')
      .min(8, '8-16자 영문 대소문자, 숫자, 특수문자를 1개씩 포함해주세요')
      .max(16, '8-16자 영문 대소문자, 숫자, 특수문자를 1개씩 포함해주세요')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        '8-16자 영문 대소문자, 숫자, 특수문자를 1개씩 포함해주세요',
      ),
    passwordcheck: Yup.string()
      .required('비밀번호 확인은 필수입니다')
      .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다'),
  })
  .required();
const ChangePW: React.FC<Props> = ({ email, setPwLevel }) => {
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
      <form
        onSubmit={handleSubmit((data) => {
          delete data['passwordcheck'];
          newPasswordAPI(data, email, setPwLevel);
        })}
      >
        <Input
          type="password"
          error={errors.password}
          placeholder="새로운 비밀번호 입력"
          {...register('password')}
        />
        {<ErrorMessage>{errors.password?.message}</ErrorMessage>}
        <Input
          type="password"
          error={errors.passwordcheck}
          placeholder="비밀번호 재입력"
          {...register('passwordcheck')}
        />
        <ErrorMessage>{errors.passwordcheck?.message}</ErrorMessage>
        <Button className="mt-6" type="submit" disabled={isSubmitting}>
          비밀번호 변경
        </Button>
      </form>
    </>
  );
};

export default ChangePW;

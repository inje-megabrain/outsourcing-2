import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { mailAPI } from '../../apis/auth';
import { Button, ErrorMessage, Input, Loading } from '../../components';

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
    <>
      <p className="w-[600px] text-[32px] text-center mt-[61px] mb-[48px] font-normal leading-[39px]">
        가입하신 이메일을 입력해주세요
        <br />
        이메일 인증을 통해 비밀번호를 변경합니다.
      </p>
      <form
        onSubmit={handleSubmit(async (data) => {
          await mailAPI(data, setPwLevel, setEmail);
        })}
      >
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
                <Loading />
                전송 중...
              </>
            ) : (
              '이메일 인증'
            )}
          </>
        </Button>
      </form>
    </>
  );
};

export default InputEmail;

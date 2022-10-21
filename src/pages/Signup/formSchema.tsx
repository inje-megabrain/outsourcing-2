import React from 'react';
import * as Yup from 'yup';

const formSchema = Yup.object()
  .shape({
    name: Yup.string().required('이름을 입력해주세요'),
    username: Yup.string()
      .required('올바른 아이디를 입력해주세요')
      .min(5, '아이디는 최소 5자로 입력해주세요')
      .max(12, '아이디는 최대 12자로 입력해주세요'),
    company: Yup.string().required('올바른 기업 명을 입력해주세요'),
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
    birthdate: Yup.string()
      .required('생년월일 숫자 6자를 입력해주세요')
      .matches(/^[0-9]+$/, '생년월일 숫자 6자를 입력해주세요.')
      .min(6, '생년월일 숫자 6자를 입력해주세요.')
      .max(6, '생년월일 숫자 6자를 입력해주세요.'),
    email: Yup.string()
      .email('이메일 형식이 맞지 않습니다')
      .required('이메일을 입력해주세요'),
  })
  .required();

export default formSchema;

import * as Yup from 'yup';

const formSchema = Yup.object()
  .shape({
    username: Yup.string().required('아이디 또는 비밀번호를 입력해주세요'),
    password: Yup.string().required('아이디 또는 비밀번호를 입력해주세요'),
  })
  .required();

export default formSchema;

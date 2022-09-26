import React from 'react';
import { Stack, Button } from 'react-bootstrap';

const Main = () => (
  <div>
    <Stack gap={2} style={{ padding: '20px', maxWidth: '700px' }}>
      <h4 style={{ textAlign: 'left' }}>
        환영합니다.
        <br />본 프로그램은 선박 도장 훈련을 목적으로 설계되었습니다.
      </h4>
      <Button variant="primary" size="lg">
        시작하기
      </Button>
    </Stack>
  </div>
);
export default Main;

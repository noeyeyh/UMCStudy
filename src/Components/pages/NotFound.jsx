import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFound = () => {
  return (
    <ContentLayout>
      <div>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <p style={{ marginBottom: 24 }}>
          주소가 잘못되었거나 삭제되었을 수 있습니다.
        </p>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
          메인 페이지로 돌아가기
        </Link>
      </div>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  height: 100vh;
  padding: 12px;
  color: white;
  background-color: #464b8d;
`;

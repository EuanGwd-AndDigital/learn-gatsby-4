import React from 'react';
import styled from 'styled-components';

const IndexPage = () => {
  return (
    <Main>
      <div>{`Testing gatsby 4`}</div>
    </Main>
  );
};

export default IndexPage;

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

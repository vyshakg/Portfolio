import styled from "styled-components";

export const Layout = styled.div`
  background: #182538;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  max-width: 1128px;
  // width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  @media (max-width: 481px) {
    margin-left: 2rem;
    padding: 0;
    margin-right: 2rem;
  }

  @media (max-width: 1024px) {
    max-width: 835px;
  }
`;

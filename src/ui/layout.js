import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  background: ${props => props.theme.behindScreen};
  transition: all 0.4s ease-out;
`;

export const Layout = styled.div`
  background: ${props => props.theme.background};
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: box-shadow 0.4s ease;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  max-width: 1128px;
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

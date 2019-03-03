import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  flex-direction: column;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const ProjectContainer = styled.div`
  height: 350px;
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

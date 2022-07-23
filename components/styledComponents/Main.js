import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  height: calc(100vh - 100px);
  ${(props) =>
    props.main
      ? `
    display: flex;
    justify-content: center;
    align-items: center; 
  `
      : ``}
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  color: #333;
  padding-bottom: 20px;
  text-align: center;
`;

import styled from "styled-components";

export const TopNavbar = styled.div`
  background-color: #555;
  min-height: 50px;
`;

export const NavbarTag = styled.a`
  float: left;
  color: #f2f2ff;
  font-size: 17px;
  padding: 14px 16px;

  &:hover {
    background-color: #ddd;
    color: #000;
  }

  ${(props) => (props.active ? `background-color: #52cc9f` : ``)}
`;

import styled from "styled-components";

export const Img = styled.img `
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
`;
export const ProfileContainer = styled.div `
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;
export const Header = styled.header `
  display: flex;
  align-items: center;
`;
export const Button = styled.button `
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2;
`;
export const Ulc = styled.ul `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;

export const Lic = styled.li `
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const Buttonc = styled.button `
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
`;

export const Strongc = styled.strong `
  display: block;
  margin-bottom: 16px;
  color: #41414d;
`;

export const Pc = styled.p `
  color: #737380;
  line-height: 21px;
  font-size: 16px;
`;
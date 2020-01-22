import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  margin-right: 10px;
  vertical-align: middle;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }

  &:title {
    background-color: white;
    color: black;
  }
`;

const googleSignInStyles = css`
  width: 30px;
  height: 20px;
  line-height: 20px;
  float: right;
  font-size: 10px;
`;

const getButtonStyles = props => {
  
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 80px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 30px;
  padding: 0 35px 0 35px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  vertical-align: middle;

  ${getButtonStyles}
`;

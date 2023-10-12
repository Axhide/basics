import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: "primary" | "outline"
    active?: boolean
}

export const StyledBtn = styled.button <StyledBtnPropsType>`
  border: none;
    // background-color: ${props => props.color || "blue"};
  padding: 16px 23px;
  border-radius: 5px;
  //color: snow;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  //outline

  ${props => props.btnType === "outline" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "blue"};
    color: ${props => props.color || "blue"};
    background-color: transparent;

    &:hover {
      border-color: darkgreen;
      color: darkgreen;
      background-color: transparent;
    }
  `} //primary

  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "blue"};
    color: snow;

    &:hover {
      background-color: darkgreen;
    }
  `}

  ${props => props.active && css <StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px #25252c;
  `}
`
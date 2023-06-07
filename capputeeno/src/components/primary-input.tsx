import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const InputContainer = styled.div`
  position: relative;
  width: 200px;

  svg {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 352px;

    svg {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 10px;

  background-color: var(--bg-secondary);
  color: var(--text-dark);

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 10px 16px;
    font-size: 14px;
    line-height: 22px;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}

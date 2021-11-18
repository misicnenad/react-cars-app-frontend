import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.div`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    cursor-pointer
  `}
`;

const OutlinedButton = styled(BaseButton)`
  background-color: ${props => props.theme.main};

  &:hover {
    color: ${props => props.theme.main};
    border-color: ${props => props.theme.main};
    background: transparent;
  }
`;

const FilledButton = styled(BaseButton)`
  border-color: ${props => props.theme.main};
  color: ${props => props.theme.main};

  &:hover {
    background-color: ${props => props.theme.main};
    color: white;
    border-color: transparent;
  }
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled") {
    return <FilledButton className={className}>{text}</FilledButton>;
  } else {
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
  }
}

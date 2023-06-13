"use client";

import styled from "styled-components";

import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputSearchIcon } from "./primary-input";
import { CartControl } from "./icons/cart-control";
import useFilter from "@/hooks/useFilter";

const sairaStencilOne = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  height: 80px;
  background-color: white;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;

    > div {
      gap: 24px;
    }
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

export function Header() {
  const { search, setSearch } = useFilter();

  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className} href="/">
        capputeeno
      </Logo>
      <div>
        <PrimaryInputSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}

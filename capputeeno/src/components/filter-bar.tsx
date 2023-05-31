"use client";

import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}

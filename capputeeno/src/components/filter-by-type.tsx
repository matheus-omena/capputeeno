import useFilter from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    gap: 40px;
  }
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;

  text-align: center;
  text-transform: uppercase;

  color: ${(props) => (props.selected ? "var(--dark)" : "var(--text-dark)")};

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        TODOS OS PRODUTOS
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRTS}
        onClick={() => handleChangeType(FilterType.SHIRTS)}
      >
        CAMISETAS
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUGS}
        onClick={() => handleChangeType(FilterType.MUGS)}
      >
        CANECAS
      </FilterItem>
    </FilterList>
  );
}

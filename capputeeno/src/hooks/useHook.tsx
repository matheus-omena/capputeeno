import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export default function useFilter() {
  return useContext(FilterContext);
}

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0px 5px;
  font-size: 10px;

  background: var(--delete-color);
  color: white;

  margin-left: -10px;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items", []);
  const router = useRouter();

  return (
    <Container onClick={() => router.push("/cart")}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}

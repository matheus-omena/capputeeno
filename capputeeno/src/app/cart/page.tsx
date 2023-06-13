"use client";

import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { Divider } from "@/components/divider";
import { GoBackButton } from "@/components/go-back-button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 150%;
    color: var(--dark);
    margin-top: 24px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--dark);

    span {
      font-weight: 600;
    }
  }
`;

const CartList = styled.ul`
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  min-width: 352px;
  padding: 16px 24px;

  background-color: white;

  section:nth-child(1) {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: 600;
      font-size: 20px;
      color: var(--dark);
      text-transform: uppercase;
      margin-bottom: 29px;
    }
  }

  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      text-decoration-line: underline;
      text-transform: uppercase;
      color: var(--text-dark);
    }
  }
`;

const TotalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  color: var(--dark);
`;

const TotalCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  color: var(--dark);
`;

const Button = styled.button`
  margin-top: 40px;
  text-align: center;
  height: 44px;
  background-color: var(--green);
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  color: var(--shapes-light);
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
`;

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );

  const calculateTotalProducts = (value: ProductInCart[]) => {
    return formatPrice(
      value.reduce(
        (sum, item) => (sum += item.price_in_cents * item.quantity),
        0
      )
    );
  };

  const productsTotal = calculateTotalProducts(value);

  const calculateTotalCart = (value: ProductInCart[]) => {
    return formatPrice(
      value.reduce(
        (sum, item) => (sum += item.price_in_cents * item.quantity),
        0
      ) + 4000
    );
  };

  const cartTotal = calculateTotalCart(value);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });

    updateLocalStorage(newValue);
  };

  const handleRemoveFromCart = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <GoBackButton navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total ({value.length} produtos) <span>{productsTotal}</span>
          </p>
          <CartList>
            {value.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleRemoveFromCart}
              />
            ))}
          </CartList>
        </CartListContainer>

        <CartResultContainer>
          <section>
            <h3>Resumo do pedido</h3>
            <TotalItem>
              <p>Subtotal de produtos</p>
              <p>{productsTotal}</p>
            </TotalItem>
            <TotalItem>
              <p>Entrega</p>
              <p>{formatPrice(4000)}</p>
            </TotalItem>

            <Divider />

            <TotalCart>
              <p>Total</p>
              <p>{cartTotal}</p>
            </TotalCart>

            <Button>Finalizar a compra</Button>
          </section>

          <section>
            <a href="#">Ajuda</a>
            <a href="#">Reembolsos</a>
            <a href="#">Entregas e frete</a>
            <a href="#">Trocas e devoluções</a>
          </section>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}

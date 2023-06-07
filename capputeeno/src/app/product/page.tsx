/* eslint-disable @next/next/no-img-element */
"use client";

import { DefaultPageLayout } from "@/components/default-page-layout";
import { GoBackButton } from "@/components/go-back-button";
import { BagIcon } from "@/components/icons/bag-icon";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 24px;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--dark);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--dark);
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: var(--shapes-dark);
    margin-top: 4px;
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: var(--dark);
  }

  div {
    margin-top: 24px;

    h3 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: var(--text-dark);
      margin-bottom: 8px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: var(--dark);
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 44px;
  background-color: var(--brand-blue);
  border: 0;
  border-radius: 4px;

  color: var(--shapes-light);
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data } = useProduct(searchParams.id);

  return (
    <DefaultPageLayout>
      <Container>
        <GoBackButton navigate="/" />

        <section>
          <img src={data?.image_url} alt={data?.name} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>DESCRIÇÃO</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>

            <Button>
              <BagIcon />
              <span>ADICIONAR AO CARRINHO</span>
            </Button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  );
}

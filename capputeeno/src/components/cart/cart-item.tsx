/* eslint-disable @next/next/no-img-element */
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { TrashIcon } from "../icons/trash-icon";

interface CartItemProps {
  product: ProductInCart;
  handleUpdateQuantity: (id: string, quantity: number) => void;
  handleDelete: (id: string) => void;
}

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;

  border-radius: 8px;
  background-color: white;

  img {
    max-height: 100%;
    min-width: 256px;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px 24px;
    line-height: 150%;
    color: var(--dark);

    div:nth-child(1) {
      h4 {
        font-weight: 300;
        font-size: 20px;
      }

      > p {
        margin-top: 12px;
        font-weight: 400;
        font-size: 12px;
      }
    }

    div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-weight: 600;
        font-size: 16px;
        color: var(--shapes-dark);
      }
    }
  }
`;

const Select = styled.select`
  font-family: inherit;
  height: 40px;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background: #f3f5f6;
  width: 65px;
  padding: 0px 12px;
  color: var(--text-dark);
  font-weight: 400;
  font-size: 16px;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export function CartItem({
  product,
  handleUpdateQuantity,
  handleDelete,
}: CartItemProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value));
  };

  return (
    <Item>
      <DeleteBtn
        onClick={() => handleDelete(product.id)}
        aria-label="Remove from cart"
      >
        <TrashIcon />
      </DeleteBtn>
      <img src={product.image_url} alt={product.name} />
      <div>
        <div>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
        <div>
          <Select defaultValue={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Select>
          <span>{formatPrice(product.price_in_cents * product.quantity)}</span>
        </div>
      </div>
    </Item>
  );
}

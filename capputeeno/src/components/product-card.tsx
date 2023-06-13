/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/utils/format-price";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  border-radius: 4px;
  width: 256px;

  img {
    width: 256px;
    height: 300px;
    object-fit: cover;
  }

  h3 {
    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--dark);
  }

  p {
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;

    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background-color: var(--shapes);
    }
  }
`;

export function ProductCard({ id, image, title, price }: ProductCardProps) {
  const router = useRouter();
  const priceInReal = formatPrice(price);

  const handleNavigate = () => {
    router.push(`/product?id=${id}`);
  };

  return (
    <Card onClick={handleNavigate}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <div />
        <p>{priceInReal}</p>
      </div>
    </Card>
  );
}

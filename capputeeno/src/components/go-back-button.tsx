import styled from "styled-components";
import { GoBackIcon } from "./icons/go-back-icon";
import { useRouter } from "next/navigation";

interface ButtonProps {
  navigate: string;
}

export function GoBackButton({ navigate }: ButtonProps) {
  const router = useRouter();

  const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    > span {
      font-family: inherit;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: var(--text-color);
    }
  `;

  const handleNavigate = () => {
    router.push(navigate);
  };

  return (
    <Button onClick={handleNavigate}>
      <GoBackIcon />
      <span>Voltar</span>
    </Button>
  );
}

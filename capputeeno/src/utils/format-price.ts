export function formatPrice(valueInCents: number) {
  const valueInReal = valueInCents / 100;
  return valueInReal.toLocaleString("prt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
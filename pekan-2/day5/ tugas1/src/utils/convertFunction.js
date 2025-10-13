export function toDollar(rupiah) {
  return rupiah / 15000;
}

export function toRupiah(dollar) {
  return dollar * 15000;
}

export function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) return "";
  const output = convert(input);
  return (Math.round(output * 100) / 100).toString();
}

// Small-price display helper extracted from the terminal UI.
export function psubParts(v) {
  if (!Number.isFinite(v) || v <= 0) return { zeros: 0, digits: "0" };
  const zeros = Math.ceil(-Math.log10(v)) - 1;
  const digits = Math.round(v * Math.pow(10, zeros + 4)).toString().slice(0, 4).replace(/0+$/, "") || "0";
  return { zeros, digits };
}

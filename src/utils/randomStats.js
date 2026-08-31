const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const statTemplates = [
  () => ({
    target: 1,
    prefix: "$",
    suffix: "B",
    label: "Assets under management across digital & traditional markets",
  }),
  () => ({
    target: rand(48, 220),
    suffix: "+",
    label: "Institutional counterparties served globally",
  }),
  () => ({
    target: rand(22, 58),
    suffix: "",
    label: "Markets covered — spot, derivatives, private & structured products",
  }),
];

export function generateRandomStats() {
  return statTemplates.map((template) => template());
}

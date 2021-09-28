///*********** Keyof */
const color: Color = {
  red: 34,
  green: 10,
  blue: 9
};

interface Color {
  red: number;
  green: number;
  blue: number;
}

type Field = keyof Color;

const setColor = (color: Color) => {};

const changeColor = (colorC: Field, newValue: number) => {
  const newColor = { ...color, [colorC]: newValue };
  setColor(newColor);
};

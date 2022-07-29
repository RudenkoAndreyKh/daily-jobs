import { fontSizeValues, fontWeightValues, lineHeightValues } from "./values";

const fontSize = (value) => `${fontSizeValues[value]}rem`;
const lineHeight = (value) => `${lineHeightValues[value]}rem`;
const fontWeight = (value) => fontWeightValues[value];

export {
    fontSize,
    lineHeight,
    fontWeight
}
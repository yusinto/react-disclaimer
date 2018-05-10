import hash from './hash';

const symbols = [
  '!', '#', '$', '%', '^', '&', '*', '+',
  '!!', '##', '$$', '%%', '^^', '&&', '**', '++',
  '!!!', '###', '$$$', '%%%', '^^^', '&&&', '***', '+++',
  '!!!!', '####', '$$$$', '%%%%', '^^^^', '&&&&', '****', '++++',
];

export const getSymbol = (disclaimerText) => symbols[hash(disclaimerText) - 1];
export default getSymbol;
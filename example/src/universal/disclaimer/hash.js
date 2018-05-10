// Ripped from https://gist.github.com/thejsj/481602b414c2f8defd03d41a23c255d8
// maxNumber will be the highest value provided by this hashing function
const maxNumber = 32;
let table = [...new Array(maxNumber)].map((_, i) => i);

const hash = (input) => {
  return input.split('').reduce((hash, c) => {
    return table[(hash + c.charCodeAt(0)) % (table.length - 1)]
  }, input.length % (table.length - 1))
};

export default hash;
const CryptoJS = require('crypto-js');

const SECRET = "ZmZ_S3cr3t_2026";

const tokenParts = [
  ["U2FsdGVkX1", "8T3x9k7mNp", "Q7aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789abcdef=="]
];

const tokens = tokenParts.map(parts => {
  const full = parts.join('');
  const bytes = CryptoJS.AES.decrypt(full, SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
});

console.log("Tokens:", tokens);

const CryptoJS = require('crypto-js');

const SECRET = "ZmZ_S3cr3t_2026";

const tokenParts = [
  ["8583548382:", "AAFzMhPRVPxYCtuME", "kXxi6vZlh2qmDc1PMU"]
];

const tokens = tokenParts.map(parts => {
  const full = parts.join('');
  const bytes = CryptoJS.AES.decrypt(full, SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
});

console.log("Tokens:", tokens);

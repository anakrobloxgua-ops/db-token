const CryptoJS = require('crypto-js');
const fs = require('fs');

// KUNCI RAHASIA - GANTI DENGAN YANG LU MAU
const SECRET_KEY = "ZmZ_Encrypt_2026_!@#$";

// Token asli
const originalTokens = [
  "7608889508:AAHWyHrdZB29R94dXHsGx0OS-cheTeHCpyc",
  "8583548382:AAFzMhPRVPxYCtuMEkXxi6vZlh2qmDc1PMU"
];

// Enkripsi
const encryptedTokens = originalTokens.map(token => {
  return CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
});

// Buat token.json
const tokenData = {
  tokens: encryptedTokens
};

fs.writeFileSync('token.json', JSON.stringify(tokenData, null, 2));
console.log('✅ token.json created!');
console.log('Secret key:', SECRET_KEY);

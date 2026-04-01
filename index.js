const axios = require('axios');
const CryptoJS = require('crypto-js');

// ============ KONFIGURASI ============
const GITHUB_URL = "https://raw.githubusercontent.com/anakrobloxgua-ops/db-token/refs/heads/main/token.json";

// KUNCI RAHASIA - GANTI DENGAN YANG LU PAKAI DI ENCRYPT.JS
const SECRET_KEY = "ZmZ_Encrypt_2026_!@#$";
// =====================================

async function getTokens() {
  try {
    const { data } = await axios.get(GITHUB_URL);
    
    if (!data.tokens) return [];
    
    const tokens = data.tokens.map(encrypted => {
      const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
    }).filter(t => t);
    
    console.log(`✅ Loaded ${tokens.length} tokens`);
    return tokens;
    
  } catch (err) {
    console.log("❌ Failed to fetch tokens:", err.message);
    return [];
  }
}

// Contoh penggunaan
getTokens().then(tokens => {
  console.log("Tokens:", tokens);
});
